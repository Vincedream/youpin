
import React from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

import "./tabbar.css"

@withRouter
class BottomTab extends React.Component{
	// static propTypes = {
	// 	data: PropTypes.array.isRequired
	// }
	render(){
		const navList = this.props.navList;
        const tabbar={
            position: "fixed",
            bottom: "0px",
            width: "100%",
        }
		const {pathname} = this.props.location
		return (
			<div style={tabbar} >
                <TabBar barTintColor="#f9f9f9" tintColor="#ab927d" unselectedTintColor="unselectedTintColor" >
				{navList.map(v=>(
					<TabBar.Item
						key={v.path}
						title={v.text}
						icon={v.iconUrl}
						selectedIcon={v.SelectIconUrl}
						selected={pathname===v.path}
						onPress={()=>{
							this.props.history.push(v.path)
						}}
					>
					</TabBar.Item>
				))}
			</TabBar>
            </div> 
		)
	}
}

export default BottomTab