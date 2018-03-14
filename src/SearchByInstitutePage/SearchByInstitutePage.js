import React from 'react';
import style from './SearchByInstitutePage.module.css';
import {TeacherBrief} from '../common/TeacherBrief';
import {Menu} from '../common/Menu';
import {Navigator} from '../common/Navigator';
import {Pagination} from 'antd';

const instituteForTest = {
	items:[{name: "xx学院", instituteID: "x"}, {name: "yy学院", instituteID: "y"}, {name: "zz学院", instituteID: "z"}]
};
const teacherBasicInfoForTest = {
	items: [
		{
			teacherID: "id1",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
		{
			teacherID: "id2",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
		{
			teacherID: "id3",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
		{
			teacherID: "id4",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
		{
			teacherID: "id5",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
		{
			teacherID: "id6",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
		{
			teacherID: "id7",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
		{
			teacherID: "id8",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
		{
			teacherID: "id9",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
		{
			teacherID: "id10",
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		},
	]
}
class SearchByInstitutePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			instituteName: [],
			teacherBasicInfo: [],
			chosenInstitute: {name: "", instituteID: ""},
			currentPage: 1,
		};
		
		this.getTeacherBasicInfoByInstitute = this.getTeacherBasicInfoByInstitute.bind(this);
		this.getInstitute = this.getInstitute.bind(this);

		this.initial = true;
		this.pageSize = 6;
		//TODO: 从后台获得institute和teacherBasicInfo
		this.getInstitute();
		this.getTeacherBasicInfoByInstitute(this.state.chosenInstitute);
	}

	
	/*
	该方法从后台得到学院名的数据 并将第一个设置成被选中的学院 该方法必须在组件实例化之前调用 故不能使用setState
	 */
	getInstitute() {
		//TODO: 从后台取得数据
		//
		let a = instituteForTest;
		this.state.instituteName = a.items;
		this.state.chosenInstitute = {text: this.state.instituteName[0].name};
	}

	/*
	该方法从后台得到指定学院的老师基本信息
	@param String instituteID 学院ID
	@param Boolean isFirstTime 是不是第一次调用 在组件实例化之前必须调用一次该方法 此时不能使用setState 在之后调用该方法必须使用setState 故用该参数控制
	 */
	getTeacherBasicInfoByInstitute(institute) {
		//TODO: 从后台获得数据
		let a = teacherBasicInfoForTest;
		console.log("1", institute);
		if(!this.initial) { //在组件实例化之前必须调用一次该方法 此时不能使用setState 在之后调用该方法必须使用setState 故用该参数控制
			console.log("2", institute);
			this.setState({teascherBasicInfo: a.items, chosenInstitute: institute});
			console.log("3", institute);
		}
		else {
			console.log("4", institute);
			this.state.teacherBasicInfo = a.items;
			this.initial = false;
		}
	}

	render() {
		console.log("SearchByInstitutePage", "render", this.state)
		let menuItems = this.state.instituteName.map((n) => {
			return {
				text: n.name,
				href: "",
				id: n.instituteID
			}
		});

		let briefItems = [];
		let startIndex = (this.state.currentPage - 1) * this.pageSize;
		for(let i = startIndex; i < startIndex + 6; i++) {
			let info = this.state.teacherBasicInfo[i];
			if(!info) break;
			briefItems.push(<TeacherBrief
					key={info.teacherID}
					basicInfo={info}
					width="4rem"
				></TeacherBrief>
			);
		}

		console.log("SearchByInstitutePage", "render", menuItems, briefItems)
		return (
			<div className={style.container}>
				<Navigator
					items={[
							{
								text: "学术关系展示",
								href: "",
								id: ""
							},
							{
								text: "学术资源搜索",
								href: "",
								id: ""
							},
							{
								text: "目录索引",
								href: "",
								id: ""
							}
						]}
					defaultChosenIndex={2}
					itemOnClickCallBack={() => {}}
				></Navigator>
				<div className={style.bodyContainer}>
					<div className={style.menuContainer}>
						<Menu
							items={menuItems}
							textOnClickCallBack={this.getTeacherBasicInfoByInstitute}
							defaultChosenIndex={0}
						></Menu>
					</div>
					<div className={style.bodyRightContainer}>
						<div className={style.title}>{this.state.chosenInstitute.text}</div>
						<div className={style.briefItemsContainer}>
							{briefItems}
						</div>
						<div className={style.pageContainer}>
							<Pagination
								current={this.state.currentPage}
								defaltCurrent={1}
								pageSize={6}
								total={this.state.teacherBasicInfo.length}
								onChange={((page) => {
									this.setState({currentPage: page});
								}).bind(this)}
							></Pagination>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export {SearchByInstitutePage};