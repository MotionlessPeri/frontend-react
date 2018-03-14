import React from 'react';
import style from './TeacherBrief.module.css';
/*
@props String Enum type 规定TeacherBrief的类型，有MOSTVISITED RECENTLYUPDATE BYINSTITUTE三种
@props String id 教师id
@state Object basicInfo 教师的基本信息
@state String additionalQuery 附加的查询结果，根绝type的不同可以是访问次数或者最近一次更新时间
 */
class TeacherBrief extends React.Component {
	static defaultProps = {
		type: "MOSTVISITED",
		id: "0"
	}
	// TODO 添加url Link
	constructor(props) {
		super(props);
		this.state = {
			basicInfo: {
				name: "[教师名]",
				title: "[职称]",
				direction: "[研究方向]",
				brief: "[简介]"
			},
			additionalQuery: "0"
		};
		
		this.getBasicInfo = this.getBasicInfo.bind(this);

		// this.getBasicInfo(this.props.id);
	}

	getBasicInfo(id) {
		//TODO:从后台得到数据
		switch(this.props.type) {
			case "MOSTVISITED": {
				this.setState({additionalQuery: "被访问次"});
				break;
			}
			case "RECENTLYUPDATE": {
				this.setState({additionalQuery: "yyyy-mm-dd修改"});
				break;
			}
			case "BYINSTITUTE": {
				this.setState({additionalQuery: ""});
				break;
			}
			default: {
				this.setState({additionalQuery: ""});
				break;
			}
		}
	}

	
	render() {
		return (
			<div className={style.container}>
				<div className={style.photo}>
					
				</div>
				<div className={style.infoHolder}>
					<div className={style.infoHolderLeft}>
						<p>{this.state.basicInfo.name}</p>
						<p>{this.state.basicInfo.title}</p>
						<p>{this.state.basicInfo.direction}</p>
						<p>{this.state.basicInfo.brief}</p>
					</div>
					<div className={style.infoHolderRight}>
						<p>{this.state.additionalQuery}</p>
					</div>
				</div>
			</div>
		);
	}
}

export {TeacherBrief};