import React from "react";
import styled from "styled-components";
import { Icon } from "antd-mobile";
import { Modal } from "antd-mobile";

export default class ProductBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      //   color:"拂晓灰（浅灰）",
      //   siteNum:"三人座"
      ProductConfigData:''
    };
  }

  showModal() {
    // e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      modal: true
    });
  }
  onClose = () => {
    this.setState({
      modal: false
    });
  };
  componentDidMount(){
    //获取商品所有选项
   const configAllType=[];
    this.props.ProductConfigData.map(v=>{
      configAllType.push(v.type);
    })
    this.setState({
      configAllType:configAllType
    })

  }
  ChangeConfig = (key, value) => () => {
    
    const type=this.state.configAllType;
    let chooseAllType=[];
    this.setState({
      [key]: value
    },()=>{
    const stateData=this.state;
    type.map(v=>{
      if(stateData[v]){
        chooseAllType.push(stateData[v])
      }
     })
    if(chooseAllType.length>=(type.length)){
       this.setState({
         chooseAllType:true
       })
       let userChoose=chooseAllType.join('');
        console.log()
        this.props.CombineCinfig.map(v=>{
          if(v.combination===userChoose){
            console.log('peidui success');
            console.log(userChoose);
            this.setState({
              userLastChoose:v
            })             
          }
//          console.log(v.combination)
        })
     }
    });

    


  };
  render() {
    const PopBox = styled.div`
      width: 100%;
      height: auto;
      background-color: #fff;
      text-align: start;
      line-height: 1;
      z-index: 999;
    `;
    const ProductShowBox = styled.div`
      display: flex;
      width: 100%;
      height: 64px;
      border-top: 1px solid #bfbfbf;
    `;
    const ProductImgBox = styled.div`
      width: 80px;
      height: 64px;
      text-align: center;
      img {
        width: 64px;
        height: 64px;
        display: inline-block;
      }
    `;
    const ProductTextBox = styled.div`
      width: 100%;
      padding-top: 6px;
      padding-right: 3px;
      span {
        color: #434343;
        font-size: 14px;
      }
      p {
        margin: 8px 0;
        color: #d14b51;
        font-size: 15px;
      }
    `;
    const ProductConfig = styled.div`
      width: 100%;
      box-sizing: border-box;
      border-top: 1px solid #eaeaea;
      background-color: #fff;
      padding: 13px 15px;
      span {
        margin-top: 5px;
        margin-right: 7px;
        border-radius: 3px;
        padding: 6px 13px;
        font-size: 14px;
      }
      p {
        margin: 2px 0 6px 0;
        color: #8f8f8f;
        font-size: 14px;
      }
      div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      .redbox{
      border:1px solid #cc363c;
      border-top: 2px solid #e59a9d;
      color:#cc363c;         
      }
      .graybox{
        border: 1px solid #d5d5d5;
        border-top: 2px solid #eaeaea;
        color:#484747;
      }
    `;

    const CheckBox = styled.div`
      width: 100%;
      height: 50px;
      span {
        display: inline-block;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        color: #fff;
        line-height: 50px;
        text-align: center;
      }
      span:nth-child(1) {
        background: #cc363c;
      }
      span:nth-child(1):active {
        background: #fd434b;
      }
      span:nth-child(2) {
        background: #dfb07e;
      }
      span:nth-child(2):active {
        background: #fbc68e;
      }
    `;
    const PromptBox = styled.div`
      width: 100%;
      height: 50px;
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        color: #fff;
        line-height: 50px;
        text-align: center;
        background: #cc363c;
      }
    `;

    const ProductInfo = styled.div`
      width: 100%;
      height: 125px;
      text-align: center;
      background-color: #ffffff;
    `;
    const ProductTitle = styled.span`
      display: inline-block;
      margin-top: 10px;
      width: 90%;
      height: 36px;
      lineheight: 36px;
      font-size: 18px;
      color: #4e4e4e;
      overflow: hidden;
    `;

    const ProductDesc = styled.span`
      display: inline-block;
      width: 85%;
      height: 36px;
      font-size: 14px;
      lineheight: 18px;
      color: #969595;
      overflow: hidden;
    `;
    const Price = styled.span`
      display: inline-block;
      height: 40px;
      font-size: 22px;
      line-height: 35px;
      color: #ec2b33;
    `;
    const PriceStart = styled.span`
      font-size: 13px;
      color: #ff3c45;
    `;

    const ProductConfigBox1 = styled.div`width: 100%;`;

    const SingleConfigBar = styled.div`
      height: 46px;
      box-sizing: border-box;
      padding-left: 15px;
      margin-top: 2px;
      line-height: 46px;
      overflow: hidden;
      background-color: #ffffff;
      &:active {
        background-color: #f1f0f0;
      }
    `;
    const ConfigTypeBox = styled.div`
      display: inline-block;
      width: 90%;
    `;

    const ConfigTitle = styled.span`
      color: #a7a7a7;
      font-size: 14px;
    `;

    const DefaultChoosetext = styled.span`
      color: #3d3d3d;
      font-size: 14px;
    `;
    const IconBox = styled.span`
      width: 10%;
      text-align: center;
    `;

    const iconStyle = {
      position: "relative",
      top: "5px",
      color: "#b8b8b8"
    };

    const DiscountBox = styled.span`
      border: 1px solid #da2525;
      margin-right: 4px;
      padding: 0 3px;
      font-size: 10px;
      color: #da2525;
    `;

    const ServiceBox = styled.div`
      width: 100%;
      margin-top: 4px;
      padding: 5px 0;
      background-color: #ffffff;
    `;

    const ServiceTitle = styled.div`
      float: left;
      padding-left: 15px;
      padding-top: 1px;
      color: #a7a7a7;
      font-size: 14px;
    `;
    const SerciceBox = styled.div`display: inline-block;`;
    const SingleService = styled.span`
      display: block;
      font-size: 14px;
      line-height: 18px;
      color: #3e3e3e;
    `;

    const serviceIcon = {
      width: "11px",
      height: "11px",
      color: "#d4342f"
    };

    const StoreBox = styled.div`
      width: 100%;
      margin-top: 4px;
      height: 70px;
      background-color: #ffffff;
    `;

    const StoreImg = styled.img`
      float: left;
      height: 50px;
      width: 50px;
      margin-top: 10px;
      margin-left: 10px;
    `;

    const StoreTextBox = styled.div`
      float: left;
      height: 50px;
      margin-top: 10px;
      margin-left: 10px;
    `;

    const StoreTitle = styled.span`
      display: block;
      margin-top: 6px;
      font-size: 15px;
      color: #292929;
    `;

    const StoreDesc = styled.span`
      font-size: 14px;
      color: #929292;
    `;

    const config = this.props.config;
    // co
    const ProductConfigData = this.props.ProductConfigData;
  

    return (
      <div>
        <ProductInfo>
          <ProductTitle>{config.productTitle}</ProductTitle>
          <ProductDesc>{config.productDesc}</ProductDesc>
          <Price>¥{config.price}</Price>
          {config.priceStart ? <PriceStart>起</PriceStart> : null}
         </ProductInfo>

        <ProductConfigBox1>
          {/* 商品选项 */}
          {config.defaultChooseType ? (
            <SingleConfigBar onClick={this.showModal.bind(this)}>
              <ConfigTypeBox>
                <ConfigTitle>已选：</ConfigTitle>
                <DefaultChoosetext>
                    {/* 穷逼默认选最低配 */}
                 {this.state.userLastChoose ? this.state.userLastChoose.combination:this.props.ProductDefaultConfig.title }
                  {/* {config.defaultChooseType} */}
                </DefaultChoosetext>
              </ConfigTypeBox>
              <IconBox>
                <Icon style={iconStyle} type="right" />
              </IconBox>
            </SingleConfigBar>
          ) : null}

          {/* 送货区域 */}
          {config.sendTo ? (
            <SingleConfigBar>
              <ConfigTypeBox>
                <ConfigTitle>送至：</ConfigTitle>
                <DefaultChoosetext>{config.sendTo}</DefaultChoosetext>
              </ConfigTypeBox>
              <IconBox>
                <Icon style={iconStyle} type="right" />
              </IconBox>
            </SingleConfigBar>
          ) : null}

          {/* 折扣领券 */}
          {config.discount ? (
            <SingleConfigBar>
              <ConfigTypeBox>
                <ConfigTitle>优惠：</ConfigTitle>
                <DiscountBox>领券</DiscountBox>
                <DefaultChoosetext>{config.discount}</DefaultChoosetext>
              </ConfigTypeBox>
              <IconBox>
                <Icon style={iconStyle} type="right" />
              </IconBox>
            </SingleConfigBar>
          ) : null}
        </ProductConfigBox1>

        <ServiceBox>
          <ServiceTitle>服务：</ServiceTitle>
          <SerciceBox>
            {config.service.map(v => (
              <div key={v}>
                <SingleService>
                  <Icon style={serviceIcon} type="check-circle-o" /> {v}
                </SingleService>
              </div>
            ))}
          </SerciceBox>
        </ServiceBox>

        <StoreBox>
          <StoreImg src={config.storeImgUrl} alt="" />
          <StoreTextBox>
            <StoreTitle>{config.storeTitle}</StoreTitle>
            <StoreDesc>{config.storeDesc}</StoreDesc>
          </StoreTextBox>
        </StoreBox>

        <Modal
          popup
          //   visible={this.props.poped}
          visible={this.state.modal || this.props.poped ? true : false}
          onClose={this.onClose}
          // visible={true}
          transparent={true}
          // closable={true}
          maskClosable={true}
          animationType="slide-up"
        >
          <PopBox>
            <ProductShowBox>
              <ProductImgBox>
                <img
                  src={this.state.userLastChoose ? this.state.userLastChoose.imgUrl:this.props.ProductDefaultConfig.imgUrl}
                  alt=""
                />
              </ProductImgBox>
              <ProductTextBox>
                <span>{this.props.ProductDefaultConfig.title}      {this.state.userLastChoose ? this.state.userLastChoose.combination:null }</span>
                <p>¥{this.state.userLastChoose ? this.state.userLastChoose.price:this.props.ProductDefaultConfig.price }</p>
              </ProductTextBox>
            </ProductShowBox>

            {ProductConfigData.map(v => {
              const peoductType = v.type;
              return (
                <ProductConfig key={v.type}>
                  <p>{v.typeText}</p>
                  <div key={v.type}>
                    {v.config.map(k => {
                      const currentState = this.state;
                      const choosedType = currentState[peoductType];
                      const csstype =
                        choosedType === k.title ? "redbox" : "graybox";
                      return (
                        <span
                          className={csstype}
                          key={k.title}
                          onClick={this.ChangeConfig(peoductType, k.title)}
                        >
                          {k.title}
                        </span>
                      );
                    })}
                  </div>
                </ProductConfig>
              );
            })}
                  {this.state.chooseAllType ?
                  <CheckBox>
                  <span>立即购买</span>
                  <span>加入购物车</span>
                </CheckBox> :
                <PromptBox>
                <span>请选择颜色、分类</span>
              </PromptBox>
                  }
            
          </PopBox>
        </Modal>
      </div>
    );
  }
}
