import React from 'react';
import axios from 'axios';
import Propcom from './propcom';
export default class TestServer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
    componentWillMount(){
        console.log('222');
        let that=this;
        // axios.get('text').then(res=>{
        //     that.setState({
        //         data:res.data
        //     })
        //     console.log(res.data);
        // })
        axios.get('data').then(res=>{
            that.setState({
                data:res.data
            },()=>{
                console.log(this.state.data[0].productTitle);
            })
        })
    }

    

    render(){
        console.log(this.state);
        const data=this.state.data[0]
        return(
            <div>
                {/* {data.productTitle} */}
                {/* <Propcom data={this.state.data} /> */}
            </div>
        )
    }
}