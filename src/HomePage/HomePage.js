import React from 'react';
import {Menu} from '../common/Menu';
import {HottestDirection} from './HottestDirection/HottestDirection';
import {TeacherBriefBoard} from '../common/TeacherBriefBoard';
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
			type: {text: "最热研究方向", href:"", id: "HOTTESTDIRECTION"}
		}
	
		this.makeUpShowContainer = this.makeUpShowContainer.bind(this);
	}

	makeUpShowContainer() {
		let t ={};
		switch(this.state.type.id) {
			case "RECENTLYUPDATE": {
				t = <TeacherBriefBoard
						width="6.06rem"
						pageSize={4}
						defaultCurrentPage={1}
						type="RECENTLYUPDATE"
					></TeacherBriefBoard>;
				break;
			}
			case "HOTTESTDIRECTION": {
				t = <HottestDirection></HottestDirection>;
				break;
			}
			case "MOSTVISITED": {
				t = <TeacherBriefBoard
						width="6.06rem"
						pageSize={4}
						defaultCurrentPage={1}
						type="MOSTVISITED"
					></TeacherBriefBoard>;
				break;
			}
			default: {
				t = <HottestDirection></HottestDirection>;
				break;
			}
		}
		return t;
	}
	render() {
		

		return (
			<div className={style.container}>
				<Navigator
					items={[
							{
								text: "学术关系展示",
								href: "/ConnectionPage",
								id: ""
							},
							{
								text: "学术资源搜索",
								href: "/HomePage",
								id: ""
							},
							{
								text: "目录索引",
								href: "/SearchByInstitutePage",
								id: ""
							}
						]}
					defaultChosenIndex={1}
				></Navigator>
				<SearchBar></SearchBar>
				<div className={style.bodyContainer}>
					<div className={style.menuContainer}>
						<Menu
							items={[{text: "最新更新主页", href:"", id: "RECENTLYUPDATE"}, {text: "最热研究方向", href:"", id: "HOTTESTDIRECTION"}, {text: "访问最多老师", href:"", id: "MOSTVISITED"}]}
							textOnClickCallBack={((id) => {
								this.setState({type: id});
								console.log("HomePage", "Menu", "textOnClickCallBack", id);
							}).bind(this)}
							defaultChosenIndex={1}
						></Menu>
					</div>
					<div className={style.showContainer}>
						{this.makeUpShowContainer()}
					</div>
				</div>
			</div>
		);
	}
}

export {HomePage};