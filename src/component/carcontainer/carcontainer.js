import React from 'react';
import { Icon } from 'antd-mobile';
export default class CarContainer  extends React.Component{
    render(){
        const carBox={
            marginTop:"4px",
            backgroundColor:"#fff",
            width:"100%",
        }
        const titleBox={
            height:"40px",
            width:"100%",
            display:"flex",
            justifyContent:"space-between",
            padding:"0 10px",
            lineHeight:"40px"
        }
        const leftTitle={
            color:"#696868",
            fontSize:'18px'
        }
        const rightTitle={
            color:"#c5c5c5",
            fontSize:'14px'
        }
        return(
            <div style={carBox} >
                <div style={titleBox}>
                    <span style={leftTitle} >{this.props.title}</span>
                    <span style={rightTitle} >更多 <Icon style={{transform:"translateY(6px) translateX(-6px)"}} type={"right"}></Icon> </span>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}