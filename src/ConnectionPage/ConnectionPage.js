import React from 'react';
import echarts from 'echarts';
import style from './ConnectionPage.module.css';
import {Navigator} from '../common/Navigator';
import {Menu, Dropdown} from 'antd';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
const typeToTitle = {
	"DIRECTION": "研究方向",
	"PROFESSOR": "导师",
	"KEYWORDS": "关键词",
	"COLLEGE": "学院"
}
class ConnectionPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchType: "DIRECTION",
			isSearchBoxShown: true,
			pause: true
		}
		this.search = this.search.bind(this);
		this.menuOnClickHandler = this.menuOnClickHandler.bind(this);

		this.searchInput = {};

	}
	
	search() {
		console.log("search", this.searchInput.value, this.state.searchType);
	}
	
	menuOnClickHandler(item) {
		console.log("menuOnSelectHandler", item);
		this.setState({searchType: item.key});
	}
	render() {
		let menu = (
			<Menu onClick={this.menuOnClickHandler}>
				<Menu.Item key="DIRECTION">研究方向</Menu.Item>
				<Menu.Item key="PROFESSOR">导师</Menu.Item>
				<Menu.Item key="KEYWORDS">关键词</Menu.Item>
				<Menu.Item key="COLLEGE">学院</Menu.Item>
			</Menu>
		);
		let animate = (
			<div className={style.searchBox} key={style.searchBox}>
				<div className={style.dropdownContainer}>
					<Dropdown
						overlay={menu}
						placement={"bottomCenter"}
					><a href="#">{typeToTitle[this.state.searchType]}</a>
					</Dropdown>
				</div>
				<input 
					ref={input => this.searchInput = input}
					type="text" 
					className={style.searchInput}
					placeholder="请输入要查询的信息"
					onKeyPress={(e) => {
						if(e.key !== "Enter") return;
						console.log("onKeyPress", e.key);
						this.search();
					}}
				/>
				<div
					className={style.searchIcon}
					onClick={(e) => {
						this.search();
					}}
				>
				</div>
			</div>
		);
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
					defaultChosenIndex={0}
				></Navigator>
				<div className={style.bodyContainer}>
					<div className={style.searchContainer}>
						<QueueAnim
							type="top"
							delay={450}
						>{this.state.isSearchBoxShown?[animate]:null}</QueueAnim>
						<TweenOne 
							className={style.hideMark}
							animation={[{rotate: 180}, {y: "-1.51rem"}]}
							onClick={(() => {
								this.setState((prevState, props) => {
									return {
										isSearchBoxShown: !prevState.isSearchBoxShown,
										pause: false
									};
								})
							}).bind(this)}
							paused={this.state.pause}
							reverse={this.state.isSearchBoxShown}
						></TweenOne>
					</div>
				</div>
				
				
			</div>
		);
	}
}

export {ConnectionPage};