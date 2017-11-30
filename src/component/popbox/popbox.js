// import React from 'react';
// import styled from 'styled-components';
// import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';

// export default class PopProductBox extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//           modal: false
//         };
//       }
      
//       showModal(){
//         // e.preventDefault(); // 修复 Android 上点击穿透
//         this.setState({
//             modal: true
//         });
//       }
//       onClose = () => {
//         this.setState({
//           modal: false,
//         });
//       }
//       render(){
//         const PopBox=styled.div`
//         width:100%;
//         height:auto;
//         background-color:#fff;
//         text-align:start;
//         line-height:1;
//         z-index:999
//     `;
//     const ProductShowBox=styled.div`
//         display:flex;
//         width: 100%;
//         height: 64px;
//         border-top: 1px solid #bfbfbf;
//     `;
//     const ProductImgBox=styled.div`
//         width:80px;
//         height:64px;
//         text-align:center;
//         img{
//           display:inline-block;
//         }
//     `;
//     const ProductTextBox=styled.div`
//         width:100%;
//         padding-top:3px;
//         padding-right:3px;
//         span{
//           color:#434343;
//           font-size:13px;
//         }
//         p{
//           margin:8px 0;
//           color:#d14b51;
//           font-size:14px;
//         }
//     `;
//     const ProductConfigBox=styled.div`
//         width:100%;
//         box-sizing:border-box;
//         border-top: 1px solid #eaeaea;  
//         background-color:#fff;
//         padding:13px 15px;
        
//         p{
//           margin:2px 0 6px 0;
//           color:#8f8f8f;
//           font-size:14px;
//         }
//         div{
//           width:100%;
//           display:flex;
//           flex-wrap: wrap
//         }
//         span{
//           border:1px solid #d5d5d5;
//           border-top: 2px solid #eaeaea;
//           color:#484747;
//           margin-top:5px;
//           margin-right:7px;
//           /* border:1px solid #cc363c;
//           border-top: 2px solid #e59a9d;
//           color:#cc363c;         */
//           border-radius:3px;
//           padding:6px 13px;
//           font-size:14px;
  
//         }
//     `;
//     const CheckBox=styled.div`
//         width:100%;
//         height:50px;
//         span{
//           display:inline-block;
//           width:50%;
//           height:100%;
//           box-sizing:border-box;        
//           color:#fff;
//           line-height:50px;
//           text-align:center;
          
//         }
//         span:nth-child(1)
//           {
//           background:#cc363c;
//           }
//           span:nth-child(1):active
//           {
//           background:#fd434b;
//           }
//         span:nth-child(2)
//           {
//           background:#dfb07e;
//           }
//           span:nth-child(2):active
//           {
//           background:#fbc68e;
//           }
//     `;
//     const PromptBox=styled.div`
//       width:100%;
//         height:50px;
//         span{
//           display:inline-block;
//           width:100%;
//           height:100%;
//           box-sizing:border-box;        
//           color:#fff;
//           line-height:50px;
//           text-align:center;
//           background:#cc363c;
//         }
//     `;
//           return(
//             <div>
            
                
//                 <Button onClick={this.showModal.bind(this)}>popup</Button>
//                 <WhiteSpace />
//                 <Modal
//                   popup
//                 //   visible={this.props.poped}
//                   visible={(this.state.modal||this.props.poped) ? true : false}
//                   onClose={this.onClose}
//                   // visible={true}
//                   transparent={true}
//                   // closable={true}
//                   maskClosable={true}
//                   animationType="slide-up"
//                 >
//                <PopBox>
//                   <ProductShowBox>
//                     <ProductImgBox>
//                       <img src="http://osutuwgm1.bkt.clouddn.com/shafaicon1.png" alt=""/>
//                     </ProductImgBox>
//                     <ProductTextBox>
//                         <span>8H独立袋装弹簧布艺沙发8H独立袋装弹簧布艺沙发8H独立袋装弹簧布艺沙发</span>
//                         <p>¥1288</p>
//                     </ProductTextBox>
//                   </ProductShowBox>
//                   <ProductConfigBox>
//                       <p>颜色</p>
//                       <div>
//                         <span>拂晓灰（浅灰）</span>
//                         <span>拂晓灰（浅灰）</span>
//                         <span>拂晓灰（浅灰）</span>
//                       </div>
//                   </ProductConfigBox>
//                   <ProductConfigBox>
//                       <p>座位数</p>
//                       <div>
//                         <span>三人座</span>
//                         <span>双人座</span>
//                         <span>单人座</span>
//                       </div>
//                   </ProductConfigBox>
//                   {/* <CheckBox>
//                     <span>立即购买</span>
//                     <span>加入购物车</span>
//                   </CheckBox> */}
//                   <PromptBox>
//                     <span>请选择颜色、分类</span>
//                   </PromptBox>
//                 </PopBox>
//                 </Modal>
                
//               </div>
//           )
//       }
// }