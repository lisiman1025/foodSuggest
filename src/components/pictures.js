import React, { useState, useEffect } from 'react';
import { Carousel, Rate, Modal, Button } from 'antd';

const Pictures = () => {


    let videoTest;
    videoTest="/test.mp4"


    const images = [

    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F96edbff8-fb80-4aec-bcb1-336ed226a509%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684738563&t=966d8c6e66eaecc7daf1b19fa3a36f4a',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fcfff1383-8ec3-4147-86f2-196ecf80a419%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684738563&t=bd126b3d92ea7ce3a2d8a837f3ab52ea',
    'https://youimg1.c-ctrip.com/target/0100k120008n9vbif6EFE_D_521_391_Q90.jpg?proc=autoorient',
    'https://picsum.photos/id/1002/400/300',
    'https://picsum.photos/id/1015/400/300',
    'https://picsum.photos/id/1016/400/300',
    'https://picsum.photos/id/1033/400/300',
    'https://picsum.photos/id/104/400/300',
  ];

    const items = [
        { type: 'video', src: videoTest },
        ...images.map((image) => ({ type: 'image', src: image })),
    ];

    const carouselSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };



    return (
        <div style={{ position: 'relative'}}>
            <Carousel {...carouselSettings} style={{width:'100%',height:'300px'}}>
                {items.map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {item.type === 'image' && (
                            <img src={item.src} alt={`Slide ${index + 1}`} style={{ margin:'0 auto', width: '90%', height: '290px', objectFit: 'cover' }} />
                        )}
                        {item.type === 'video' && (
                            <video
                                src={item.src}
                                controls
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '90%', height: '290px', objectFit: 'cover' }}
                            ></video>
                        )}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};


export default Pictures;

