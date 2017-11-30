import React from 'react';
import { withRouter } from "react-router-dom";

@withRouter
class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            textvalue:""
        }
    }
    change(){
        console.log()
        
    }
    handleChange(e){
        this.setState({
            textvalue:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.textvalue} onChange={this.handleChange.bind(this)} />
                {/* <TopTitleBar title="购物车" />
                <ShopLogin/> */}
                {/* <h1 onClick={this.change} >Shop</h1>
                <h1 onClick={()=>{this.props.history.push('/product/123123')}} >sfds</h1> */}
            </div>
        )
    }
}

export default Shop