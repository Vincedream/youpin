import React from 'react';
import TopTitleBar from '../../component/toptitlebar/toptitlebar';
import TasteBox from '../../component/tastebox/tastebox';

export default class Taste extends React.Component{
    render(){
        const tasteData=[
            {
                imgUrl:"http://osutuwgm1.bkt.clouddn.com/taste008.png",
                title:"这双鞋自我修养不输大牌品质",
                desc:"90分真皮板鞋男款试穿",
                tasteId:"taste008"
            },
            {
                imgUrl:"http://osutuwgm1.bkt.clouddn.com/taste007.png",
                title:"干燥冬日 给大家来点愉悦的味道",
                desc:"新品 | 云米发布音乐香薰机开售",
                tasteId:"taste007"
            },
            {
                imgUrl:"http://osutuwgm1.bkt.clouddn.com/taste006.png",
                title:"剃须锋利似刀，便携舒适如玉",
                desc:"米家电动剃须刀首发评测",
                tasteId:"taste006"
            },
            {
                imgUrl:"http://osutuwgm1.bkt.clouddn.com/taste005.png",
                title:"一些小米笔记本Pro的购买建议",
                desc:"购买前最适合的指南",
                tasteId:"taste005"
            },
            
            {
                imgUrl:"http://osutuwgm1.bkt.clouddn.com/taste004.png",
                title:"砧板选不好，健康疾病少不了",
                desc:"爱做饭的你一定会爱上它",
                tasteId:"taste004"
            },
            {
                imgUrl:"http://osutuwgm1.bkt.clouddn.com/taste003.png",
                title:"小米美女工程师最爱的零食竟是",
                desc:"三十年烘烤 工艺带来更多美味",
                tasteId:"taste003"
            },
            {
                imgUrl:"http://osutuwgm1.bkt.clouddn.com/taste002.png",
                title:"下午这么忙，还不赶紧睡！",
                desc:"乐范按摩助眠颈枕99元现货开售",
                tasteId:"taste002"
            },
            {
                imgUrl:"http://osutuwgm1.bkt.clouddn.com/taste001.png",
                title:"新品 | iHealth智能血糖仪器众筹中",
                desc:"别因为年轻忽视血糖这件事",
                tasteId:"taste001"
            },
        ]
        return(
            <div>
                <TopTitleBar title="品味" />
                <TasteBox tasteData={tasteData} />

            </div>
        )
    }
}