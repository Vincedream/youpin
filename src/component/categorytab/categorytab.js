import React from "react";
import styled from "styled-components";
import { Tabs } from "antd-mobile";
import "./categorytab.css";
import CategoryCard from "../../component/categorycard/categorycard";

export default class CategoryTab extends React.Component {
  render() {
    const productBoxData = [
      {
        productType: "手机",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/shoujipage.png",
        descTitle: "享受科技乐趣",
        signleProduct: [
          {
            productTitle: "小米6",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji1.png",
            productId: "01001"
          },
          {
            productTitle: "小米Max 2",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji2.png",
            productId: "01002"
          },
          {
            productTitle: "小米MIX2",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji3.png",
            productId: "01003"
          },
          {
            productTitle: "小米5X",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji4.png",
            productId: "01004"
          },
          {
            productTitle: "小米Note3",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji5.png",
            productId: "01005"
          },
          {
            productTitle: "小米Note3\n吴亦凡版",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji9.png",
            productId: "01006"
          },
          {
            productTitle: "小米MIX2 Unibody全陶瓷",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji10.png",
            productId: "01007"
          },
          {
            productTitle: "小米MIX",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji11.png",
            productId: "01008"
          },
          {
            productTitle: "红米5A",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji12.png",
            productId: "01009"
          },
          {
            productTitle: "红米4X",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji13.png",
            productId: "01010"
          },
          {
            productTitle: "红米Note 4X",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji14.png",
            productId: "01011"
          },
          {
            productTitle: "红米Note 5A",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji15.png",
            productId: "01012"
          },
          {
            productTitle: "红米Note4X 浅蓝色",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateshouji16.png",
            productId: "01013"
          },
          
        ]
      },
      {
        productType: "居家",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/jujiapage.png",
        descTitle: "乐享品质格调",
        signleProduct: [
          {
            productTitle: "床垫",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejujia1.png",
            productId: "02001"
          },
          {
            productTitle: "被枕",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejujia2.png",
            productId: "02002"
          },
          {
            productTitle: "床品件套",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejujia3.png",
            productId: "02003"
          },
          {
            productTitle: "灯具",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejujia4.png",
            productId: "02004"
          },
          {
            productTitle: "家具",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejujia5.png",
            productId: "02005"
          },
          {
            productTitle: "花卉盆栽",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejujia6.png",
            productId: "02006"
          },
          {
            productTitle: "家饰",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejujia7.png",
            productId: "02007"
          },
          {
            productTitle: "布艺软装",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejujia8.png",
            productId: "02008"
          }
        ]
      },

      {
        productType: "服饰",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/fushipage.png",
        descTitle: "定义精致日常",
        signleProduct: [
          {
            productTitle: "服装",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catefushi1.png",
            productId: "03001"
          },
          {
            productTitle: "鞋袜",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catefushi2.png",
            productId: "03002"
          },
          {
            productTitle: "眼镜",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catefushi3.png",
            productId: "03003"
          },
          {
            productTitle: "配饰",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catefushi4.png",
            productId: "03004"
          },
          {
            productTitle: "内裤",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catefushi5.png",
            productId: "03005"
          }
        ]
      },
      {
        productType: "智能",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/zhinengpage.png",
        descTitle: "悦享品质格调",
        signleProduct: [
          {
            productTitle: '笔记本Pro 15.6"',
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catezhineng1.png",
            productId: "04001"
          },
          {
            productTitle: '笔记本Air 13.3"',
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catezhineng2.png",
            productId: "04002"
          },
          {
            productTitle: '笔记本Air 12.5"',
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catezhineng3.png",
            productId: "04003"
          },
          {
            productTitle: "智能家庭套餐",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catezhineng4.png",
            productId: "04004"
          },
          {
            productTitle: "安防",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catezhineng5.png",
            productId: "04005"
          },
          {
            productTitle: "网关/传感器",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catezhineng6.png",
            productId: "04006"
          },
          {
            productTitle: "路由器",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catezhineng7.png",
            productId: "04007"
          },
          {
            productTitle: "开关/插座",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catezhineng8.png",
            productId: "04008"
          },
          {
            productTitle: "相机",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catezhineng9.png",
            productId: "04009"
          }
        ]
      },
      {
        productType: "餐厨",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/canchupage.png",
        descTitle: "有品生活哲学",
        signleProduct: [
          {
            productTitle: "厨房电器",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catecanchu1.png",
            productId: "05001"
          },
          {
            productTitle: "锅具",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catecanchu2.png",
            productId: "05002"
          },
          {
            productTitle: "餐具",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catecanchu3.png",
            productId: "05003"
          },
          {
            productTitle: "杯壶",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catecanchu4.png",
            productId: "05004"
          },
          {
            productTitle: "功能厨具",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catecanchu5.png",
            productId: "05005"
          },
          {
            productTitle: "刀剪砧板",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catecanchu6.png",
            productId: "05006"
          },
          {
            productTitle: "保鲜收纳",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catecanchu7.png",
            productId: "05007"
          }
        ]
      },
      {
        productType: "影音",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/yingyinpage.png",
        descTitle: "焕然耳目一新",
        signleProduct: [
          {
            productTitle: "电视",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingyin1.png",
            productId: "06001"
          },
          {
            productTitle: "盒子",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingyin2.png",
            productId: "06002"
          },
          {
            productTitle: "投影",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingyin3.png",
            productId: "06003"
          },
          {
            productTitle: "音响",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingyin4.png",
            productId: "06004"
          }
        ]
      },
      {
        productType: "家电",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/jiadianpage.png",
        descTitle: "乐享生活便捷",
        signleProduct: [
          {
            productTitle: "空气净化器",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiadian1.png",
            productId: "07001"
          },
          {
            productTitle: "净水器",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiadian2.png",
            productId: "07002"
          },
          {
            productTitle: "洗衣机",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiadian3.png",
            productId: "07003"
          },
          {
            productTitle: "冰箱",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiadian4.png",
            productId: "07004"
          },
          {
            productTitle: "生活电器",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiadian5.png",
            productId: "07005"
          },
          {
            productTitle: "空调/风扇",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiadian6.png",
            productId: "07006"
          },
          {
            productTitle: "厨房电器",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiadian7.png",
            productId: "07007"
          }
        ]
      },
      {
        productType: "饮食",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/yinshipage.png",
        descTitle: "有品生活哲学",
        signleProduct: [
          {
            productTitle: "酒水",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/pingshi1.png",
            productId: "08001"
          },
          {
            productTitle: "休闲小食",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/pingshi2.png",
            productId: "08002"
          },
          {
            productTitle: "冲印/茗茶",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/pingshi3.png",
            productId: "08003"
          },
          {
            productTitle: "杂粮/食材",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/pingshi4.png",
            productId: "08004"
          },
          {
            productTitle: "生鲜",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/pingshi5.png",
            productId: "08005"
          }
        ]
      },
      {
        productType: "健康",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/jiankangpage.png",
        descTitle: "有品生活哲学",
        signleProduct: [
          {
            productTitle: "康体监护",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiankang1.png",
            productId: "09001"
          },
          {
            productTitle: "运动健身",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiankang2.png",
            productId: "09002"
          },
          {
            productTitle: "护理护具",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiankang3.png",
            productId: "09003"
          },
          {
            productTitle: "保健器械",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catejiankang4.png",
            productId: "09004"
          }
        ]
      },
      {
        productType: "洗护",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/xihupage.png",
        descTitle: "定义精致日常",
        signleProduct: [
          {
            productTitle: "口腔清洁",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexihu1.png",
            productId: "10001"
          },
          {
            productTitle: "面部护理",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexihu2.png",
            productId: "10002"
          },
          {
            productTitle: "毛巾浴巾",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexihu3.png",
            productId: "10003"
          },
          {
            productTitle: "美发护发",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexihu4.png",
            productId: "10004"
          },
          {
            productTitle: "身体呵护",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexihu5.png",
            productId: "10005"
          },
          {
            productTitle: "洗涤清理",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexihu6.png",
            productId: "10006"
          }
        ]
      },
      {
        productType: "日杂",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/rizhapage.png",
        descTitle: "有品生活哲学",
        signleProduct: [
          {
            productTitle: "日用",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/rizha1.png",
            productId: "11001"
          },
          {
            productTitle: "工具",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/rizha2.png",
            productId: "11002"
          },
          {
            productTitle: "清洁",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/rizha3.png",
            productId: "11003"
          },
          {
            productTitle: "工具",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/rizha4.png",
            productId: "11004"
          }
        ]
      },
      {
        productType: "箱包",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/xiangbaopage.png",
        descTitle: "乐在自由途中",
        signleProduct: [
          {
            productTitle: "背包",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexiangbao1.png",
            productId: "12001"
          },
          {
            productTitle: "旅行箱",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexiangbao2.png",
            productId: "12002"
          },
          {
            productTitle: "钱包/卡包",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexiangbao3.png",
            productId: "12003"
          },
          {
            productTitle: "功能箱包",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catexiangbao4.png",
            productId: "12004"
          }
        ]
      },
      {
        productType: "配件",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/peijianpage.png",
        descTitle: "精心呈现细节",
        signleProduct: [
          {
            productTitle: "电源/电池",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catepeijian1.png",
            productId: "13001"
          },
          {
            productTitle: "手机周边",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catepeijian2.png",
            productId: "13002"
          },
          {
            productTitle: "办公周边",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catepeijian3.png",
            productId: "13003"
          },
          {
            productTitle: "耳机",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catepeijia4.png",
            productId: "13004"
          },
          {
            productTitle: "插线板",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catepeijian5.png",
            productId: "13005"
          },
          {
            productTitle: "适配器/线材",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catepeijian6.png",
            productId: "13006"
          }
        ]
      },
      {
        productType: "婴童",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/yingtongpage.png",
        descTitle: "把玩精彩匠心",
        signleProduct: [
          {
            productTitle: "穿戴",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingtong1.png",
            productId: "15001"
          },
          {
            productTitle: "玩具",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingtong2.png",
            productId: "15002"
          },
          {
            productTitle: "洗护",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingtong3.png",
            productId: "15003"
          },
          {
            productTitle: "寝居",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingtong6.png",
            productId: "15004"
          },
          {
            productTitle: "服饰箱包",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingtong5.png",
            productId: "15005"
          },
          {
            productTitle: "出行",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/cateyingtong4.png",
            productId: "15006"
          }
        ]
      },
      {
        productType: "出行",
        topImgUrl: "http://osutuwgm1.bkt.clouddn.com/chuxingpage.png",
        descTitle: "看遍路途风景",
        signleProduct: [
          {
            productTitle: "骑行",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catechuxing1.png",
            productId: "15001"
          },
          {
            productTitle: "汽车用品",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catechuxing2.png",
            productId: "15002"
          },
          {
            productTitle: "户外",
            productImgUrl: "http://osutuwgm1.bkt.clouddn.com/catechuxing3.png",
            productId: "15003"
          }
        ]
      }
    ];
    //tab高度
    const barHeight = window.screen.availHeight - 93;
    //渲染自定义tab
    function renderTabBar(props) {
      return (
        <div
          style={{
            height: barHeight,
            overflow: "hidden",
            width: "65px",
            zIndex: 1
          }}
        >
          <Tabs.DefaultTabBar page={13} {...props} />
        </div>
      );
    }

    //tabcontainer的宽度
    const containerWidth = window.screen.availWidth - 65;

    const SingleCateBox = styled.div`
       height: ${barHeight + "px"};    
      width: ${containerWidth};
      background-color: #fff;
      float: right;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    `;

    
    const TabBarBox = styled.div`
    height: ${barHeight + "px"};
    overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    
    `;
    
    //设置tabs的数量
    const tabs = [];
    productBoxData.map(v => {
      tabs.push({ title: v.productType });
    });

    return (
      <TabBarBox>
        <Tabs
          tabs={tabs}
          renderTabBar={renderTabBar}
          tabDirection="vertical"
          tabBarPosition="left"
          tabBarActiveTextColor={"#a68c75"}
          tabBarUnderlineStyle={{ border: "1px #a68c75 solid" }}
        >
          {productBoxData.map(v => (
            <SingleCateBox key={v.productType}>
              <CategoryCard productBoxData={v} />
            </SingleCateBox>
          ))}
        </Tabs>
      </TabBarBox>
    );
  }
}
