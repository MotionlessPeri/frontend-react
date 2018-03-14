import React from 'react';
import style from './TeacherBrief.module.css';
/*
@props String additionalInfo 附加信息 显示在右侧
@props basicInfo 教师的基本信息
@props String width 一个Brief的宽度 使用时要加单位
 */
class TeacherBrief extends React.Component {
	static defaultProps = {
		additionalInfo: "",
		brief: null,
		width: null,
		basicInfo: {
			name: "[教师名]",
			title: "[职称]",
			direction: "[研究方向]",
			brief: "[简介]"
		}
	}
	// TODO 添加url Link
	constructor(props) {
		super(props);
		this.state = {
			
		};
		
	}

	
	render() {
		return (
			<div 
				className={style.container}
				style={{
					width: this.props.width
				}}
			>
				<div className={style.photo}>
					
				</div>
				<div className={style.infoHolder}>
					<div className={style.infoHolderLeft}>
						<p>{this.props.basicInfo.name}</p>
						<p>{this.props.basicInfo.title}</p>
						<p>{this.props.basicInfo.direction}</p>
						<p>{this.props.basicInfo.brief}</p>
					</div>
					<div className={style.infoHolderRight}>
						<p>{this.props.additionalInfo}</p>
					</div>
				</div>
			</div>
		);
	}
}

export {TeacherBrief};