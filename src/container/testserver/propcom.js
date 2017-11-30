import React from 'react';

export default class Propcom extends React.Component{
    render(){
        const data=this.props.data;
        console.log(data);
        return(
            <div>this is com
                {data?<h1>{data[0].productTitle}</h1>:null}
                
            </div>
        )
    }
}