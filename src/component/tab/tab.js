import React from "react";
import { Tabs, Badge } from "antd-mobile";

import Carous from "../../component/carousel/carousel";
import MidBar from "../../component/midbar/midbar";
import CarContainer from "../../component/carcontainer/carcontainer";
import LongBoxX from "../../component/recomBox/longBoxX";
import LongBoxY from "../../component/recomBox/longBoxY";
import GeneralBox from "../../component/recomBox/generalBox";
import BrandRoll from "../../component/brandroll/brandroll";
import AdImg from "../../component/adimg/adimg";
import ProductBox from "../../component/productbox/productbox";
import ProductContainer from "../../component/producrcontainer/producrcontainer";
export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ScreenHeight = window.screen.availHeight - 133;
    const tabs = [
      { title: <Badge>推荐</Badge> },
      { title: <Badge>手机</Badge> },
      { title: <Badge>居家</Badge> },
      { title: <Badge>服饰</Badge> },
      { title: <Badge>智能</Badge> },
      { title: <Badge>餐厨</Badge> }
    ];

    const tabStyle = {
      marginTop:"1px",
      height: ScreenHeight,
      width:"100%",
      overflowY: "scroll"
      //overFlow:"hidden",
    };
    

    // 数据层

    const mobileData=[
      {
        category:"小米系列",
        data:[
          {title:"小米6",pricrStart:true,price:2299,desc:"【6G+64GB版 16日早10点开抢】",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homeproduct1.png"},
          {title:"小米MIX2",pricrStart:true,price:3299,desc:"商务新旗舰 全面屏2.0",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homeproduct2.png"},
          {title:"小米Max 2",pricrStart:true,price:1399,desc:"黑色版上市 大屏大电量",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homeproduct3.png"},
          {title:"小米MIX2 Unibody全陶瓷",pricrStart:false,price:4699,desc:"皓月白限量预售中",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homeproduct4.png"}    
        ]
      },
      {
        category:"红米系列",
        data:[
          {title:"红米5A",pricrStart:false,price:599,desc:"8天超长待机，137g轻巧机身",imgUrl:"http://osutuwgm1.bkt.clouddn.com/hongmi1.png"},
          {title:"红米4A",pricrStart:true,price:699,desc:"4100mAh超长续航，5英寸大屏幕",imgUrl:"http://osutuwgm1.bkt.clouddn.com/hongmi2.png"},
          {title:"红米Note 4X",pricrStart:false,price:999,desc:"5.5英寸全高清屏，4100mAh超长续航",imgUrl:"http://osutuwgm1.bkt.clouddn.com/hongmi3.png"},
          {title:"红米Note 5A",pricrStart:true,price:699,desc:"5.5英寸大屏 高通骁龙处理器",imgUrl:"http://osutuwgm1.bkt.clouddn.com/hongmi4.png"},
          {title:"红米Note 4X浅蓝色",pricrStart:true,price:999,desc:"5.5英寸金属机身，4100mAh超长续航",imgUrl:"http://osutuwgm1.bkt.clouddn.com/hongmi5.png"}    
        ]
      }
     ];


    const livehomeData=[
      {
        category:"床垫",
        data:[
          {title:"乳胶弹簧静音床垫",pricrStart:true,price:1599,desc:"弹簧支撑，全面透气",imgUrl:"http://osutuwgm1.bkt.clouddn.com/chuangdian1.png"},
          {title:"双面双温感乳胶弹簧床垫",pricrStart:true,price:1999,desc:"双面睡感，双面温感",imgUrl:"http://osutuwgm1.bkt.clouddn.com/chuangdian2.png"},
          {title:"8H天然乳胶床垫M1",pricrStart:true,price:599,desc:"天然乳胶，0胶水环保材质",imgUrl:"http://osutuwgm1.bkt.clouddn.com/chuangdian3.png"},
          {title:"8H天然乳胶床垫M2",pricrStart:true,price:1299,desc:"17厘米厚度，天然乳胶",imgUrl:"http://osutuwgm1.bkt.clouddn.com/chuangdian4.png"},
        ]
      },
      {
        category:"枕被",
        data:[
          {title:"苦芥分区护颈枕",pricrStart:false,price:79,desc:"高低可调，益气安神",imgUrl:"http://osutuwgm1.bkt.clouddn.com/beizhen1.png"},
          {title:"长绒棉缎纹枕套 一对装",pricrStart:false,price:39,desc:"通体全棉，整体裁剪",imgUrl:"http://osutuwgm1.bkt.clouddn.com/beizhen2.png"},
          {title:"3D七孔保暖被",pricrStart:true,price:239,desc:"1:2:1黄金比填充，更轻更暖",imgUrl:"http://osutuwgm1.bkt.clouddn.com/beizhen3.png"},
          {title:"臻绒经典白鹅绒被",pricrStart:true,price:999,desc:"品质好绒，古法工艺，95道工序",imgUrl:"http://osutuwgm1.bkt.clouddn.com/beizhen4.png"},
        ]
      }
    ];
    const costumeData=[
      {
        category:"服装",
        data:[
          {title:"节庆款男士内裤 3条装",pricrStart:false,price:119,desc:"喜气祥和，四季平安",imgUrl:"http://osutuwgm1.bkt.clouddn.com/fuzhuang3.png"},
          {title:"节庆款女士内裤 3条装",pricrStart:false,price:89,desc:"喜气祥和，四季平安",imgUrl:"http://osutuwgm1.bkt.clouddn.com/fuzhuang4.png"},
          {title:"男女温暖长袖打底衫",pricrStart:false,price:79,desc:"恒温循环，舒适透气",imgUrl:"http://osutuwgm1.bkt.clouddn.com/fuzhuang1.png"},
          {title:"男士V领羊毛开衫",pricrStart:false,price:219,desc:"经典百搭，保暖舒适",imgUrl:"http://osutuwgm1.bkt.clouddn.com/fuzhuang2.png"},
          {title:"飞行员夹克羽绒服",pricrStart:false,price:499,desc:"天然鸭绒纤维，防风保暖",imgUrl:"http://osutuwgm1.bkt.clouddn.com/fuzhuang5.png"},
          {title:"小米轻薄羽绒服",pricrStart:false,price:299,desc:"轻暖防钻绒，便携易打包",imgUrl:"http://osutuwgm1.bkt.clouddn.com/fuzhuang6.png"},
        ]
      }
          ];
    const techData=[
      {
        category:"笔记本Pro 15.6\"",
        data:[
          {title:"小米笔记本Pro15.6 i5\" 8G",pricrStart:false,price:5599,desc:"最具性价比的小米笔记本",imgUrl:"http://osutuwgm1.bkt.clouddn.com/zhineng2.png"},
          {title:"小米笔记本Pro15.6 i7\" 8G",pricrStart:false,price:6399,desc:"八代i7，快人一步",imgUrl:"http://osutuwgm1.bkt.clouddn.com/zhineng2.png"},
          {title:"小米笔记本Pro15.6 i5\" 16G",pricrStart:false,price:6999,desc:"小米笔记本机皇版",imgUrl:"http://osutuwgm1.bkt.clouddn.com/zhineng2.png"},
        ]
      },
      {
        category:"笔记本Air 13.3\"",
        data:[
          {title:"小米笔记本Air13.3\" 4G",pricrStart:false,price:4799,desc:"指纹识别，性价比首选",imgUrl:"http://osutuwgm1.bkt.clouddn.com/zhineng1.png"},
          {title:"小米笔记本Air13.3\" 8G",pricrStart:false,price:4999,desc:"8G运存，办公利器！",imgUrl:"http://osutuwgm1.bkt.clouddn.com/zhineng1.png"},
          {title:"小米笔记本Air13.3\" i5 独立显卡",pricrStart:false,price:5199,desc:"全能性价比之王！",imgUrl:"http://osutuwgm1.bkt.clouddn.com/zhineng1.png"},
          {title:"小米笔记本Air13.3\" i7 独立显卡",pricrStart:false,price:5999,desc:"13.3英寸机皇版！",imgUrl:"http://osutuwgm1.bkt.clouddn.com/zhineng1.png"},
        ]
      }
    ];
    const kitchenData=[
      {
        category:"厨房电器",
        data:[
          {title:"云米智能互联烟灶套装",pricrStart:false,price:2999,desc:"【预售，11.23陆续发货】",imgUrl:"http://osutuwgm1.bkt.clouddn.com/chuqian1.png"},
          {title:"心想胶囊咖啡机",pricrStart:false,price:499,desc:"快速萃取，9档浓度预设",imgUrl:"http://osutuwgm1.bkt.clouddn.com/chuqian12.png"},
          {title:"米家电水壶",pricrStart:false,price:99,desc:"快速沸腾，304不锈钢内胆",imgUrl:"http://osutuwgm1.bkt.clouddn.com/chuqian3.png"},
          {title:"米家恒温电水壶",pricrStart:false,price:199,desc:"快速沸腾，水温智能控制",imgUrl:"http://osutuwgm1.bkt.clouddn.com/chuqian4.png"},
        ]
      },
      {
        category:"餐具",
        data:[
          {title:"简雅纯色不锈钢筷子",pricrStart:false,price:69,desc:"进口不锈钢，手感舒适",imgUrl:"http://osutuwgm1.bkt.clouddn.com/canju1.png"},
          {title:"简欧不锈钢餐具四件套",pricrStart:true,price:79,desc:"优质不锈钢，一体成型",imgUrl:"http://osutuwgm1.bkt.clouddn.com/canju2..png"},
          {title:"御蝉骨瓷纯白套装",pricrStart:true,price:59,desc:"品质不凡，不止于“美”",imgUrl:"http://osutuwgm1.bkt.clouddn.com/canju3..png"},
          {title:"青白釉芭蕉纹餐具",pricrStart:true,price:88,desc:"釉色青翠，手感自然",imgUrl:"http://osutuwgm1.bkt.clouddn.com/canju4..png"},
        ]
      },
      {
        category:"锅具",
        data:[
          {title:"欧式经典珐琅锅",pricrStart:false,price:229,desc:"丹麦浇铸工艺，自循环水",imgUrl:"http://osutuwgm1.bkt.clouddn.com/guoju1.png"},
          {title:"无涂层健康不锈钢炒锅",pricrStart:true,price:229,desc:"三层复合锅体，高效匀热",imgUrl:"http://osutuwgm1.bkt.clouddn.com/guoju2.png"},
          {title:"无涂层健康不锈钢三件套",pricrStart:false,price:666,desc:"三层复合锅体，红点奖设计",imgUrl:"http://osutuwgm1.bkt.clouddn.com/guoju3.png"},
          {title:"无涂层健康不锈钢奶锅",pricrStart:false,price:179,desc:"三层复合锅体，红点奖设计",imgUrl:"http://osutuwgm1.bkt.clouddn.com/guoju4.png"},
        ]
      }
    ];

    return (
      <div>
        <Tabs
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }}
          tabBarActiveTextColor={"#a68c75"}
          tabBarUnderlineStyle={{ border: "1px #a68c75 solid" }}
        >
          <div className={"scrollBar"} style={tabStyle}>
            <Carous />
            <MidBar />
            <CarContainer title={"有品推荐"}>
              <LongBoxX
                config={{
                  bgColor: "#eaf5f8",
                  title: "小米手机爆款集聚",
                  desc: "小件包邮 更有百元折扣",
                  ishot: false,
                  type: "look",
                  price: 99,
                  imgUrl: "http://osutuwgm1.bkt.clouddn.com/longBoxpic1.png"
                }}
              />
              <div
                style={{
                  width: "100%",
                  marginTop: "3px",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <GeneralBox
                  config={{
                    bgColor: "#eeecf8",
                    title: "精致餐厨 品质厨房",
                    desc: "优惠礼券送不停",
                    ishot: false,
                    type: "desc",
                    price: 0,
                    imgUrl: "http://osutuwgm1.bkt.clouddn.com/genboxpix1.png"
                  }}
                />
                <GeneralBox
                  config={{
                    bgColor: "#f9f3ee",
                    title: "温暖气质家",
                    desc: "寒冬优质床品集锦",
                    ishot: true,
                    type: "desc",
                    price: 99,
                    imgUrl: "http://osutuwgm1.bkt.clouddn.com/genboxpix2.png"
                  }}
                />
              </div>
            </CarContainer>
            <CarContainer title={"新品"}>
              <LongBoxX
                config={{
                  bgColor: "#faefec",
                  title: "乐范按摩助眠颈枕",
                  desc: "引导入眠，按摩放松，收纳自如",
                  ishot: false,
                  type: "price",
                  price: 99,
                  imgUrl: "http://osutuwgm1.bkt.clouddn.com/seclongx1.png"
                }}
              />
              <div>
                <div style={{ marginTop: "3px" }}>
                  <LongBoxY
                    config={{
                      bgColor: "#ebf3f9",
                      title: "简约石英腕表",
                      desc: "[增皮质表带] 进口机芯，简约设计，时尚百搭",
                      ishot: false,
                      type: "all",
                      price: 399,
                      imgUrl: "http://osutuwgm1.bkt.clouddn.com/shiba.png"
                    }}
                  />
                </div>
                <div style={{ height: "290px" }}>
                  <GeneralBox
                    config={{
                      bgColor: "#f1eee9",
                      title: "羊毛圈绅士商务袜",
                      desc: "",
                      ishot: false,
                      type: "price",
                      price: 49,
                      imgUrl: "http://osutuwgm1.bkt.clouddn.com/wazipic.png"
                    }}
                  />
                  <GeneralBox
                    config={{
                      bgColor: "#ebf4f3",
                      title: "石墨烯发热腰带",
                      desc: "",
                      ishot: false,
                      type: "price",
                      price: 129,
                      imgUrl: "http://osutuwgm1.bkt.clouddn.com/shimoxi.png"
                    }}
                    last={true}
                  />
                </div>
              </div>
            </CarContainer>
            <CarContainer title={"品牌"} >
            <BrandRoll config={[{url:"http://osutuwgm1.bkt.clouddn.com/brand6.png"},{url:"http://osutuwgm1.bkt.clouddn.com/brand2.png"},{url:"http://osutuwgm1.bkt.clouddn.com/brand3.png"},{url:"http://osutuwgm1.bkt.clouddn.com/brand4.png"},{url:"http://osutuwgm1.bkt.clouddn.com/brand5.png"},{url:"http://osutuwgm1.bkt.clouddn.com/brand1.png"}]} />
            </CarContainer>
            <CarContainer title={"手机"} >
            <AdImg type={"homeAd"} imgUrl={"http://osutuwgm1.bkt.clouddn.com/homeadimg1.png"} />
              <div style={{width:"100",display:"flex",flexWrap:"wrap",justifyContent:"space-between",backgroundColor:"#f5f5f9"}} >
              <ProductBox config={{title:"小米6",pricrStart:true,price:2299,desc:"【6G+64GB版 16日早10点开抢】",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homeproduct1.png"}} />
              <ProductBox config={{title:"小米MIX2",pricrStart:true,price:3299,desc:"商务新旗舰 全面屏2.0",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homeproduct2.png"}} />
              <ProductBox config={{title:"小米Max 2",pricrStart:true,price:1399,desc:"黑色版上市 大屏大电量",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homeproduct3.png"}} />
              <ProductBox config={{title:"小米MIX2 Unibody全陶瓷",pricrStart:false,price:4699,desc:"皓月白限量预售中",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homeproduct4.png"}} />
              </div>
            </CarContainer>
            <CarContainer title={"智能"} >
            <AdImg type={"homeAd"} imgUrl={"http://osutuwgm1.bkt.clouddn.com/homeadimg2.png"} />
              <div style={{width:"100",display:"flex",flexWrap:"wrap",justifyContent:"space-between",backgroundColor:"#f5f5f9"}} >
              <ProductBox config={{title:"小米笔记本Air13.33 4G",pricrStart:false,price:4799,desc:"指纹识别 性价比首选",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homesecpro4.png"}} />
              <ProductBox config={{title:"大方智能摄像机",pricrStart:false,price:149,desc:"高清双云台 看家更放心",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homesecpro3.png"}} />
              <ProductBox config={{title:"Aqara职能墙壁插座",pricrStart:false,price:149,desc:"定时开关，电量统计",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homesecpro5.png"}} />
              <ProductBox config={{title:"手环2腕带套装",pricrStart:false,price:163.9,desc:"炫彩动感每一天！",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homesecpro4.png"}} />
              <ProductBox config={{title:"小米路由器HD",pricrStart:true,price:1299,desc:"内置硬盘，4x4全向性天线",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homesecpro2.png"}} />
              <ProductBox config={{title:"米家小白智能摄像机",pricrStart:false,price:399,desc:"1080P全景视频，无红曝光",imgUrl:"http://osutuwgm1.bkt.clouddn.com/homesecpro6.png"}} />
              </div>
            </CarContainer>
          </div>

          <div className={"scrollBar"} style={tabStyle}>
            <AdImg imgUrl={" http://osutuwgm1.bkt.clouddn.com/shoujiimg.png"} />
            {mobileData.map(v=>{
              return(
                <ProductContainer key={v.category} title={v.category} >
                {v.data.map(v=> <ProductBox key={v.title} config={v} /> )}
                </ProductContainer>
              )
            })}
          </div>



          <div className={"scrollBar"} style={tabStyle}>
          <AdImg  imgUrl={"http://osutuwgm1.bkt.clouddn.com/jujiapic.png"} />
          {livehomeData.map(v=>{
              return(
                <ProductContainer key={v.category} title={v.category} >
                {v.data.map(v=> <ProductBox key={v.title} config={v} /> )}
                </ProductContainer>
              )
            })}
          </div>

          
          <div className={"scrollBar"} style={tabStyle}>
          <AdImg imgUrl={"http://osutuwgm1.bkt.clouddn.com/fushipic.png"} />
          {costumeData.map(v=>{
              return(
                <ProductContainer key={v.category} title={v.category} >
                {v.data.map(v=> <ProductBox key={v.title} config={v} /> )}
                </ProductContainer>
              )
            })}
          </div>

          <div className={"scrollBar"} style={tabStyle}>
          <AdImg imgUrl={"http://osutuwgm1.bkt.clouddn.com/zhinengpic.png"} />
          {techData.map(v=>{
              return(
                <ProductContainer key={v.category} title={v.category} >
                {v.data.map(v=> <ProductBox key={v.title} config={v} /> )}
                </ProductContainer>
              )
            })}
          </div>
          <div className={"scrollBar"} style={tabStyle}>
          <AdImg imgUrl={"http://osutuwgm1.bkt.clouddn.com/canchupic.png"} />
          {kitchenData.map(v=>{
              return(
                <ProductContainer key={v.category} title={v.category} >
                {v.data.map(v=> <ProductBox key={v.title} config={v} /> )}
                </ProductContainer>
              )
            })}
          </div>
        </Tabs>
      </div>
    );
  }
}
