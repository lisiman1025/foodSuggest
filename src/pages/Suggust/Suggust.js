import{Select,Row,Col,Button} from 'antd'
import { useEffect, useState } from 'react';
import './Suggust.css'
import '../../mock/foodList'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Suggust(){
    const[foodData,setFoodData] = useState([])
    const[baseData,setBaseData] = useState([])
    const[itemNum ,setItemNum] = useState(10)
    const [select, setSelect] = useState({  
        distance:0,
        foodType:0,
        foodStar:0,
        foodPrice:0,
        sever:0,
        searchWay:0 });
    const navigate = useNavigate()
    const cuisine =[ '鲁菜','川菜','粤菜','苏菜','闽菜','浙菜','湘菜','徽菜']
    useEffect(()=>{
        axios.get('/Suggust',{
            fooddata:{
                foodId:1,
                foodName:"@name",
                foodImage:"@image('100x100','red','#fff','food')",
                foodStar:1,
                foodPrice:1,
                foodType:1,
                address:"@county",
                distance:1
            }
        }).then(res=>{
            res = res.data.data
            setBaseData(res)
            setFoodData(res.splice(0,itemNum))
        })
    },[])
    //筛选值变化
    useEffect(()=>{
       setFoodData(foodDataChange(select,baseData).splice(0,itemNum))
    },[select.distance,select.cuisine,select.star,select.price,select.sever,select.searchWay])

    //得到筛选值
    function distanChange(value){
        let {distance,cuisine,star,price,sever,searchWay} = select
        distance = value
        setSelect({distance,cuisine,star,price,sever,searchWay})
    }
    function cuisineChange(value){
        let {distance,cuisine,star,price,sever,searchWay} = select
        cuisine = value
        setSelect({distance,cuisine,star,price,sever,searchWay})
    }
    function multipleChange(value){
        let {distance,cuisine,star,price,sever,searchWay} = select
        let mulData = value
        for(var i=0;i<mulData.length;i++)
        {
            if(mulData[i]<=5&&mulData[i]>0){
                star = value[i]
            }else if(mulData[i]>=100){
                price = value[i]
            }else{
                sever = value[i]
            }
        } 
        setSelect({distance,cuisine,star,price,sever,searchWay})
    }
    function searchWayChange(value){
        let {distance,cuisine,star,price,sever,searchWay} = select
        searchWay = value
        setSelect({distance,cuisine,star,price,sever,searchWay})
    }
    function onMoreItem(){
        //加载更多
        setItemNum(itemNum+5)
        setFoodData(foodDataChange(select,baseData).splice(0,itemNum))
    }
    //根据select的值更新foodData
    function foodDataChange(sel,foodData){
        //筛选
        let list = [{}]
        list =foodData
        let distance =parseInt(sel.distance)
        //位置
        let filterList =[{}]
        filterList=list
        if(distance!=0){
            filterList = filterList.filter((listItem)=>{ 

               return (
                listItem.ditance <= distance
               )
            })
        }
       //菜系
        if(sel.cuisine!=undefined)
        {
            filterList = filterList.filter((listItem=>{
                return(listItem.foodType===sel.cuisine)
            }))
        }
        //评分
        if(sel.star!=undefined)
        {
            filterList = filterList.filter((listItem=>{
                return(listItem.foodStar===sel.star)
            }))
        }
        //价格
        if(sel.price!=undefined)
        {
            if(sel.price<=300){
                 filterList = filterList.filter((listItem=>{
                return(listItem.foodPrice<=sel.price&&listItem.foodPrice>(sel.price-100))
            }))
            }else if(sel.price>300){
                filterList = filterList.filter((listItem=>{
                    return(listItem.foodPrice>=sel.price)
                }))
            }
        }
        //服务
        if(sel.sever!=0)
        {
            filterList = filterList.filter((listItem=>{
                return(listItem.sever===sel.sever)
            }))
        }
        //排序
        if(sel.searchWay ==='3'){
            filterList.sort(sortPriceMinToMax)
            console.log(filterList)
        }else if(sel.searchWay === '2'){
            filterList.sort(sortPriceMaxToMin)
        }else if(sel.searchWay === '1'){
            filterList.sort(sortDistance)
        }else{
            filterList = filterList
        }
        return(filterList)
     }
     //根据价格排序
     function sortPriceMinToMax(a,b){
            return a.foodPrice - b.foodPrice
     }
     function sortPriceMaxToMin(a,b){
        return b.foodPrice - a.foodPrice
    }
    //根据距离排序
    function sortDistance(a,b){
        return a.ditance -b.ditance
    }
    //跳转到详情页
    const goDetail=(id)=>{
      navigate(`/details?id=${id}`)
    }
    return(
        <div  className='bg' >
            {/* 筛选框  */}
            <div className='foodSeclect'  style={{width:'100%',height:'35px',position:'fixed',top:'5px',backgroundColor:'#FFFFFF'}}>
                {/* 位置 */}
            <Row>
                <Col span={6}>
                <Select
                    className='seclectItem'
                    id='distan'
                    title='位置'
                    bordered={false}
                    placeholder="全部场景"
                    defaultValue={'位置'}
                    style={{
                        width: 120,
                    }}
                    onChange={distanChange}
                    options={[
                        {
                        value: '500',
                        label: '500m内',
                        },
                        {
                        value: '1000',
                        label: '1km内',
                        },
                        {
                        value: '2000',
                        label: '2km内',
                        },
                        {
                        value: '3000',
                        label: '3km内',
                        },
                    ]}
                />
                </Col>
                <Col span={6}>
                {/* 菜系 */}
                <Select
                    className='seclectItem'
                    id='cuisine'
                    title='菜系'

                    bordered={false}
                    defaultValue={'菜系'}
                    style={{
                        width: 120,
                    }}
                    onChange={cuisineChange}
                    options={[
                        {
                        value: 1,
                        label: '鲁菜',
                        },
                        {
                        value: 2,
                        label: '川菜',
                        },
                        {
                        value: 3,
                        label: '粤菜',
                        },
                        {
                        value: 4,
                        label: '苏菜',
                        },
                        {
                            value: 5,
                            label: '闽菜',
                        },
                        {
                            value: 6,
                            label: '浙菜',
                        },
                        {
                            value: 7,
                            label: '湘菜',
                        },
                        {
                            value: 8,
                            label: '徽菜',
                        },
                    ]}
                />
                </Col>
                <Col span={6}>
                {/* 多重筛选 */}
                <Select
                    bordered={false}
                    className='seclectItem'
                    id='mulSelect'
                    defaultValue="筛选"
                    maxTagCount='1'
                    showSearch={false}
                    mode="multiple"
                    style={{
                        flexDirection:'row',
                    width: 200,
                    }}
                    onChange={multipleChange}
                    options={[
                    {
                        label: '星级',
                        options: [
                        {
                            label: '1星',
                            value: 1,
                        },
                        {
                            label: '2星',
                            value: 2,
                        },
                        {
                            label: '3星',
                            value: 3,
                        },
                        {
                            label: '4星',
                            value: 4,
                        },
                        {
                           label: '5星',
                            value: 5,
                        },
                    ],
                    },
                    {
                        label: '价格',
                        options: [
                        {
                            label: '300以上',
                            value: 301,
                        },
                        {
                            label: '200-300',
                            value: 300,
                        },
                        {
                            label: '100-200',
                            value: 200,
                        },
                        {
                            label: '100以内',
                            value: 100,
                        },
                        ],
                    },
                    {
                        label:'服务',
                        options:[
                            {
                                label:'代金卷/套餐',
                                value:-1
                            },
                            {
                                label:'在线订座',
                                value:-2
                            }
                        ]
                    },
                    ]}
                />
                </Col>
                <Col span={6}>
                <Select
                    className='seclectItem'
                    id='search'
                    bordered={false}
                    title='智能排序'
                    defaultValue={'智能排序'}
                    style={{
                        width: 120,
                    }}
                    onChange={searchWayChange}
                    options={[
                        {
                        value: '0',
                        label: '智能排序',
                        },
                        {
                        value: '1',
                        label: '距离最近',
                        },
                        {
                        value: '2',
                        label: '人均最高',
                        },
                        {
                        value: '3',
                        label: '人均最低',
                        },
                    ]}
                />
                </Col>
            </Row>
            </div>
            <div className='showFood'>
                <ul className='foodList'>
                    {foodData.map(dataItem=>
                        <li key={dataItem.foodId}>
                        <div className='foodItem'  onClick={()=>goDetail(dataItem.foodId)}>
                            <div className='leftItem'>
                            <img className="mainImg" src={dataItem.foodImage}/>
                            </div>
                            
                            <div className='rightItem'>
                                <div className='foodName'>{dataItem.foodName}</div>
                                <div className='foodInfo'>
                                    <span className='foodStar'>{dataItem.foodStar}星|</span> 
                                    <span className='foodPrice'>￥{dataItem.foodPrice}/人</span>
                                </div>
                               <div className='addressInfo'>
                                    <span className='address'>{cuisine[dataItem.foodType-1] } {dataItem.address}</span>
                                    <span className='distance'>距您{dataItem.ditance}m</span> 
                               </div>
                            </div>
                        </div>
                    </li>)}
                </ul>
            </div>
            <Button className='moreItem' onClick={()=>onMoreItem()}>加载更多</Button>
        </div>
    )
}
export default Suggust
