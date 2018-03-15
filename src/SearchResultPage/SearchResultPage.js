import React from 'react';
import {SearchBar} from '../common/SearchBar';
import {Navigator} from '../common/Navigator';
import {TeacherBrief} from '../common/TeacherBrief';
import {Pagination} from 'antd';
import style from './SearchResultPage.module.css';

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

class SearchResultPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchType: 0,
			value: "a",
			teacherBasicInfo: [],
			currentPage: 1
		}
		
		this.getSearchResult = this.getSearchResult.bind(this);

		this.pageSize = 3;
	
		// TODO: 从路由接收SearchBar传来的参数
		
		this.getSearchResult(this.state.searchType, this.state.value)
		
		

	}
	
	/*
	该方法从后台得到学院名的数据 并将第一个设置成被选中的学院 该方法必须在组件实例化之前调用 故不能使用setState
	 */
	getSearchResult(searchType, value) {
		//TODO: 从后台得到数据 方法必须同步
		let a = teacherBasicInfoForTest;
		this.state.teacherBasicInfo = a.items;
	}

	render() {
		let briefList = [];
		let startIndex = (this.state.currentPage - 1) * this.pageSize;
		for(let i = startIndex; i < startIndex + this.pageSize; i++) {
			let info = this.state.teacherBasicInfo[i];
			if(!info) break;
			briefList.push((
				<TeacherBrief
					key={info.teacherID}
					width="10.65rem"
					basicInfo={info}
				></TeacherBrief>
			));
		}
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
					defaultChosenIndex={1}
					itemOnClickCallBack={() => {}}
				>
				</Navigator>
				<SearchBar
					defaultInputValue={this.state.value}
					defaultType={this.state.searchType}
				></SearchBar>
				<div className={style.bodyContainer}>
					<div className={style.briefContainer}>
						{briefList}
					</div>
					<div className={style.pageContainer}>
						<Pagination
							current={this.state.currentPage}
							defaltCurrent={1}
							pageSize={this.pageSize}
							total={this.state.teacherBasicInfo.length}
							onChange={((page) => {
								this.setState({currentPage: page});
							}).bind(this)}
						></Pagination>
					</div>
				</div>
			</div>
		);
	}
}

export {SearchResultPage};