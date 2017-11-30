import React from 'react';


class List extends React.Component {
    render() {
        //我们可以理解为color参数是子组件向父组件传递的数据
        const changeColor = (color)=>{
            return ()=>{
                this.props.changeColor(color)
            }
        }
      return (
        <div>
          <h1>this is List</h1>
          <input type="text" value={this.props.inputvalue} onChange={v=>this.props.handlechange(v)} />
          <button onClick={()=>this.props.changeColor('red')} >changeIndexColor</button>
        </div>
      );
    }
  }
  
  class TestDemo extends React.Component {
   constructor(){
       super();
       this.state={
           color:'green',
           inputvalue:''
       }
   }
    changeColor(color){
        this.setState({
          color:color
        })
    }
    handlechange(v){
        this.setState({
            inputvalue:v.target.value
        })
    }
    render() {
      return (
        <div>
          <h1 style={{color:this.state.color}} >this is Index</h1>
          <List changeColor={this.changeColor.bind(this)} inputvalue={this.state.inputvalue} handlechange={this.handlechange.bind(this)} />
        </div>
      );
    }
  }

export default TestDemo