import React from "react";
import styled from "styled-components";
export default class TasteBox extends React.Component {
  render() {
    const boxHeight = window.screen.availHeight - 92 + "px";
    const TasteBox = styled.div`
      height: ${boxHeight};
      width: 100%;
      padding-top: 42px;
      padding-bottom: 50px;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    `;
    const SingleBox = styled.div`
      width: 100%;
      margin-bottom: 8px;
      text-align: center;
      background-color: #fff;
    `;
    const imgWidth = window.screen.availWidth - 14 + "px";
    const imgHeight = imgWidth * 0.544 + "px";
    const BoxImg = styled.img`
      width: ${imgWidth};
      height: ${imgHeight};
      margin-top: 8px;
    `;
    const DetailBox = styled.div`
      display: flex;
      margin-top: 8px;
      height: 110px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    `;
    const Title = styled.span`
      font-size: 16px;
      color: #3a3a3a;
    `;
    const Desc = styled.span`
      font-size: 13px;
      color: #bdbdbd;
    `;
    const GoBox = styled.div`
    width: 70px;
    margin-top: 5px;
    margin-bottom: 15px;
    text-align: center;
    line-height: 28px;
    font-size: 14px;
    background-color: #d1bfa7;
    color: #fff
    `;

    const tasteData = this.props.tasteData;

    return (
      <TasteBox>
        {tasteData.map(v => (
          <SingleBox key={v.tasteId}>
            <BoxImg src={v.imgUrl} alt="" />
            <DetailBox>
              <Title>{v.title}</Title>
              <Desc>{v.desc}</Desc>
              <GoBox>去发现</GoBox>
            </DetailBox>
          </SingleBox>
        ))}
      </TasteBox>
    );
  }
}
