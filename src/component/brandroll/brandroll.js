import React from 'react';

export default class BrandRoll extends React.Component{
    render(){
        const config = this.props.config;
        console.log(config);
        const brandBox={
            display:"flex",
            flexWrap: "nowrap",
            height:"145px",
            width:"100%",
            overflowX: "scroll",
        }
        const imgstyle={
           marginRight:"2px"
        }
        return(
            <div className={"brandBoxBar"} style={brandBox} >
                {config.map(x=>
                   
                    <img style={imgstyle} key={x.url} src={x.url} alt=""/>
                )}
                
               
            </div>
        )
    }
}