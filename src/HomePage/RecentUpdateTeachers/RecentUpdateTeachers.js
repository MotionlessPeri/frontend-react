import React from 'react';
import {TeacherBrief} from '../../common/TeacherBrief';
import {Pagination} from 'antd';
import style from './RecentUpdateTeachers.module.css';
class RecentUpdateTeachers extends React.Component {
	static defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = {

		};
		this.getRecentUpdateTeachers = this.getRecentUpdateTeachers.bind(this);
	}

	getRecentUpdateTeachers() {
		//TODO: 后台接口获得数据
	}

	render() {
		return (
			<div className={style.container}>
				<div className={style.briefContainer}>
					<TeacherBrief type="RECENTLYUPDATE" id={1}></TeacherBrief>
					<TeacherBrief type="RECENTLYUPDATE" id={1}></TeacherBrief>
					<TeacherBrief type="RECENTLYUPDATE" id={1}></TeacherBrief>
					<TeacherBrief type="RECENTLYUPDATE" id={1}></TeacherBrief>
				</div>
				<div className={style.pageContainer}>
					<Pagination
						defaltCurrent={1}
						pageSize={4}
						total={50}
					></Pagination>
				</div>
			</div>
		);
	}
}
export {RecentUpdateTeachers};