import React from 'react';
import style from './Post.module.css';
import {message} from 'antd';
/*
单个帖子的组件，包括标题和回复
@props String teacherID 老师的ID
@props Object subject 从服务器请求到的贴子主题和文本
@props Function submitSuccessCallBack 提交成功的回调函数 用于在父组件请求所有回复，再填入Post中
@state Boolean createNewSubject 发帖按钮是否被点击
 */
const subjectForTest = {
		topic: "lalalala",
		content: "im lalalalallalalalala",
		reply: ["aaaaaaaa", "bbb", "ccc"]
		
	}
class Post extends React.Component {
	static defaultProps = {
		// subject: {topic: "", content: "", reply: []}
		subject: subjectForTest,
		teacherID: "0",
		submitSuccessCallBack: () => {}
	}

	constructor(props) {
		super(props);
		this.state = {
			createNewReply: false,
			viewReply: false,
			cleanReply: false
		};

		this.submit = this.submit.bind(this);
		this.submitSuccessCallBack = this.submitSuccessCallBack.bind(this);
		this.submitFailCallBack = this.submitFailCallBack.bind(this);

		this.replyHeight = {};
		this.replyArea = {};
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate", this.replyArea);
		if(this.state.cleanReply) {
			this.replyArea.value = "";
			this.setState({cleanReply: false});
		}
	}

	submit(value, subjectID, teacherID, success, fail) {

	}

	submitSuccessCallBack() {
		// TODO: 重新请求回复
		this.props.submitSuccessCallBack();
		message.success("提交成功", 2, () => {
			
			this.setState({viewReply: true, createNewReply: false, cleanReply: true});
		});
		
	}
	submitFailCallBack() {
		message.error("提交失败，请重试", 2, () => {});
	}

	render() {
		let onChangeFunc = (e) => {
			console.log("onChangeFunc", e.target.scrollHeight, this.replyHeight.offsetHeight);
			this.replyHeight.innerHTML = e.target.value;
			e.target.style.height = this.replyHeight.offsetHeight + "px";
			// this.submitReplyButton.style.top = this.submitReplyButton.style.top + e.target.style.height + "px";
		};


		let replyList = [];
		for(let r of this.props.subject.reply) {
			let reply = (
				<li className={style.replyItem} key={r}>
					<p 
						type="text" 
						className={style.reply}
						readOnly="readonly"
					>{r}</p>
				</li>
			);
			replyList.push(reply);
		}
		return (
			<div className={style.container}>
				<div className={style.subject}>
					<input 
						type="text" 
						className={style.topic} 
						readOnly="readonly" 
						value={this.props.subject.topic}
						onClick={() => { 
							this.setState((prevState, props) => {
								return {viewReply: !prevState.viewReply};
							})
						}}
					/>

					<div
						style={{
							flexDirection: "column", 
							justifyContent: "flex-start", 
							alignItems:"stretch", 
							display: this.state.viewReply?"flex":"none"
						}}
					>
						<p 
							className={style.content} 
							readOnly="readonly" 
						>{this.props.subject.content}</p>
						<p 
							className={style.replyButton}
							onClick={() => {
								this.setState((prevState, props) => {
									return {createNewReply: !prevState.createNewReply};
								})
							}}
						>{this.state.createNewReply?"隐藏":"回复"}</p>
					</div>
				</div>
				<div 
					className={style.replyContainer}
					style={{display: this.state.createNewReply?"flex":"none"}}
				>
					<li 
						className={style.replyItem}
					>
						<p
							ref={p => this.replyHeight = p}
							className={style.replyHeight}
						>
						</p>
						<textarea
							ref={area => this.replyArea = area}
							className={style.reply}
							onChange={onChangeFunc.bind(this)}
							placeholder="请输入"
						/>
						<p 
							className={style.submitReplyButton}
							onClick={this.submitSuccessCallBack}
						>提交</p>
					</li>
					
				</div>
				<div style={{
					display: this.state.viewReply?"flex":"none",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "flex-end"
				}}> 
					{replyList}
				</div>
			</div>

		);
	}
}

export {Post}