import React from 'react';
import { Rate } from 'antd';

const CommentSection = () => {
    const comments = [
        {
            id: 1,
            user: '张三',
            level: 'Lv3',
            rating: 3.5,
            text: '味道还可以，但是服务态度一般。',
            images: [
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F96edbff8-fb80-4aec-bcb1-336ed226a509%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684738563&t=966d8c6e66eaecc7daf1b19fa3a36f4a',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fcfff1383-8ec3-4147-86f2-196ecf80a419%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684738563&t=bd126b3d92ea7ce3a2d8a837f3ab52ea',
            ],
            views: 341,
            comments: 7,
        },
        {
            id: 2,
            user: '李四',
            level: 'Lv2',
            rating: 2,
            text: '非常失望，食材质量很差。',
            images: [
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F96edbff8-fb80-4aec-bcb1-336ed226a509%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684738563&t=966d8c6e66eaecc7daf1b19fa3a36f4a',
            ],
            views: 123,
            comments: 2,
        },
        {
            id: 3,
            user: '王五',
            level: 'Lv6',
            rating: 5,
            text: '非常棒的用餐体验，菜品新鲜美味。',
            images: [
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F96edbff8-fb80-4aec-bcb1-336ed226a509%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684738563&t=966d8c6e66eaecc7daf1b19fa3a36f4a',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fcfff1383-8ec3-4147-86f2-196ecf80a419%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684738563&t=bd126b3d92ea7ce3a2d8a837f3ab52ea',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F96edbff8-fb80-4aec-bcb1-336ed226a509%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684738563&t=966d8c6e66eaecc7daf1b19fa3a36f4a',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fcfff1383-8ec3-4147-86f2-196ecf80a419%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684738563&t=bd126b3d92ea7ce3a2d8a837f3ab52ea',
            ],
            views: 987,
            comments: 21,
        },
        // Two more comment objects with similar properties
        // ...
    ];
    const ratingScore = 4.7;
    const ratingScale = 5;


    return (
        <div>
        <h2 style={{ textAlign: 'center',marginTop:'10px', marginBottom: '15px' }}>用户点评</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
            <Rate disabled defaultValue={ratingScore} allowHalf />
            <span style={{ marginLeft: '10px' }}>{ratingScore}/{ratingScale}</span>
        </div>

        <div className="comment-list" style={{ marginTop: '15px' }}>
            {comments.slice(0, 3).map((comment) => (
                <div className="comment-box" key={comment.id} style={{ display: 'flex', justifyContent: 'space-between',padding:'5px', marginBottom: '15px',borderTop: '1px solid #f1f1f1', }}>
                    <div className="comment-icon" style={{ width: '55px' }}>
                        <img
                            src="https://inews.gtimg.com/newsapp_bt/0/14796075433/1000"
                            alt=""
                            style={{ width: '48px', height: '48px', borderRadius: '50%' }}
                        />
                    </div>
                    <div className="comment-info" style={{ width: '80%', flexGrow: 1 }}>
                        <div className="comment-user" style={{ fontSize: '14px' }}>
                            {comment.user} <span style={{ fontSize: '10px', padding: '0 10px', borderRadius: '8px', backgroundColor: '#f7b253', color: 'white' }}>{comment.level}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            打分
                            <Rate disabled defaultValue={comment.rating} />
                        </div>
                        <div style={{ padding: '5px 0', fontSize:'14px' }}>
                            {comment.text}
                        </div>
                        <div className="comment-images" style={{ display: 'flex', width: '100%', overflowX: 'scroll', padding: '10px 0' }}>
                            {comment.images.map((image, index) => (
                                <img key={index} src={image} alt="" style={{ height: '94px', width: '92px', borderRadius: '5px', marginRight: '5px' }} />
                            ))}
                        </div>
                        <div style={{ fontSize: '12px' }}>
                            浏览{comment.views} &nbsp;&nbsp;&nbsp;&nbsp;评论{comment.comments}
                        </div>
                    </div>
                </div>
            ))}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '15px 0',
                    borderTop: '1px solid #f1f1f1',
                    marginTop: '10px',
                }}
            >
                <div>查看全部119条评价</div>
                <div>
                    <i className="el-icon-arrow-right" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default CommentSection;
