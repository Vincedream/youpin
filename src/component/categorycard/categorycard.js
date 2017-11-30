import React from "react";
import styled from "styled-components";

export default class CategoryCard extends React.Component {
  render() {
    const containerWidth = window.screen.availWidth - 75;
    const topImgBoxHeight = containerWidth / 2.5;
    const TopImgBox = styled.div`
      width: ${containerWidth};
      height: ${topImgBoxHeight};
      padding: 10px 15px;
      box-sizing: border-box;
    `;
    const AdImg = styled.img`
      width: ${containerWidth - 30 + "px"};
      height: ${topImgBoxHeight - 20 + "px"};
    `;
    const DescBox = styled.div`
      width: 100%;
      height: 27px;
      line-height: 27px;
      text-align: center;
      font-size: 13px;
      color: #cecdcd;
    `;

    const productBoxHeight = window.screen.availHeight - 240 + "px";
    const ProductBox = styled.div`
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      width: 100%;
      height: ${productBoxHeight};
    `;

    const Product = styled.div`
      width: 33.33%;
      height: 110px;
      text-align: center;
    `;

    const ProductImgBox = styled.div`
      display: flex;
      width: 100%;
      height: 75px;
      justify-content: center;
      align-items: center;
    `;

    const ProductTitleBox = styled.div`
      display: flex;
      justify-content: center;
      height: 35px;
      width: 100%;
      text-align: center;
      color: #848282;
      font-size: 10px;
    `;
    const ProductTitle = styled.span`
      display: inline-block;
      width: 90%;
    `;

    const productBoxData = this.props.productBoxData;
    
    return (
      <div className="boxStyle" >
        <TopImgBox>
          <AdImg src={productBoxData.topImgUrl} alt="顶部广告图片" />
        </TopImgBox>
        <DescBox>
          <span>— {productBoxData.descTitle} —</span>
        </DescBox>
        <ProductBox>
          {productBoxData.signleProduct.map(v => (
            <Product key={v.productId}>
              <ProductImgBox>
                <img src={v.productImgUrl} alt="种类图片" />
              </ProductImgBox>
              <ProductTitleBox>
                <ProductTitle>{v.productTitle}</ProductTitle>
              </ProductTitleBox>
            </Product>
          ))}
        </ProductBox>
      </div>
    );
  }
}
