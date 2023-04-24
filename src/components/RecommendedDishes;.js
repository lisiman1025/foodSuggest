import React from 'react';

const RecommendDish = () => {
    const dishes = [
        {
            name: '红烧肉',
            image: 'https://inews.gtimg.com/newsapp_bt/0/14792476783/1000',
        },
        {
            name: '宫保鸡丁',
            image: 'https://inews.gtimg.com/newsapp_bt/0/14792476783/1000',
        },
        {
            name: '麻婆豆腐',
            image: 'https://inews.gtimg.com/newsapp_bt/0/14792476783/1000',
        },
        {
            name: '水煮鱼',
            image: 'https://inews.gtimg.com/newsapp_bt/0/14792476783/1000',
        },
        {
            name: '糖醋排骨',
            image: 'https://inews.gtimg.com/newsapp_bt/0/14792476783/1000',
        },
        {
            name: '香辣鸭血',
            image: 'https://inews.gtimg.com/newsapp_bt/0/14792476783/1000',
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column' ,borderRadius:'10px'}}>
            <h3 style={{ textAlign: 'left',marginTop:'10px', marginLeft:'20px', marginBottom: '10px' }}>推荐菜</h3>
            <div style={{ display: 'flex' }}>
                {dishes.slice(0, 6).map((dish, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={dish.image} alt={dish.name} style={{ width: 100, height: 100 }} />
                        <p>{dish.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendDish;