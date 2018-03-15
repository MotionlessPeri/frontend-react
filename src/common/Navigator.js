import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import style from './Navigator.module.css';
/*
@props Array items [{String text, String href, String id}] items 导航栏中每一项的值。text为导航栏中显示的内容；href为链接，现阶段刻意留空；id为导航栏该项所对应的组件的唯一标识符，一般用于回调
@props Number defaultChosenIndex 默认选中的项
@props Function itemOnClickCallBack 导航栏中的项被选中所调用的回调
 */
class Navigator extends React.Component {
	static defaultProps = {
		items: [{text: "lalala1", href: "", id: ""}, {text: "lalala2", href: "", id: ""}, {text: "lalala3", href: "", id: ""}],
		defaultChosenIndex: 0,
		itemOnClickCallBack: () => {}
	}

	constructor(props) {
		super(props);
		this.state = {
			chosenIndex: props.defaultChosenIndex
		}
		this.itemOnClickHandler = this.itemOnClickHandler.bind(this);
	}

	itemOnClickHandler(e) {
		let i = parseInt(e.target.getAttribute("index"));
		this.setState({chosenIndex: i}, this.props.itemOnClickCallBack.bind(null, this.props.items[i]));
	}

	render() {
		let itemList = [];
		for(let i = 0; i < this.props.items.length; i++) {
			let s = this.props.items[i].text;
			let u = this.props.items[i].href;
			let item = (
				<Link 
					to={u}
					className={style.item}
					index={i}
					key={i}
					activeClassName={style.itemActive}
				>{s}</Link>
			);
			itemList.push(item);
		}
		return (
			<div className={style.container}>
				{itemList}
			</div>
		);
	}
}

export {Navigator};