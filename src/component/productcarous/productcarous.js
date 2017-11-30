import React from "react";
import { Carousel } from "antd-mobile";

export default class ProductCarous extends React.Component {
  render() {
    //根据设备宽度调整img的高度
    const imgHeight = window.screen.availWidth;
    const carousImg = {
      height: imgHeight,
      width: "100%"
    };
    const imgUrl = this.props.imgUrl;
    return (
      <div>
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          dots={true}
        >
          {imgUrl.map(v=> (
              <img
                key={v}
                style={carousImg}
                src={v}
                alt=""
              />
          ))}
        </Carousel>
      </div>
    );
  }
}
