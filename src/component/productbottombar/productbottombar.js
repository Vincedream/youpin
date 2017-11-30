import React from 'react';

export default class ProductBottomBar extends React.Component{
    render(){
        const boxStyle={
            position:"fixed",
            bottom:"0px",
            height:"50px",
            width:"100%",
            boxSizing:"border-box",
            borderTop:"1px solid #d8d8d9",
            backgroundColor:"red"
        }
        const likeBox={
            float:"left",
            width:"20%",
            height:"50px",            
            boxSizing:"border-box",
            borderRight:"1px solid #d8d8d9",
            backgroundColor:"#f2f2f2",
            textAlign:"center",
            // lineHeight:"50px"
        }
        const shopBox={
            float:"left",
            height:"50px",            
            width:"20%",
            textAlign:"center",            
            backgroundColor:"#f2f2f2",
            
        }
        const justPay={
            float:"left",
            height:"50px",            
            width:"30%", 
            backgroundColor:"#cc363c",
            color:"#f1f1f1",
            lineHeight:"50px",            
            textAlign:"center",
            fontSize:"15px"
        }
        const addCar={
            float:"left",
            height:"50px",            
            width:"30%", 
            backgroundColor:"#dfb07e",
            color:"#f1f1f1",            
            lineHeight:"50px",
            textAlign:"center",
            fontSize:"15px"
        }
        return(
            <div style={boxStyle}>
                <div style={likeBox} >
                    <div style={{height:"20px",marginTop:"5px"}} ><img src={require('../img/likew1.png')} alt=""/></div>
                    <span style={{fontSize:"12px",color:"#979797"}} >收藏</span>
                </div>
                <div style={shopBox} >
                <div style={{height:"25px"}} ><img src={require('../img/carw2.png')} alt=""/></div>
                    <span style={{fontSize:"12px",color:"#979797"}} >购物车</span>
                    </div>
                <div style={justPay} >立即购买</div>
                <div style={addCar} >加入购物车</div>
            </div>  
        )
    }
}