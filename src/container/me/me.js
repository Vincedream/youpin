import React from "react";
import { WhiteSpace } from 'antd-mobile';
import UserTopBar from '../../component/usertopbar/usertopbar';
import UserChooseBar from '../../component/userchoosebar/userchoosebar';
import CheckBar from '../../component/checkbar/checkbar';
export default class Me extends React.Component {
   render(){
     const checkBarData=[
       {
         iconImgUrl:"http://osutuwgm1.bkt.clouddn.com/dindanicon1.png",
         title:"待付款"
       },
       {
        iconImgUrl:"http://osutuwgm1.bkt.clouddn.com/dindanicon2.png",
        title:"待收获"
        },
        {
          iconImgUrl:"http://osutuwgm1.bkt.clouddn.com/dindanicon3.png",
          title:"待评价"
        },
        {
          iconImgUrl:"http://osutuwgm1.bkt.clouddn.com/dindanicon4.png",
          title:"退款订单"
        },
     ]
    return(
      <div>
        <UserTopBar />

        <UserChooseBar  title="我的订单" othertitle="全部订单" />        
        <CheckBar checkBarData={checkBarData} />

        <WhiteSpace size="sm" />
        <UserChooseBar iconImg="http://osutuwgm1.bkt.clouddn.com/usericon1.png" title="新人邀请"  />
        <UserChooseBar iconImg="http://osutuwgm1.bkt.clouddn.com/usericon2.png" title="分享App"  othertitle="分享有礼"  />        

        <WhiteSpace size="sm" />
        <UserChooseBar iconImg="http://osutuwgm1.bkt.clouddn.com/usericon3.png" title="我的资产" othertitle="优惠券/积分" />
        <UserChooseBar iconImg="http://osutuwgm1.bkt.clouddn.com/usericon4.png" title="我的收藏"  />
        <UserChooseBar iconImg="http://osutuwgm1.bkt.clouddn.com/usericon5.png" title="地址管理"  />
        <UserChooseBar iconImg="http://osutuwgm1.bkt.clouddn.com/usericon6.png" title="反馈"  />
        
      </div>
    )
   }
}
