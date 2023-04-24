import React, { useState, useRef } from "react";
import Waterfall from "waterfalljs-layout/react";

const defimages = [
    "https://picsum.photos/640/200/?random",
    "https://picsum.photos/360/640/?random",
    "https://picsum.photos/480/720/?random",
    "https://picsum.photos/480/640/?random",
    "https://picsum.photos/360/?random",
    "https://picsum.photos/360/520/?random",
    "https://picsum.photos/520/360/?random",
    "https://picsum.photos/520/360/?random",
    "https://picsum.photos/520/360/?random",
    "https://picsum.photos/720/640/?random"
];

const customStyleGrid = `#react-waterfall-grid-comps li>div {
  border-radius: 8px;
  font-size: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
  padding: 6px;
  background: rgb(255, 255, 255);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s
}
#react-waterfall-grid-comps li>div:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.3s
}
#react-waterfall-grid-comps li>div>img {
  width: 100%
}
#react-waterfall-grid-comps li {
  list-style-type: none;
}`;


export default function WaterfallGridDemo() {
    const [images, setImages] = useState(defimages);
    const ulMaxHRef = useRef(0);

    const handleSearchImage = async () => {
        function random(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }
        const arr = [];
        for (let i = 0; i < 9; i++) {
            const imgSrc = `${defimages[i]}=${random(1, 10000)}`;
            arr.push(imgSrc);
        }
        setImages((prev) => [...prev, ...arr]);
    };
    return (
        <div
            style={{
                height: "600px",
                width: "100%",
                margin: "30px aoto",
                overflowY: "scroll"
            }}
            onScroll={(e) => {
                const scrollH = e.target.scrollTop;
                // 700 是一个自己把握的值即满足 scrollTop + height + 调节值 > ulMaxHRef.current
                // 因为不一定要滚动到在最底端才执行加载逻辑
                // 注意使用者应自己处理加载节流逻辑
                if (scrollH + 700 > ulMaxHRef.current) {
                    console.log("滚动到底部执行加载逻辑，代替点击 loadmore 按钮");
                }
            }}
        >
            <div>更多推荐</div>
            <Waterfall
                mode="grid"
                el="#react-waterfall-grid-comps"
                columnWidth={200}
                columnCount={2}
                columnGap={24}
                rowGap={24}
                customStyle={customStyleGrid}
                onChangeUlMaxH={(h) => (ulMaxHRef.current = h)}
            >
                {images.map((item, index) => {
                    return (
                        <li key={index} onClick={() => alert("图片地址为:" + item)}>
                            <div>
                                {index + 1}
                                <img src={item} alt="" />
                            </div>
                        </li>
                    );
                })}
            </Waterfall>
            <div style={{ textAlign: "center" }}>
                <button
                    onClick={() => handleSearchImage()}
                    style={{ margin: "30px auto" }}
                >
                    LOAD MORE
                </button>
            </div>
        </div>
    );
}
