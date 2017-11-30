import React from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
class TopBar extends React.Component{
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        const boxStyle={
            width:"100%",
            height:"40px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "#ffffff"
        }
        const logo={
            height:"25px",
            width:"69px",
        }
        const search={
            height:"28px",
            width:"175px",
            color: "#d2d2d2",
            border: "1px solid #e5e5e5",
            boxSizing:" border-box",
            paddingLeft: "5px",
            display:"flex",
            paddingTop: "3px",
            borderRadius: "2px",
            fontSize:"14px"
        }
        return(
            <div style={boxStyle}>
                    <img style={logo} src={require('../img/logo.jpg')} alt=""/>
                    <div style={search} >
                        <img  style={{height:"21px"}} src={require('../img/search.png')} alt=""/>
                        <span style={{margin:"2px"}}  >双十一返场 精彩继续</span>
                        </div>
                        <img style={{height:"20px"}} src={require('../img/qrcode.png')} alt=""/>
                        <img style={{marginTop:"5px"}} src={require('../img/qr.png')} alt=""/>
            </div> 
        )
    }
}

export default TopBar