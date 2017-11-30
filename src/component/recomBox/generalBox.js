import React from 'react';

export default class GeneralBox extends React.Component{
    render(){
        const config = this.props.config;
        const titleColor = config.ishot? "#da5954":"#5f5f61";
        const specialMargin = this.props.last ? "3px" : "0px";
        console.log(specialMargin)
        const boxStyle={
            height:"144px",
            width:"49.5%",
            backgroundColor: config.bgColor ,
            float:"right",
            marginTop:specialMargin
        }
        const title={
            display:'inline-block',
            marginTop:"10px",
            marginLeft:"10px",
            width:"140px",
            fontSize:"14px",
            overFlow:"hidden",
            color:titleColor,
            
        }
        const des={
            display:'inline-block',
            marginLeft:"10px",
            width:"140px",
            fontSize:"10px",
            overFlow:"hidden",
            color:"#98979c",
           
        }
        const imgBox={
            display:"flex",
            marginTop:"5px",
            width:"100%",
            height:"60%",
            justifyContent:"center"
        }
        const imgstyle={
            width:"60%",
            height:"auto"
        }
        const price={
            display:'inline-block',
            marginLeft:"14px",
            width:"140px",
            fontSize:"13px",
            
            color:"red",
        }
        return(
            <div style={boxStyle} >
               <span style={title} >{config.title}</span>
               {config.type==="price" ? <span style={price} >¥{config.price}</span> : null }
               {config.type==="desc" ? <span style={des} >{config.desc}</span> : null }
               <div style={imgBox} >
                <img style={imgstyle} src={config.imgUrl} alt=""/>
               </div>
            </div>
        )
    }
}