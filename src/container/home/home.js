import React from "react";

import TopBar from "../../component/topbar/topbar";
import Tab from "../../component/tab/tab";
export default class Home extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <TopBar />
        <Tab />
      </div>
    );
  }
}
