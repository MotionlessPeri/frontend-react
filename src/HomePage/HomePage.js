import React from 'react';
import {Menu} from '../common/Menu';
import {RecentUpdateTeachers} from './RecentUpdateTeachers/RecentUpdateTeachers';
import {HottestDirection} from './HottestDirection/HottestDirection';
import {MostVisitedTeachers} from './MostVisitedTeachers/MostVisitedTeachers';
import {SearchBar} from '../common/SearchBar';
import {Navigator} from '../common/Navigator';
import style from "./HomePage.module.css"
/*
@state String type 页面类型
 */
class HomePage extends React.Component {
	static defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = {
			type: "RecentUpdateTeachers"
		}

	}

	render() {
		let t = {};

		switch(this.state.type) {
			case "RecentUpdateTeachers": {
				t = <RecentUpdateTeachers></RecentUpdateTeachers>;
				break;
			}
			case "HottestDirection": {
				t = <HottestDirection></HottestDirection>;
				break;
			}
			case "MostVisitedTeachers": {
				t = <MostVisitedTeachers></MostVisitedTeachers>;
				break;
			}
			default: {
				t = <RecentUpdateTeachers></RecentUpdateTeachers>;
				break;
			}
		}

		return (
			<div className={style.container}>
				<Navigator
					items={[{text: "学术关系展示", href: "", id: ""}, {text: "学术资源搜索", href: "", id: ""}, {text: "目录检索", href: "", id: ""}]}
					defaultChosenIndex={1}
				></Navigator>
				<SearchBar></SearchBar>
				<div className={style.bodyContainer}>
					<div className={style.menuContainer}>
						<Menu
							items={[{text: "最新更新主页", href:"", id: "RecentUpdateTeachers"}, {text: "最热研究方向", href:"", id: "HottestDirection"}, {text: "访问最多老师", href:"", id: "MostVisitedTeachers"}]}
							textOnClickCallBack={((id) => {
								this.setState({type: id});
							}).bind(this)}
							defaultChosenIndex={0}
						></Menu>
					</div>
					<div className={style.showContainer}>
						{t}
					</div>
				</div>
			</div>
		);
	}
}

export {HomePage};