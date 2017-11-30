import React from "react";
import ProductTopBar from "../../component/producttopbar/producttopbar";
import ProductCarous from "../../component/productcarous/productcarous";
import ProductBar from "../../component/productbar/productbar";
import ProductTab from "../../component/producttab/producttab";
import ProductBottomBar from "../../component/productbottombar/productbottombar";
import PopProductBox from "../../component/popbox/popbox";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
      poped: false
    };
  }

  changePoped(pop) {
    this.setState({
      poped: pop
    });
  }

  //监听滚动事件，改变ProductTopBar的样式
  handleScroll(e) {
    let scrollTop = this.refs.bodyBox.scrollTop; //滚动条滚动高度
    this.setState({
      scroll: scrollTop
    });
  }

  render() {
    const productData = {
      imgUrl: [
        "http://osutuwgm1.bkt.clouddn.com/jinhuaqi1.jpg",
        "http://osutuwgm1.bkt.clouddn.com/jinhuaqi2.jpg",
        "http://osutuwgm1.bkt.clouddn.com/jinhuaqi3.jpg",
        "http://osutuwgm1.bkt.clouddn.com/jinhuaqi4.jpg",
        "http://osutuwgm1.bkt.clouddn.com/jinhuaqi5.jpg"
      ],
      productTitle: "小米米家空气净化器2S",
      productDesc: "OLED显示屏，激光颗粒传感器。310m³/h颗粒物CADR，360°进风3层净化",
      priceStart: true,
      price: 2999,
      defaultChooseType: "小米米家空气净化器2S 白色",
      sendTo: "北京市海淀区",
      discount: "500元立减券",
      service: ["优品甄选精品", "小米发货并提供售后服务", "支持7天无理由退货"],
      storeImgUrl: "http://osutuwgm1.bkt.clouddn.com/store1.png",
      storeTitle: "小米自营产品",
      storeDesc: "为发烧而生",
      productTab: {
        tabTitle: [{ title: "功能详情" }, { title: "常见问题" }, { title: "安装服务" }],
        tabImgUrl: [
          "http://osutuwgm1.bkt.clouddn.com/jinhuaqilongpic1.JPG",
          "http://osutuwgm1.bkt.clouddn.com/jinhuaqilongpic2.JPG",
          "http://osutuwgm1.bkt.clouddn.com/jinhuaqilongpic3.JPG"
        ]
      },
      ProductConfigData:[
        {
          type: "color",
          typeText: "颜色",
          config: [
            { id: "A", title: "拂晓灰（浅灰）" },
            { id: "B", title: "暮光灰（深灰）" },
            { id: "C", title: "远山绿" }
          ]
        },
        {
          type: "siteNum",
          typeText: "座位数",
          config: [
            { id: "A", title: "三人座" },
            { id: "B", title: "双人坐" },
            { id: "C", title: "单人坐" }
          ]
        }
      ],
      ProductDefaultConfig:{
        title: "8H独立袋装弹簧布艺沙发",
        price: 1288,
        imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafaqh3.png"
      },
      CombineCinfig:[
        {
          combination: "拂晓灰（浅灰）三人座",
          price: 2299,
          imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafaqh3.png"
        },
        {
          combination: "拂晓灰（浅灰）双人坐",
          price: 1899,
          imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafaqh2.png"
        },
        {
          combination: "拂晓灰（浅灰）单人坐",
          price: 1199,
          imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafaqh1.png"
        },
        {
          combination: "暮光灰（深灰）三人座",
          price: 2299,
          imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafash3.png"
        },
        {
          combination: "暮光灰（深灰）双人坐",
          price: 1899,
          imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafash2.png"
        },
        {
          combination: "暮光灰（深灰）单人坐",
          price: 1199,
          imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafash1.png"
        },
        {
          combination: "远山绿三人座",
          price: 2299,
          imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafayl3.png"
        },
        {
          combination: "远山绿双人坐",
          price: 1899,
          imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafayl2.png"
        },
        {
          combination: "远山绿单人坐",
          price: 1199,
          imgUrl: "http://osutuwgm1.bkt.clouddn.com/shafayl1.png"
        }
      ]
    };

    const boxHeight = window.screen.availHeight - 50; //设置productContainer容器高度
    const boxWidth = window.screen.availWidth;
    const firstHidden = this.state.scroll >= boxWidth ? "none" : "block"; //设置默认样式display，当小于轮播图时显示，否则隐藏
    const opacity = this.state.scroll / (boxWidth - 40); //设置跳出栏的透明度，当超过轮播图则透明度为1

    return (
      <div>
        <ProductTopBar
          barTitle={productData.productTitle}
          firstHidden={firstHidden}
          opacity={opacity}
        />
        <div
          className="productStyle"
          style={{
            height: boxHeight,
            overflow: "scroll"
          }}
          onScroll={this.handleScroll.bind(this)}
          ref="bodyBox"
        >
          <ProductCarous imgUrl={productData.imgUrl} />
          <ProductBar
            ProductDefaultConfig={productData.ProductDefaultConfig}
            ProductConfigData={productData.ProductConfigData}
            CombineCinfig={productData.CombineCinfig}
            changePoped={this.changePoped.bind(this)}
            config={productData}
          />
          <ProductTab productTabData={productData.productTab} />
        </div>
        <ProductBottomBar />
      </div>
    );
  }
}
