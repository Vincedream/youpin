import React from "react";
import { Tabs } from "antd-mobile";

export default class ProductTab extends React.Component {
  render() {

    const productTabDate=this.props.productTabData;
    const tabHeight = window.screen.availHeight - 137.5;
    // console.log(tabHeight);
    const tabStyle = {
      height: tabHeight,
      // height:"300px",
      overflow: "scroll"
    };
    return (
      <div>
        <Tabs
          tabs={productTabDate.tabTitle}
          initialPage={0}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }}
        >

          {productTabDate.tabImgUrl.map(v=><div key={v} style={tabStyle}>
            <img
            
              style={{ width: "100%" }}
              src={v}
              alt=""
            />
          </div>)}

        </Tabs>
      </div>
    );
  }
}
