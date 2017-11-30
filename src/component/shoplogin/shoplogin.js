import React from 'react';

export default class ShopLogin extends React.Component{
    render(){
        const boxHeight=window.screen.availHeight-92;
        const loginBox={
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            marginTop:"42px",
            width:"100%",
            height:boxHeight,
            backgroundColor:"#fafafc",

        }
        return(
            <div style={loginBox} >
                <img style={{height:"100px",marginBottom:"14px"}} src="http://osutuwgm1.bkt.clouddn.com/shoplogo.png" alt=""/>
                <span style={{fontSize:"14px",color:"#989899"}} >登录后才能查看商品哦</span>
                <div style={{padding:"6px 10px",marginTop:"14px",border:"1px solid #b2b2b2",borderRadius:"3px",color:"#7d7d7d",backgroundColor:"#fff",fontSize:"14px",}} >立即登录</div>
            </div> 
        )
    }
}