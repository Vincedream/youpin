import React from 'react';
import styled from 'styled-components';

export default class UserTopBar extends React.Component{
    render(){
        const boxHeight = window.screen.availHeight - 50 + "px";        
        const BarBox=styled.div`
            width:100%;
            height:130px;
            background-color:#856242;
            overflow: scroll;
            &::-webkit-scrollbar {/*隐藏滚轮*/
                display: none;
                }
        `;
        const CinfigBox=styled.div`
            width:100%;
            height:34px;
            padding-top:10px;
            box-sizing:border-box;            
            img{
                float:right;
                margin-right:15px;
            }
        `;
        const UserInfoBox=styled.div`
            display:flex;     
            width:100%;
            height:90px;
            justify-content:space-around;
        `;
        const AvatarBox=styled.div`
            text-align:center;
            width:100px;
            img{
            width:66px;
            height:66px;
            border-radius:33px;
            }
           
        `;
        const UserNameBox=styled.div`
            height:66px;
            width:66%;
            line-height:66px;
            span{
                color:#e4e4e4;
                float:left;
            }
            img{
                margin-top:22px;
                float:right;
            }
        `;
        return(
                <BarBox>
                    <CinfigBox>
                        <img src="http://osutuwgm1.bkt.clouddn.com/messageicon.png" alt="icon"/>                        
                        <img src="http://osutuwgm1.bkt.clouddn.com/configicon2.png" alt="icon"/>
                    </CinfigBox>
                    <UserInfoBox>
                        <AvatarBox>
                            <img src="http://osutuwgm1.bkt.clouddn.com/defaultUserAvatar.png" alt=""/>
                        </AvatarBox>
                        <UserNameBox>
                            <span>请登录</span>
                            <img src="http://osutuwgm1.bkt.clouddn.com/userrightwhiteicon.png" alt=""/>
                        </UserNameBox>
                    </UserInfoBox>                         
                </BarBox>
        )
    }
}