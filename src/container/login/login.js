import React from 'react';
import styled from 'styled-components';
import LoginInput from '../../component/logininput/logininput';
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        const PageHeight=window.screen.availHeight+"px";
        const LoginBox=styled.div`
            width:100%;
            height:${PageHeight};
            background-color:#fff;
        `
        const BcakButton=styled.div`
            padding:15px 0 0 10px;
        `;
        const LogoBox=styled.div`
            height:130px;
            width:100%;
            text-align:center;
            img{
                margin-top:40px;
            }
        `;
        
        const OtherLoginBox=styled.div`
            position:absolute;
            bottom:0px;
            margin-left:50%;
            left:-50%;                    
            height:100px;
            width:100%;            
        `;
        const OtherBoxTitle=styled.div`
            width:270px;
            margin:0 auto;
            span:nth-of-type(2n){
                display:inline-block;
                position:relative;
                top:5px;
                color:#cdc0b5;
                font-size:12px;
                margin:0 3px;
            }
            span:nth-of-type(2n+1){
                display:inline-block;
                width:65px;
                height:1px;
                border-bottom:1px solid #f3f3f3;
            }
            `;
        const OtherBox=styled.div`
            height:60px;
            width:100%;
        `;
        const OtherItem=styled.div`
            display:inline-block;
            width:50%;
            margin-top:20px;
            text-align:center;
            img{

            }
            span{
                display:block;
                color:#cdc0b5;
                font-size:12px;
            }
        `;
        return(
           <LoginBox>
                <BcakButton>
                    <img src="http://osutuwgm1.bkt.clouddn.com/loginleft.png" alt="" />
                </BcakButton>
                <LogoBox>
                    <img src="http://osutuwgm1.bkt.clouddn.com/loginlogo.png" alt=""/>
                </LogoBox>
                
                <LoginInput></LoginInput>
                <OtherLoginBox>
                    <OtherBoxTitle>
                    <span></span>
                    <span>您还可以用以下方式登录</span>
                    <span></span>
                    </OtherBoxTitle>
                    <OtherBox>
                        <OtherItem>
                            <img src="http://osutuwgm1.bkt.clouddn.com/othericon1.png" alt=""/>
                            <span>微信登录</span>
                        </OtherItem>
                        <OtherItem>
                            <img src="http://osutuwgm1.bkt.clouddn.com/othericon2.png" alt=""/>
                            <span>用户名密码登录</span>                            
                        </OtherItem>
                    </OtherBox>
                </OtherLoginBox>
           </LoginBox> 
        )
    }
} 