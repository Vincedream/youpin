import React from 'react';

export default class ProductContainer extends  React.Component{
    render(){
        const titleBox={
            height:"50px",
            width:"100%",
            textAlign:"center",
            lineHeight:"50px",
            color:"#535353",
            fontSize:"15px",
            backgroundColor:"#ffffff",
        }
        return(
            <div>
                <div style={titleBox}>
                    <span>{this.props.title}</span>
                </div>
                <div style={{width:"100",display:"flex",flexWrap:"wrap",justifyContent:"space-between",backgroundColor:"#f5f5f9"}}>
                 {this.props.children}
                </div>
               
            </div>
        )
    }
}