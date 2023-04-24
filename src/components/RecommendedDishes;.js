import React from 'react';

const RecommendDish = () => {
    const dishes = [
        {
            name: '红烧肉',
            image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbdbceeda-511a-4abc-8843-38ffcfa37721%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684926343&t=39cf1d1c89a5e2d7216c7ebf4f18c4e5',
        },
        {
            name: '宫保鸡丁',
            image: 'https://img1.baidu.com/it/u=406735599,2157689115&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625',
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column' ,borderRadius:'10px'}}>
            <h3 style={{ textAlign: 'left',marginTop:'10px', marginLeft:'20px', marginBottom: '10px' }}>推荐菜</h3>
            <div style={{ display: 'flex' }}>
                {dishes.slice(0, 6).map((dish, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'10px' }}>
                        <img src={dish.image} alt={dish.name} style={{ width: 80, height: 80 }} />
                        <p>{dish.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendDish;