import React from 'react';
import {TeacherBrief} from '../../common/TeacherBrief';
import {Pagination} from 'antd';
import style from './MostVisitedTeachers.module.css';
class MostVisitedTeachers extends React.Component {
	static defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = {

		};
		this.getMostVisitedTeachers = this.getMostVisitedTeachers.bind(this);
	}

	getMostVisitedTeachers() {
		//TODO: 后台接口获得数据
	}

	render() {
		return (
			<div className={style.container}>
				<div className={style.briefContainer}>
					<TeacherBrief type="MOSTVISITED"></TeacherBrief>
					<TeacherBrief type="MOSTVISITED"></TeacherBrief>
					<TeacherBrief type="MOSTVISITED"></TeacherBrief>
					<TeacherBrief type="MOSTVISITED"></TeacherBrief>
					
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
export {MostVisitedTeachers};