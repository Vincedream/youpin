import React from 'react';
import styled from 'styled-components';

export default class CheckBar extends React.Component{
    
    render(){
        const CheckBox=styled.div`
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100%;
        height:90px;
        background-color:#fff;
        text-align:center;                
        
            `;
        const SingleCheck=styled.div`
            width:80px;
            height:65px;
            span{
                display:inline-block;
                margin-top:8px;
                font-size:15px;
                color:#8a8a8a;
                font-size:13px;
                text-align:center;                
            }
        `;
        return(
            <CheckBox>
                {this.props.checkBarData.map(v=>
                <SingleCheck>
                     <img src={v.iconImgUrl} alt=""/>
                     <span>{v.title}</span>
                 </SingleCheck>
                )}
            </CheckBox>

        )
    }
}