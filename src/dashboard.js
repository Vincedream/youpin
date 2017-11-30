import React from 'react';
import {Route} from 'react-router-dom'

import BottomTab from './component/tabbar/tabbar';
import Home from './container/home/home';
import Category from './container/category/category';
import Taste from './container/taste/taste';
import Shop from './container/shop/shop';
import Me from './container/me/me';

export default class DashBoard extends React.Component{
    render(){
        const navList = [
			{
				path:'/home',
				text:'首页',
				iconUrl:'http://osutuwgm1.bkt.clouddn.com/tabbar1.png',
				SelectIconUrl:'http://osutuwgm1.bkt.clouddn.com/stabbar1.png',
				title:'首页',
			},
			{
				path:'/category',
				text:'分类',
				iconUrl:'http://osutuwgm1.bkt.clouddn.com/tabbar2.png',
				SelectIconUrl:'http://osutuwgm1.bkt.clouddn.com/stabbar2.png',
				title:'分类',
            },
            {
				path:'/taste',
				text:'品味',
				iconUrl:'http://osutuwgm1.bkt.clouddn.com/tabbar3.png',
				SelectIconUrl:'http://osutuwgm1.bkt.clouddn.com/stabbar4.png',
				title:'品味',
            },
            {
				path:'/shop',
				text:'购物车',
				iconUrl:'http://osutuwgm1.bkt.clouddn.com/tabbar444.png',
				SelectIconUrl:'http://osutuwgm1.bkt.clouddn.com/stabbar333.png',
				title:'购物车',
            },
            {
				path:'/me',
				text:'个人',
				iconUrl:'http://osutuwgm1.bkt.clouddn.com/tabbar5.png',
				SelectIconUrl:'http://osutuwgm1.bkt.clouddn.com/stabbar5.png',
				title:'个人',
			},
        ];

        return(
            <div>
                <div>
                    <Route exact path="/home" component={Home} ></Route>
                    <Route path="/category" component={Category} ></Route>
                    <Route path="/taste" component={Taste} ></Route>
                    <Route path="/shop" component={Shop} ></Route>
                    <Route path="/me" component={Me} ></Route>
                </div>
                <BottomTab navList={navList} ></BottomTab>
            </div>
        )
    }
}