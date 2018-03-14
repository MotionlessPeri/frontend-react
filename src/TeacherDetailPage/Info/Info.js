import React from 'react';
import style from "./Info.module.css";
import basicStyle from "./BasicInfo.module.css";
import projectStyle from "./ProjectInfo.module.css";
import paperStyle from './PaperInfo.module.css';
import recruitStyle from "./RecruitInfo.module.css";
const paperInfoForTest = {
	paper: [
	{
		name: "高性能、有理系数9/7双正交小波滤波器组的设计", 
		link: "http://kns.cnki.net/kcms/detail/detail.aspx?QueryID=21&CurRec=1&recid=&FileName=XAJT200508015&DbName=CJFD2005&DbCode=CJFQ&yx=&pr=&URLID="},
	{
		name: "基于二维条码的指纹特征信息隐藏方法研究", 
		link: "http://kns.cnki.net/kcms/detail/detail.aspx?QueryID=63&CurRec=2&recid=&FileName=XAJT200702003&DbName=CJFD2007&DbCode=CJFQ&yx=&pr=&URLID="
	},
	{
		name: "基于对数Gabor的超复数视觉显著性检测算法", 
		link: "http://kns.cnki.net/kcms/detail/detail.aspx?QueryID=63&CurRec=3&recid=&FileName=JSJC201207051&DbName=CJFD2012&DbCode=CJFQ&yx=&pr=&URLID="
	},
	{
		name: "17/11双正交小波的优化设计及其对图像压缩性能的分析", 
		link: "http://kns.cnki.net/kcms/detail/detail.aspx?QueryID=63&CurRec=4&recid=&FileName=DZYX200706029&DbName=CJFD2007&DbCode=CJFQ&yx=&pr=&URLID="
	},
	{
		name: "面向软件工程的Linux操作系统实验教学", 
		link: "http://kns.cnki.net/kcms/detail/detail.aspx?QueryID=63&CurRec=5&recid=&FileName=JYJS201414029&DbName=CJFD2014&DbCode=CJFQ&yx=&pr=&URLID="
	}
	]
}
const basicInfoForTest = {
	name: "aaa",
	title: "教授",
	info: "lalalalalalaaaaaaaaaaaaaaa",
	photo: "http://gr.xjtu.edu.cn/LiferayFCKeditor/UserFiles/Image/软件学院/tianlihua/tlh.jpg"
}
const projectInfoForTest = {
	name: ["lalala", "aaa", "bbb"]
}
const recruitInfoForTest = {
	content: "lalalalalalalalallaalalalalalalal"
}

/*
@props String Enum type OtherINfo的类型 有BASIC PROJECT PAPER RECRUIT 三种类型
@props String teacherID 老师ID
 */
class Info extends React.Component {
	static defaultProps = {
		type: "BASIC",
		teacherID: "0"
	}

	constructor(props) {
		super(props);
		this.state = {
			info: {}
		};

		this.getInfo = this.getInfo.bind(this);

		// this.getInfo(this.props.id, this.props.type);
	}

	componentDidMount() {
		this.getInfo(this.props.id, this.props.type);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.type === this.props.type) return;
		this.getInfo(nextProps.id, nextProps.type);
	}

	getInfo(id, type) {
		//TODO: 从后台获取数据
		let infoForTest;
		switch(type) {
			case "BASIC": {
				infoForTest = basicInfoForTest;
				break;
			}
			case "PROJECT": {
				infoForTest = projectInfoForTest;
				break;
			}
			case "PAPER": {
				infoForTest = paperInfoForTest;
				break;
			}
			case "RECRUIT": {
				infoForTest = recruitInfoForTest;
				break;
			}
			default: {
				infoForTest = {};
				break;
			}
		}
		console.log("getInfo", infoForTest);
		this.setState({info: infoForTest});
		console.log("getInfo", this.state);
	}

	render() {
		console.log("render", this.state);
		let content = <div className={style.container}></div>;
		switch(this.props.type) {
			case "BASIC": {
				content = (
					<div className={style.container}>
						<div className={style.title}>{this.state.info.name + "　" + this.state.info.title}</div>
						<div className={basicStyle.content}>
							<div 
								className={basicStyle.photoHolder}>
								<img 
									src={this.state.info.photo} 
									alt=""
									style={{width: "2.38rem"}}
									/>
							</div>
							<div className={basicStyle.basicInfoHolder}>
								<p style={{
									fontWeight: "bold",
									fontSize: "0.4rem"
								}}>基本信息</p>
								<p style={{
									fontSize: "0.4rem"
								}}>{this.state.info.info}</p>
							</div>
						</div>
					</div>
				);
				break;
			}
			case "PROJECT": {
				content = (
					<div className={style.container}>
						<div className={style.title}>参与项目</div>
						<div className={projectStyle.content}>{this.state.info.name.map((name) => {
							return (
								<li key={name} style={{}}>{name}</li>
							)
						})}</div>
					</div>
				);
				break;
			}
			case "PAPER": {
				let paperList = [];
				console.log("render", this.state, this.state.info);
				for(let p of this.state.info.paper) {
					paperList.push((
						<li key={p.name} className={paperStyle.paperItem}>
							<a href={p.link} className={paperStyle.paperLink}>{p.name}</a>
						</li>
					));
				}
				content = (
					<div className={style.container}>
						<div className={style.title}>所发文章</div>
						<div className={paperStyle.content}>{paperList}</div>
					</div>
				);
				break;
			}
			case "RECRUIT": {
				content = (
					<div className={style.container}>
						<div className={style.title}>招生信息</div>
						<div className={recruitStyle.content}>{this.state.info.content}</div>
					</div>
				);
				break;
			}
			default: {
				break;
			}
		}
		return (content);
	}
}

export {Info};