import React from 'react';
import styled from 'styled-components';

export default class LoginInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            telNum:"",
            validCode:"",
            buttonColor:"#c1af9f",
            timeCount:60
        }
    }
    handleTelChange(key,e){
        this.setState({
            [key]:e.target.value
        },()=>{
            if(this.state.telNum!==''&&this.state.validCode!==''){
                this.setState({
                    buttonColor:"#845f3f"
                })
            }else{
                this.setState({
                    buttonColor:"#c1af9f"
                })
            }
        })
    }

    Countdown(){
        let timeOut=59;
        this.setState({
            timeCount:timeOut
        })
        let that =this;
        function timeDown(){
            timeOut--;
            that.setState({
                timeCount:timeOut
            })
            if(timeOut===0){
                clearInterval(a);
                that.setState({
                    timeCount:60
                })
            }
        }
        let a=setInterval(timeDown,1000)
    }
    render(){
   
    const GetValidationCodeBox=styled.button`
        position: relative;
        box-sizing:border-box;
        height:26px;           
        width:88px;
        top:-40px;
        left:180px;
        padding:2px 3px;
        font-size:15px;
        color:#8c6a4c;
        border:1px solid #cebfb2;
        border-radius:2px;
        background-color:transparent;
    `;
    const ButtonbgColor=this.state.buttonColor;
    const LoginBotton=styled.div`
        height:40px;
        width:270px;
        margin:0 auto;
        margin-top:40px;
        color:#f1efed;
        font-size:15px;
        text-align:center;
        line-height:40px;
        background-color:${ButtonbgColor};
    `;
        return(
            <div>
                    <div className="SingleInput"> 
                        <input className="logininput"  type="text" placeholder="请输入手机号"  onChange={e=>this.handleTelChange('telNum',e)} value={this.state.telNum} />
                    </div>
                    <div className="SingleInput">
                        <input className="logininput" type="text" placeholder="请输入验证码"  onChange={e=>this.handleTelChange('validCode',e)} value={this.state.validCode} />
                        <GetValidationCodeBox onClick={this.Countdown.bind(this)}>
                        {this.state.timeCount===60 ? "获取验证码" : this.state.timeCount+'s' }
                        
                        </GetValidationCodeBox>
                    </div>
                <LoginBotton  >
                    快捷登录
                </LoginBotton>
            </div>
        )
    }
}