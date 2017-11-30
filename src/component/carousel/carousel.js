import React from "react";
import { Carousel } from "antd-mobile";

export default class Carous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["carous1", "carous2", "carous3", "carous4", "carous5"]
    };
  }

  render() {
    //根据设备宽度调整img的高度
    const imgWidth = window.screen.availWidth / 375 * 155;
    const carousImg = {
      height: imgWidth,
      width: "100%"
    };
    return (
      <div>
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
        >
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii}>
              <img
                style={carousImg}
                src={`http://osutuwgm1.bkt.clouddn.com/${ii}.PNG`}
                alt=""
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}
