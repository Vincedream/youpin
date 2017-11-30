import React from 'react';

export default class LongBoxY extends React.Component{
    render(){
        const config = this.props.config;
        const titleColor = config.ishot? "#da5954":"#5f5f61";
        console.log(config)
        const boxStyle={
            height:"290px",
            width:"49.5%",
            backgroundColor: config.bgColor ,
            float:"left"
        }
        const title={
            display:'inline-block',
            marginTop:"15px",
            marginLeft:"15px",
            width:"140px",
            fontSize:"16px",
            overFlow:"hidden",
            color:titleColor,
            
        }
        const des={
            display:'inline-block',
            marginLeft:"15px",
            marginTop:"5px",
            width:"140px",
            fontSize:"10px",
            overFlow:"hidden",
            color:"#98979c",
            lineHeight:"15px"
           
        }
        const imgBox={
            display:"flex",
            marginTop:"25px",
            width:"100%",
            height:"50%",
            justifyContent:"center"
        }
        const imgstyle={
            width:"70%",
            height:"auto"
        }
        const price={
            display:'inline-block',
            marginTop:"5px",
            marginLeft:"14px",
            width:"140px",
            fontSize:"17px",
            color:"red",
        }
        return(
            <div style={boxStyle} >
               <span style={title} >{config.title}</span>
               {config.type==="price" ? <span style={price} >¥{config.price}</span> : null }
               {config.type==="desc" ? <span style={des} >{config.desc}</span> : null }
                {config.type==="all" ? <div><span style={des} >{config.desc}</span><span style={price} >¥{config.price}</span></div>    : null } 
               <div style={imgBox} >
                <img style={imgstyle} src={config.imgUrl} alt=""/>
               </div>
            </div>
        )
    }
}