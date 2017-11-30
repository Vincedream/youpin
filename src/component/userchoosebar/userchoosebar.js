import React from 'react';
import styled from 'styled-components';

export default class UserChooseBar extends React.Component{
    render(){
        const ChooseBarBox=styled.div`
            height:46px;
            width:100%;
            background-color:#fff;
            box-sizing:border-box;
            padding:0 14px;
        `;
        const ChooseBar=styled.div`
            height:100%;
            width:100%;
            display:flex;
            justify-content:space-round;
            align-items:center;
            color:#6f6f6f;
            box-sizing:border-box;
            font-size:15px;
            border-bottom:1px solid #f5f5f5;
            span:first-of-type{
                width:100%;
                display:inline-block;
                margin-left:10px;
            }
        `;
        const IconBox=styled.div`
            width:20px;
            height:25px;
            line-height:40px;
        `;
        return(        
                <ChooseBarBox>
                    <ChooseBar>
                        {this.props.iconImg ? <IconBox><img src={this.props.iconImg} alt=""/></IconBox> : null }
                        <span>{this.props.title}</span>
                        {this.props.othertitle ?  <span style={{whiteSpace:"nowrap",fontSize:"12px",color:"#bbbbbb"}} >{this.props.othertitle}</span> : null}
                        <img src="http://osutuwgm1.bkt.clouddn.com/userright.png" alt=""/>
                    </ChooseBar>
                </ChooseBarBox>

        )
    }
}