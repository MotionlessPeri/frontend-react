import React from 'react';
import {TeacherBrief} from './TeacherBrief';
import {Pagination} from 'antd';
import style from './TeacherBriefBoard.module.css';


const mostVisitedTeacherBasicInfoForTest = {
	items: [
		{
			teacherID: "id1",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
		{
			teacherID: "id2",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
		{
			teacherID: "id3",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
		{
			teacherID: "id4",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
		{
			teacherID: "id5",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
		{
			teacherID: "id6",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
		{
			teacherID: "id7",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
		{
			teacherID: "id8",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
		{
			teacherID: "id9",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
		{
			teacherID: "id10",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			visitedCount: (Math.random() * 100).toFixed(0),
			updateDate: "2017-01-01"
		},
	]
}
const recentlyUpdateTeacherBasicInfoForTest = {
	items: [
		{
			teacherID: "id10",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]",
			updateDate: "2017-01-01"
		}
	]
}
/**
 * @props String width TeacherBrief的宽度
 * @Props Number pageSize 一页有多少个TeacherBrief
 * @props Number defaultCurrentPage 默认显示第几页
 * @props String Enum type TeacherBrief的类型 有MOSTVISITED RECENTLYUPDATE PURE三种
 * @state Array teacherBasicInfo 所有老师基本信息的数组
 * @state Number currentPage 当前页号 用于控制Pagination
 */
class TeacherBriefBoard extends React.Component {

	static defaultProps = {
		width: "10.65rem",
		pageSize: 3,
		defaultCurrentPage: 1,
		type: "PURE"
	}

	constructor(props) {
		super(props);

		this.state = {
			teacherBasicInfo: [],
			currentPage: props.defaultCurrentPage,
		};
		
		this.getTeacherBrief = this.getTeacherBrief.bind(this);

		this.getTeacherBrief(props.type)
	}

	/*
	该方法从后台得到学院名的数据 并将第一个设置成被选中的学院 该方法必须在组件实例化之前调用 故不能使用setState
	 */
	getTeacherBrief(type) {
		//TODO: 从后台获得数据
		this.state.teacherBasicInfo = mostVisitedTeacherBasicInfoForTest.items;
		console.log("getTeacherBrief", this.state);
	}

	makeUpAdditionalInfo(info) {
		let s = "";
		switch(this.props.type) {
			case "MOSTVISITED": {
				s = "已被访问" + info.visitedCount + "次";
				break;
			}
			case "RECENTLYUPDATE": {
				s = "最近于" + info.updateDate + "更新";
				break;
			}
			case "PURE": {
				s = "";
				break;
			}
			default: {
				s = "";
				break;
			}
		}
		return s;
	}
	render() {
		let briefList = [];
		let startIndex = (this.state.currentPage - 1) * this.props.pageSize;
		for(let i = startIndex; i < startIndex + this.props.pageSize; i++) {
			let info = this.state.teacherBasicInfo[i];
			if(!info) break;
			let additionalInfo = this.makeUpAdditionalInfo(info);
			briefList.push(<TeacherBrief
					key={info.teacherID}
					basicInfo={info}
					width={this.props.width}
					additionalInfo={additionalInfo}
				></TeacherBrief>
			);
		}
		console.log("render", briefList, this.state);
		return (
			<div className={style.container}>
				<div className={style.briefItemsContainer}>
					{briefList}
				</div>
				<div className={style.pageContainer}>
					<Pagination
						current={this.state.currentPage}
						defaltCurrent={1}
						pageSize={this.props.pageSize}
						total={this.state.teacherBasicInfo.length}
						onChange={((page) => {
							this.setState({currentPage: page});
						}).bind(this)}
					></Pagination>
				</div>
			</div>
		);
	}
}

export {TeacherBriefBoard};