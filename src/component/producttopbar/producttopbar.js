import React from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
class ProductTopBar extends React.Component{
    change() {
        this.props.history.goBack();
      }
    render(){

        const firstHidden = this.props.firstHidden;
        const productTopBar = {
          display: firstHidden,
          position: "fixed",
          boxSizing: "border-box",
          paddingTop: "6px",
          zIndex: "999",
          top: "0px",
          height: "42px",
          width: "100%"
        };
    
        const backBotton = {
          float: "left",
          height: "30px",
          width: "30px",
          boxSizing: "border-box",
          paddingLeft: "5px",
          borderRadius: "15px",
          backgroundColor: "rgba(80, 80, 80, 0.4)",
          lineHeight: "32px",
          marginLeft: "10px"
        };
        const shareBotton = {
          float: "right",
          height: "30px",
          width: "30px",
          boxSizing: "border-box",
          paddingLeft: "5px",
          borderRadius: "15px",
          backgroundColor: "rgba(80, 80, 80, 0.4)",
          lineHeight: "35px",
          marginRight: "10px"
        };
        const homeBotton = {
          float: "right",
          height: "30px",
          width: "30px",
          boxSizing: "border-box",
          paddingLeft: "1px",
          borderRadius: "15px",
          backgroundColor: "rgba(80, 80, 80, 0.4)",
          lineHeight: "30px",
          marginRight: "10px"
        };
    
        const opacity = this.props.opacity;
    
        const productTopBarX = {
          opacity: opacity,
          position: "fixed",
          boxSizing: "border-box",
          paddingTop: "6px",
          zIndex: "999",
          top: "0px",
          height: "42px",
          width: "100%",
          backgroundColor: "#fbfbfb",
          borderBottom: "1px solid #d8d8d8"
        };
    
        const backBottonX = {
          float: "left",
          height: "30px",
          width: "30px",
          boxSizing: "border-box",
          paddingLeft: "5px",
          lineHeight: "32px",
          marginLeft: "10px"
        };
        const shareBottonX = {
          float: "right",
          height: "30px",
          width: "30px",
          boxSizing: "border-box",
          paddingLeft: "5px",
          lineHeight: "35px",
          marginRight: "10px"
        };
        const homeBottonX = {
          float: "right",
          height: "30px",
          width: "30px",
          boxSizing: "border-box",
          paddingLeft: "1px",
          lineHeight: "30px",
          marginRight: "10px"
        };
        const Sectitle = {
          zIndex: "-2",
          position: "absolute",
          height: "40px",
          width: "100%",
          textAlign: "center",
          lineHeight: "30px"
        };
        return(
            <div>
                <div style={productTopBar} >
          <div style={backBotton}  >
            <img src={require("../../component/img/leftw.png")} alt="" />
          </div>
          <div style={homeBotton}>
            <img src={require("../../component/img/homew3.png")} alt="" />
          </div>
          <div style={shareBotton}>
            <img src={require("../../component/img/sharew5.png")} alt="" />
          </div>
        </div>
        <div style={productTopBarX}  >
          <div style={Sectitle}  >{this.props.barTitle}</div>
          <div style={backBottonX} onClick={this.change.bind(this)} >
            <img src={require("../../component/img/leftd.png")} alt="" />
          </div>
          <div style={homeBottonX}>
            <img src={require("../../component/img/homed3.png")} alt="" />
          </div>
          <div style={shareBottonX}>
            <img src={require("../../component/img/shared5.png")} alt="" />
          </div>
        </div>
            </div>
        )
    }
}

export default ProductTopBar