import React from 'react';

export default class ProductBox extends React.Component{
    render(){
        const productBox={
            marginTop:"2px",
            width:"49.5%",
            height:"210px",
            backgroundColor:"#fff"
        }
        const descImg={
            height:"160px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }
        const namePrice={
            height:"50px",
            backgroundColor:"#f8f8f8",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }
        const titleStyle={
            display:"block",
            margin:"3px 0",
            width:"90%",
            textAlign:"center",
            fontSize:"13px",
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis",
            color:"#474747"
        }
        const Icon={
            fontSize:"8px",
            color:"#ba1717"
        }
        const price={
            display:"inline_block",
            marginLeft:"2px",
            fontSize:"15px",
            color:"#ba1717",

        }
        const imgBox={
            height:"132px",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }
        const imgStyle={
            
        }
        const descBox={
            height:"28px",
            width:"77%",
            textAlign:"center",
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis"
        }
        const descStyle={
            color:"#b3865f",
            fontSize:"13px"
        }
        const config=this.props.config;
        // console.log(config);
        return(
            <div style={productBox} >
                <div style={descImg}>
                    <div style={imgBox} >
                        <img style={imgStyle} src={config.imgUrl} alt=""/>
                    </div>
                    <div style={descBox} >
                        <span style={descStyle} >{config.desc}</span>
                    </div>
                </div>
                <div style={namePrice} >
                    <span style={titleStyle} >{config.title}</span>
                    <div>
                    <span style={Icon} >¥</span>
                    <span style={price} >{config.price}</span>    
                    {config.pricrStart ?  <span style={Icon} >起</span> : null }                    
                                            
                    </div>
                </div>
            </div> 
        )
    }
}