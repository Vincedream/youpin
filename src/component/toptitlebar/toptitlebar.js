import React from 'react';

export default class TopTitleBar extends React.Component{
    render(){
        const boxstyle={
            position:"fixed",
            top:"0px",
            width:"100%",
            height:"41px",
            borderBottom:"1px solid #d8d8d8",
            backgroundColor:"#efeff0",
            textAlign:"center",
            lineHeight:"41px",
        }
        return(
            <div style={boxstyle} >
                <span style={{color:"#575758"}} >{this.props.title}</span>
            </div> 
        )
    }
}