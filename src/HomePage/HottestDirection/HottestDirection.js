import React from 'react';
import style from './HottestDirection.module.css';
import echarts from 'echarts';

let dataForTest = {"nodes":[{"name":"秋穗正","degree":3},{"name":"苏光辉","degree":2},{"name":"田文喜","degree":3},{"name":"卢秉恒","degree":1},{"name":"李涤尘","degree":1},{"name":"徐通模","degree":2},{"name":"惠世恩","degree":1},{"name":"何雅玲","degree":2},{"name":"陶文铨","degree":2},{"name":"曾敏","degree":1},{"name":"王秋旺","degree":2},{"name":"严俊杰","degree":3},{"name":"刘继平","degree":2},{"name":"乔冠军","degree":1},{"name":"金志浩","degree":3},{"name":"丰镇平","degree":2},{"name":"李军","degree":2},{"name":"徐可为","degree":3},{"name":"憨勇","degree":1},{"name":"吴翊","degree":1},{"name":"荣命哲","degree":2},{"name":"杨旭","degree":1},{"name":"王兆安","degree":5},{"name":"高建民","degree":2},{"name":"高智勇","degree":1},{"name":"王秀丽","degree":1},{"name":"王锡凡","degree":2},{"name":"刘进军","degree":1},{"name":"王建华","degree":2},{"name":"耿英三","degree":2},{"name":"张西民","degree":1},{"name":"郭烈锦","degree":2},{"name":"蒋庄德","degree":2},{"name":"赵玉龙","degree":1},{"name":"蒋德明","degree":1},{"name":"黄佐华","degree":1},{"name":"梅雪松","degree":1},{"name":"陶涛","degree":1},{"name":"宋土生","degree":1},{"name":"黄辰","degree":1},{"name":"徐光华","degree":1},{"name":"梁霖","degree":1},{"name":"王跃","degree":1},{"name":"裴云庆","degree":1},{"name":"李彦明","degree":1},{"name":"汲胜昌","degree":1},{"name":"陈富民","degree":1},{"name":"李云","degree":1},{"name":"顾兆林","degree":1},{"name":"席光","degree":3},{"name":"王尚锦","degree":1},{"name":"宋国兵","degree":1},{"name":"索南加乐","degree":2},{"name":"丁秉钧","degree":1},{"name":"杨志懋","degree":1},{"name":"孙中国","degree":1},{"name":"马胜利","degree":1},{"name":"卓放","degree":2},{"name":"李国君","degree":1},{"name":"冯变玲","degree":1},{"name":"杨世民","degree":1},{"name":"易皓","degree":1},{"name":"高积强","degree":1},{"name":"王小华","degree":1},{"name":"张荻","degree":1},{"name":"谢永慧","degree":1},{"name":"姚学玲","degree":1},{"name":"陈景亮","degree":1},{"name":"吴锴","degree":1},{"name":"成永红","degree":1},{"name":"束鹏程","degree":1},{"name":"邢子文","degree":1},{"name":"李长久","degree":1},{"name":"杨冠军","degree":1},{"name":"王海容","degree":1},{"name":"张杭","degree":1},{"name":"张爱民","degree":1},{"name":"王志恒","degree":1},{"name":"孙林岩","degree":1},{"name":"李刚","degree":1},{"name":"付涛","degree":1},{"name":"焦在滨","degree":1},{"name":"余小玲","degree":1},{"name":"冯全科","degree":1},{"name":"张建勋","degree":1},{"name":"张贵锋","degree":1},{"name":"张希农","degree":1},{"name":"谢石林","degree":1},{"name":"杨广德","degree":1},{"name":"贺浪冲","degree":1},{"name":"张亚培","degree":2},{"name":"王红洁","degree":1},{"name":"郑崇勋","degree":1},{"name":"闫相国","degree":1},{"name":"刘志刚","degree":1},{"name":"赵小明","degree":1},{"name":"郑元锁","degree":1},{"name":"高国新","degree":1},{"name":"杨卫卫","degree":1},{"name":"周晶","degree":1},{"name":"李天","degree":1},{"name":"周光辉","degree":1},{"name":"江平宇","degree":1},{"name":"刘刚","degree":1},{"name":"孙军","degree":1},{"name":"宋政湘","degree":1},{"name":"谭厚章","degree":1},{"name":"白博峰","degree":1},{"name":"陈国慧","degree":2},{"name":"要义勇","degree":1},{"name":"赵丽萍","degree":1},{"name":"别朝红","degree":1},{"name":"张国钢","degree":1},{"name":"宋立明","degree":1},{"name":"王小鹏","degree":1},{"name":"陈天宁","degree":1},{"name":"王云刚","degree":1},{"name":"赵钦新","degree":1},{"name":"毛义军","degree":1},{"name":"祁大同","degree":1},{"name":"董光能","degree":1},{"name":"谢友柏","degree":1},{"name":"戴栋","degree":1},{"name":"马西奎","degree":1},{"name":"张禾","degree":1},{"name":"曹建安","degree":1},{"name":"种道彤","degree":1}],"edges":[{"source":"秋穗正","target":"苏光辉","count":"59"},{"source":"田文喜","target":"苏光辉","count":"52"},{"source":"田文喜","target":"秋穗正","count":"51"},{"source":"卢秉恒","target":"李涤尘","count":"42"},{"source":"徐通模","target":"惠世恩","count":"35"},{"source":"何雅玲","target":"陶文铨","count":"35"},{"source":"曾敏","target":"王秋旺","count":"32"},{"source":"严俊杰","target":"刘继平","count":"32"},{"source":"乔冠军","target":"金志浩","count":"32"},{"source":"丰镇平","target":"李军","count":"31"},{"source":"徐可为","target":"憨勇","count":"29"},{"source":"吴翊","target":"荣命哲","count":"29"},{"source":"杨旭","target":"王兆安","count":"28"},{"source":"高建民","target":"高智勇","count":"28"},{"source":"王秀丽","target":"王锡凡","count":"28"},{"source":"刘进军","target":"王兆安","count":"27"},{"source":"王建华","target":"耿英三","count":"26"},{"source":"张西民","target":"郭烈锦","count":"25"},{"source":"蒋庄德","target":"赵玉龙","count":"25"},{"source":"蒋德明","target":"黄佐华","count":"24"},{"source":"梅雪松","target":"陶涛","count":"24"},{"source":"宋土生","target":"黄辰","count":"23"},{"source":"徐光华","target":"梁霖","count":"23"},{"source":"王兆安","target":"王跃","count":"23"},{"source":"王兆安","target":"裴云庆","count":"22"},{"source":"李彦明","target":"汲胜昌","count":"22"},{"source":"陈富民","target":"高建民","count":"22"},{"source":"李云","target":"顾兆林","count":"22"},{"source":"席光","target":"王尚锦","count":"22"},{"source":"宋国兵","target":"索南加乐","count":"21"},{"source":"丁秉钧","target":"杨志懋","count":"21"},{"source":"孙中国","target":"席光","count":"21"},{"source":"徐可为","target":"马胜利","count":"21"},{"source":"卓放","target":"王兆安","count":"21"},{"source":"丰镇平","target":"李国君","count":"20"},{"source":"冯变玲","target":"杨世民","count":"20"},{"source":"卓放","target":"易皓","count":"20"},{"source":"金志浩","target":"高积强","count":"20"},{"source":"王小华","target":"荣命哲","count":"20"},{"source":"张荻","target":"谢永慧","count":"20"},{"source":"姚学玲","target":"陈景亮","count":"20"},{"source":"吴锴","target":"成永红","count":"19"},{"source":"束鹏程","target":"邢子文","count":"19"},{"source":"李长久","target":"杨冠军","count":"19"},{"source":"王海容","target":"蒋庄德","count":"19"},{"source":"张杭","target":"张爱民","count":"19"},{"source":"席光","target":"王志恒","count":"19"},{"source":"孙林岩","target":"李刚","count":"19"},{"source":"付涛","target":"徐可为","count":"19"},{"source":"焦在滨","target":"索南加乐","count":"19"},{"source":"余小玲","target":"冯全科","count":"19"},{"source":"张建勋","target":"张贵锋","count":"19"},{"source":"张希农","target":"谢石林","count":"19"},{"source":"杨广德","target":"贺浪冲","count":"19"},{"source":"张亚培","target":"田文喜","count":"19"},{"source":"王红洁","target":"金志浩","count":"19"},{"source":"郑崇勋","target":"闫相国","count":"18"},{"source":"刘志刚","target":"赵小明","count":"18"},{"source":"郑元锁","target":"高国新","count":"18"},{"source":"何雅玲","target":"杨卫卫","count":"18"},{"source":"周晶","target":"李天","count":"18"},{"source":"周光辉","target":"江平宇","count":"18"},{"source":"刘刚","target":"孙军","count":"18"},{"source":"宋政湘","target":"王建华","count":"18"},{"source":"徐通模","target":"谭厚章","count":"18"},{"source":"白博峰","target":"郭烈锦","count":"18"},{"source":"刘继平","target":"陈国慧","count":"18"},{"source":"要义勇","target":"赵丽萍","count":"18"},{"source":"别朝红","target":"王锡凡","count":"18"},{"source":"张国钢","target":"耿英三","count":"18"},{"source":"宋立明","target":"李军","count":"18"},{"source":"王小鹏","target":"陈天宁","count":"18"},{"source":"王云刚","target":"赵钦新","count":"18"},{"source":"毛义军","target":"祁大同","count":"18"},{"source":"董光能","target":"谢友柏","count":"18"},{"source":"戴栋","target":"马西奎","count":"18"},{"source":"严俊杰","target":"陈国慧","count":"17"},{"source":"张亚培","target":"秋穗正","count":"17"},{"source":"张禾","target":"曹建安","count":"17"},{"source":"王秋旺","target":"陶文铨","count":"17"},{"source":"严俊杰","target":"种道彤","count":"17"}]}


let graphOption = {
	title: {
		text: "lalalalallalal"
	},
	animationDurationUpdate: 1500,
	animationEasingUpdate: 'quinticInOut',
	//TODO: animation settings
	series: [
		{
			type: "graph",
			data: [], //nodes
			edges: [],
			roam: true
		}
	]
};

let chartOption = {

};

/*
@state graphData 绘制网络图需要的数据
 */
class HottestDirection extends React.Component {
	static defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = {
			graphData: {}
		}
		this.initialGraph = this.initialGraph.bind(this);
		this.updateGraph = this.updateGraph.bind(this);

		this.graphContainer = {};
		this.graphInstance = {};
		this.chartContainer = {};
		this.chartInstance = {};

	}
	
	shouldComponentUpdate() {
		//TODO: 判断graphOption和chartOption是否改变
		this.updateGraph();
		return true;
	}

	componentDidMount() {
		this.initialGraph();
	}

	initialGraph() {
		//TODO:从后台获得数据
		//TODO:改成研究方向的数据处理格式
		this.setState({graphData: dataForTest}, () => {
			console.log(this.graphContainer)
			this.graphInstance = echarts.init(this.graphContainer);
			console.log(this.graphInstance)
			graphOption.series[0].data = this.state.graphData.nodes.map((d) => {
				return {
					label: {
						emphasis: {
							position: 'right',
							show: true,
							fontSize: 15
						}
					},
					name: d.name,
					x: Math.random() * 1000,
					y: Math.random() * 1000,
					symbolSize: d.degree,
					itemStyle: {
						normal: {
							color: "#316b8b"
						}
					},
					focusNodeAdjacency: true
				};
			});
			graphOption.series[0].edges = this.state.graphData.edges.map((d) => {
				return {
					source: d.source,
					target: d.target,
					value: d.count,
					lineStyle: {
						normal: {
							opacity: 0.8,
							width: 0.5,
							curveness: Math.random() * 0.75
						}
					},
					label: {
						show: false
					}
				}
			});
			console.log(graphOption)
			this.graphInstance.setOption(graphOption, true);
		})
		
	}

	updateGraph() {

	}
	render() {
		return (
			<div className={style.container}>
				<div className={style.graph} id="graphContainer" ref={div => this.graphContainer = div}>
					
				</div>
				<div className={style.chart} ref={div => this.chartContainer = div}>
					
				</div>
				<div className={style.info}>
					
				</div>
			</div>
		);
	}
}

export {HottestDirection};