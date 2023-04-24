import React, { useState,useEffect } from 'react';
import { Rate } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const RestaurantInfo = () => {
    const restaurantName = '合味居酒屋（平型关路店）';
    const average = 130;
    const photoNumber = '110';
    const cookingStyle = '江浙菜';
    const openingHours = '10:00 AM - 9:00 PM';
    const [galleryVisible, setGalleryVisible] = useState(false);
    const [mapVisible, setMapVisible] = useState(false);
    const [mapUrl, setMapUrl] = useState('');
    const location = {
        address: '浙江省杭州市西湖区西湖国宾馆·西湖第一名园·紫薇厅',
        lat: 30.245853,
        lng: 120.127789,
    };

    const [params] = useSearchParams()
    const id = params.get('id')
    const[foodData,setFoodData] = useState([])
    useEffect(()=>{
        axios.get('/details',{
            foodData:{
                foodId:0,
                foodName:"@name",
                foodImage:"@image('100x100','red','#fff','food')",
                foodStar:1,
                foodPrice:1,
                foodType:1,
                address:"@county",
                ditance:1
            }
        }).then(res=>{
            setFoodData(res.data.data)
          
        })
    },[])

    let data = foodData.find(dataItem=>dataItem.foodId==id)
    let fData = Object.assign({},data)
    const rating = fData.foodStar;
    const cuisine =[ '鲁菜','川菜','粤菜','苏菜','闽菜','浙菜','湘菜','徽菜']
    const handleMapClick = () => {
        const keywords = encodeURI(location.address);
        const mapUrl = `https://www.amap.com/search?query=${keywords}`;
        window.open(mapUrl, '_blank');
    };


    return (
        <div style={{  textAlign:'left',bottom: 0, left: 0, right: 0, zIndex: 0, backgroundColor: '#f1f1f1', padding: '15px', borderRadius: '10px' ,marginBottom:'5px'}}>
            <h3 style={{ marginBottom: '10px' }}>{fData.foodName}</h3>
            <div style={{  marginBottom: '10px' }}>
                <span style={{ marginRight: '10px' }}>打分：</span>
                <Rate disabled defaultValue={4} allowHalf />
                <span style={{ marginLeft: '10px' }}>{rating} 分</span>
            </div>
            <div style={{ marginBottom: '10px' }}>人均：{fData.foodPrice}</div>
            <div style={{ marginBottom: '10px' }}>菜系：{cuisine[fData.foodType] }</div>
            <div style={{ marginBottom: '10px' }}>营业时间：{fData.openTime}:00 AM - {fData.closeTime}:00 PM</div>
            <div style={{ marginBottom: '10px' }}>电话：{fData.tel}</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px' }}>地点：</span>
                <span>{location.address}</span>
                <EnvironmentOutlined style={{ marginLeft: '10px', fontSize: '16px', cursor: 'pointer' }} onClick={handleMapClick} />
            </div>
        </div>
    );
};

export default RestaurantInfo;
