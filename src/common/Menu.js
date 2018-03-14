import React from 'react';
import {Link} from 'react-router';
import TweenOne from 'rc-tween-one';
import miniMenuStyle from './MiniMenu.module.css';
import menuStyle from './Menu.module.css';


/*
在使用该组件时，应在该组件外包裹一个容器，并对容器做定位，以实现该组件的定位
@props Array[{String text, String href}] items 每个菜单中的文字
@props Function textOnClickCallBack 点击文字时的回调函数
@props Number defaultChosenIndex 默认选中的菜单项在menuText中对应的索引号
@state Number chosenIndex 被选中的菜单项的索引
@state Object animationObject 控制动画的参数
 */

class MiniMenu extends React.Component {
	static defaultProps = {
		items: [{text: "lalala1", href:""}, {text: "lalala2", href:""}, {text: "lalala3", href:""}, {text: "lalala4", href:""}],
		textOnClickCallBack: () => {},
		defaultChosenIndex: 0,
		size: "1rem",
	}
	constructor(props) {
		super(props);
		this.state = {
			chosenIndex: props.defaultChosenIndex,
			animationObject: {}
		};

		this.isMarkerInitial = false;// 记录marker是否初始化

		this.textOnClickHanler = this.textOnClickHanler.bind(this);
	}

	
	componentDidMount() {
		if(this.isMarkerInitial === false) {
			let chosenItem = document.getElementsByClassName(miniMenuStyle.item)[this.props.defaultChosenIndex];
			document.getElementsByClassName(miniMenuStyle.marker)[0].style.top = chosenItem.offsetTop + "px";
			chosenItem.style.color = "#fc8122";
			this.isMarkerInitial = true;
			//判断marker是否初始化，如果没初始化，那么将被选中的menu项的offsetTop赋给marker的style.top，让marker与被选中的menu项对齐
		}
	}

	/**
	 * menu中每一项被点击时执行的函数，负责设置被选中的项并设置相关动画
	 * @param  {Event} e 传入的事件对象
	 * @return {void}   
	 */
	textOnClickHanler(e) {
		let i = parseInt(e.target.getAttribute("index"));
		if(i === this.state.chosenIndex) return;
		e.target.style["color"] = "#fc8122";
		document.getElementsByClassName(miniMenuStyle.text)[this.state.chosenIndex].style["color"] = "black";
		let animationObject = {top: e.target.offsetParent.offsetTop}; 
		this.setState({chosenIndex: i, animationObject:animationObject}, this.props.textOnClickCallBack.bind(null, i));
	}

	render() {
		let liList = [];
		for(let i = 0; i < this.props.items.length; i++) {
			let s = this.props.items[i].text;
				
			let li = (
				<li 
					key={s} 
					className={miniMenuStyle.item}
				>
					<div className={miniMenuStyle.text} onClick={this.textOnClickHanler} index={i}>{s}</div>
				</li>
			); 
			liList.push(li);
		};
		return (
			<div className={miniMenuStyle.container}>
				<ul className={miniMenuStyle.list}>
					{liList}
				</ul>
				<div className={miniMenuStyle.line}>
					<TweenOne animation={this.state.animationObject} className={miniMenuStyle.marker}></TweenOne>
				</div>
			</div>
		);
	}
}

/*
在使用该组件时，应在该组件外包裹一个容器，并对容器做定位，以实现该组件的定位
@props Array[{String text, String href}] items 每个菜单中的文字
@props Function textOnClickCallBack 点击文字时的回调函数
@props Number defaultChosenIndex 默认选中的菜单项在menuText中对应的索引号
@state Number chosenIndex 被选中的菜单项的索引
@state Object animationObject 控制动画的参数
 */
class Menu extends React.Component {
	static defaultProps = {
		items: [{text: "lalala1", href:"", id: ""}, {text: "lalala2", href:""}, {text: "lalala3", href:"", id: ""}, {text: "lalala4", href:"", id: ""}],
		textOnClickCallBack: () => {},
		defaultChosenIndex: 0,
		size: "1rem"
		// containerClassName: menuRightStyle.container
	}
	constructor(props) {
		super(props);
		this.state = {
			chosenIndex: props.defaultChosenIndex,
			animationObject: {}
		};

		this.isMarkerInitial = false;// 记录marker是否初始化

		this.textOnClickHanler = this.textOnClickHanler.bind(this);
		this.render = this.render.bind(this);

	}
	componentDidMount() {
		if(this.isMarkerInitial === false) {
			let chosenItem = document.getElementsByClassName(menuStyle.item)[this.props.defaultChosenIndex];
			document.getElementsByClassName(menuStyle.marker)[0].style.top = chosenItem.offsetTop + "px";
			chosenItem.style.color = "#fc8122";
			this.isMarkerInitial = true;
			//判断marker是否初始化，如果没初始化，那么将被选中的menu项的offsetTop赋给marker的style.top，让marker与被选中的menu项对齐
		}
	}
	textOnClickHanler(e) {
		let i = parseInt(e.target.getAttribute("index"));
		let animationObject = {top: e.target.offsetParent.offsetTop}; 
		this.setState({chosenIndex: i, animationObject:animationObject}, this.props.textOnClickCallBack.bind(null, this.props.items[i].id));
	}


	render() {
		let liList = [];
		for(let i = 0; i < this.props.items.length; i++) {
			let s = this.props.items[i].text;
			let u = this.props.items[i].href;
			let li = (
				<li 
					key={s} 
					className={menuStyle.item}
					style={{color: this.state.chosenIndex === i?"#fc8122":"black"}}
				>
					<div className={menuStyle.text} onClick={this.textOnClickHanler} index={i}>{s}</div>
				</li>
			); 
			liList.push(li);
		}	
		liList.push(
			<div style={{height: '0.48rem'}} key="blank"></div>
		);
		return (
			<div className={menuStyle.container}>
				<ul className={menuStyle.list}>
					{liList}
				</ul>
				<div className={menuStyle.shapeContainer}>
					<div className={menuStyle.line}>
						<TweenOne animation={this.state.animationObject} className={menuStyle.marker}></TweenOne>			
					</div>
					<div className={menuStyle.triangle} onClick={() => { window.scrollTo(0, 0)}}>
					</div>
				</div>
			</div>
		);
	}
}


export {Menu, MiniMenu};