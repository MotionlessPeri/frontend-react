import React from 'react';
import {
	Navigator
} from './Navigator';
import {
	Menu
} from './Menu';
import {
	Comment
} from './Comment';
import commIndexStyle from './CommentIndex.css';

class CommentIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			naviItems: [{
				text: "回到主页",
				href: "",
				id: ""
			}, {
				text: "导师主页",
				href: "",
				id: ""
			}, {
				text: "登录",
				href: "",
				id: ""
			}],
			menuItems: [{
				text: "基本信息",
				href: ""
			}, {
				text: "参与项目",
				href: ""
			}, {
				text: "所发文章",
				href: ""
			}, {
				text: "招生信息",
				href: ""
			}, {
				text: "留言板",
				href: ""
			}],
		}
	}
	render() {
		return (
			<div>
				<div>
					<Navigator items={this.state.naviItems}/>
				</div>
				<div className={commIndexStyle.main}>
				{// <div className={commIndexStyle.blank}></div>
				 }
					<div className={commIndexStyle.menu}><Menu items={this.state.menuItems}/></div>
					<div className={commIndexStyle.content}><Comment /></div>
				</div>
			</div>
		);
	}
}
export {
	CommentIndex
};