import React from 'react';
import styled  from 'styled-components'

export default class CategorySearch extends React.Component{
    
    render(){
        const SearchBox=styled.div`
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:42px;
            background-color: #efeff0;
            border-bottom: 1px solid #d8d8d8;
        `;
        const SearchBar=styled.div`
            width:95%;
            height:28px;
            background-color:#fff;
            border-radius: 4px;
            line-height:28px;
        `;
        const SearchImg=styled.img.attrs({
            src:require('../img/search.png'),
            alt:""
          })`
            position:relative;
            top:3px;
            left:5px;
            height:16px;
        `;
        
        const SearchText=styled.span`
            margin-left:10px;
            font-size:13px;
            color:#dcdada;
        `;

        return(
            <SearchBox>
                <SearchBar>
                <SearchImg/>
                <SearchText>{this.props.searchText}</SearchText>
                </SearchBar>
            </SearchBox>
        )
    }
}