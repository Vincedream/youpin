import React from 'react';

export default class LongBoxX extends React.Component{
    render(){
        const config =this.props.config;
        console.log(config);
        const titleColor = config.ishot ? "#e85f58" : "#4b4f52" ;
        console.log(titleColor);
        const boxStyle={
            height:"145px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor:config.bgColor
        }
        const leftBox={
            width:"60%",
            height:"140px",
            jdisplay: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft:'15px',
        }
        const rightBox={
            width:"40%",
        }
        const title={
            display:"inline-block",
            width:"180px",            
            marginTop:"15px",
            color:titleColor,
            fontSize:"15px",
        }
        const desc={
            display:"inline-block",
            width:"180px",
            marginTop:"5px",
            color:'#9fa7ae',
            fontSize:"12px",
        }
        const lookBox={
            height:"20px",
            width:"55px",
            marginTop:"10px",
            backgroundColor:'#75c3e3',
            color:"#f5f5f5",
            lineHeight:"20px",
            textAlign:"center",
            fontSize:"12px"
        }
        const priceBox={
            color:'red',
            marginTop:"8px",
            fontSize:"20px"
        }
        const imgstyle={
            height:"120px",
            marginTop:"10px"
        }
        return(
            <div style={boxStyle} >
                <div style={leftBox} >
                    <span style={title} >{config.title}</span>
                    <span style={desc} >{config.desc}</span>
                    {config.type==="look" ? <div style={lookBox} >去看看</div> : null }
                    {config.type==="price" ? < div style={priceBox} >¥{config.price}</div>  : null  }
                   
                </div>
                <div style={rightBox} >
                    <img style={imgstyle} src={config.imgUrl} alt=""/>
                </div>
            </div>
        )
    }
}