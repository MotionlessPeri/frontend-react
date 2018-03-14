import React from 'react';
import {Post} from './Post';
import style from './MessageBoard.module.css';
const repliesForTest = {
	subject: [
		{
			subjectID: ""
			topic: "lalalala",
			content: "im lalalalallalalalala",
			reply: [
			{
				timestamp: "1514808000000"
				content: "aaaaaaaa"
			},
			{
				timestamp: "1519905600000"
				content: "bbb"
			},
			{
				timestamp: "1519862400000"
				content: "ccc"
			},
		]
	},
	{
		subjectID: ""
		topic: "fwefewf",
		content: "ffffffffffff",
		reply: [
		{
			timestamp: "1514808000000"
			content: "bvbv"
		},
		{
			timestamp: "1519905600000"
			content: "bvb"
		},
		{
			timestamp: "1519862400000"
			content: "cvc"
		},
	]
	},
	{
		subjectID: ""
		topic: "lalalala",
		content: "im lalalalallalalalala",
		reply: [
		{
			timestamp: "1514808000000"
			content: "aaaaaaaa"
		},
		{
			timestamp: "1519905600000"
			content: "bbb"
		},
		{
			timestamp: "1519862400000"
			content: "ccc"
		},
	]
	},
]
}
class MessageBoard extends React.Component {
	static defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = {
			
		}


	}

	render() {
		let subjectList = [];
		for()
		return (
			<div className={style.container}>
				
			</div>
		);
	}
}