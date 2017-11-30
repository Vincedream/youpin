import React from 'react';

export default class MidBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            midData:[
                {title:'有品上新',url:'http://osutuwgm1.bkt.clouddn.com/midImg1.png'},
                {title:'小米众筹',url:'http://osutuwgm1.bkt.clouddn.com/midImg2.png'},
                {title:'视觉盛宴',url:'http://osutuwgm1.bkt.clouddn.com/midImg3.png'},
                {title:'智能生活',url:'http://osutuwgm1.bkt.clouddn.com/midImg4.png'},
                {title:'品质餐厨',url:'http://osutuwgm1.bkt.clouddn.com/midImg5.png'},
            ]
        }
    }
    render(){
        const midBox={
            height:"75px",
            width:"100%",
            backgroundColor:'#fff',
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"            
            
        }
        const signBox={
            height:"65px",
            width:"60px",
           color:'#ababab',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize:'5px'    
        }
        const imgStyle = {
            height:"50px",
            width:"50px"
        }
        return(
            <div style={midBox}>
                {this.state.midData.map(i=>(
                    <div style={signBox} key={i.url} >
                    <img style={imgStyle} src={i.url} alt=""/>
                    {i.title}
                    </div>
                    
                    ))}
            </div>
        )
    }
}