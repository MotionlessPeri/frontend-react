import React from 'react';
import {Navigator} from '../common/Navigator';
import {Menu} from '../common/Menu';
import {Info} from './Info/Info';
import style from './TeacherDetailPage.module.css';
/*
@state String Enum type 右侧页面的类型 有BASIC PROJECT PAPER RECRUIT MESSAGEBOARD五种
 */
class TeacherDetailPage extends React.Component {
	static defaultProps = {

	}

	constructor(props) {
		super(props);

		this.state ={
			type: "BASIC",
		}
	// TODO 路由或props传参
	}

	render() {
		return (
			<div className={style.container}>
				<Navigator
					items={[
						{
							text: "回到主页",
							href: "",
							id: ""
						},
						{
							text: "导师主页",
							href: "",
							id: ""
						},
						{
							text: "登录",
							href: "",
							id: ""
						}
					]}
					defaultChosenIndex={1}
					itemOnClickCallBack={() => {}}
				></Navigator>
				<div className={style.bodyContainer}>
					<div className={style.menuContainer}>
						<Menu
							items={[
								{
									text: "基本信息",
									href: "",
									id: "BASIC"
								},
								{
									text: "参与项目",
									href: "",
									id: "PROJECT"
								},
								{
									text: "所发文章",
									href: "",
									id: "PAPER"
								},
								{
									text: "招生信息",
									href: "",
									id: "RECRUIT"
								},
								{
									text: "留言板",
									href: "",
									id: "MESSAGEBOARD"
								},
							]}
							textOnClickCallBack={(id) => {
								this.setState({type: id});
							}}
							defaultProps={0}
						></Menu>
					</div>
					<div className={style.infoContainer}>
						<Info type={this.state.type} teacherID={"0"}></Info>
					</div>
				</div>
			</div>
		);
	}
}

export {TeacherDetailPage}