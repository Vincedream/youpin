import React from 'react';

export default class AdImg extends React.Component{

    render(){
        const standardHeight = this.props.type==="homeAd" ? 145:155;
        console.log(standardHeight)
        const imgHeight = window.screen.availWidth / 375 * standardHeight;        
        const imgBox = {
            width:"100%",
            height:imgHeight
        }
        const imgStyle = {
            width:"100%",
            height:imgHeight
        }
        return(
            <div style={imgBox} >
                <img style={imgStyle} src={this.props.imgUrl} alt=""/>
            </div>
        )
    }
}