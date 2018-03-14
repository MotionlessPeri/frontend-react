import React from 'react';
import {MiniMenu} from './Menu';
import style from './SearchBar.module.css';
/*
@state Number searchType 搜索类型
 */
class SearchBar extends React.Component {

	static defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = {
			searchType: 0,//0:搜索导师，1:全文搜索，2:搜索研究方向

		}
		
		this.search = this.search.bind(this);

		this.searchInput = {};// input搜索框
	}
	
	search(value) {
		console.log("search", this.searchInput.value, this.state.searchType);
		//TODO: 调用搜索接口
	}

	render() {
		return (
			<div className={style.container}>
				<div className={style.menuContainer}>
					<MiniMenu
						items={[{text: "搜索导师", href: ""}, {text: "全文搜索", href: ""}, {text: "搜索研究方向", href: ""}]}
						textOnClickCallBack={((index) => {
							console.log("textOnClickCallBack", index);
							this.setState({searchType: index});
						}).bind(this)}
						defaultChosenIndex={this.state.searchType}
					>
					</MiniMenu>
				</div>
				<div className={style.searchContainer}>
					<input 
						ref={input => {this.searchInput = input}}
						className={style.searchInput} 
						type="text" 
						name="" 
						id="" 
						placeholder="请输入"
						onKeyPress={(e) => {
							if(e.key !== "Enter") return;
							console.log("onKeyPress", e.key);
							this.search();
						}}

					/>
					<div
						className={style.searchIcon}
						onClick={() => {
							this.search();
						}}
					>
					</div>
				</div>
				<div className={style.logo}>
				LOGO
				</div>
			</div>
		);
	}
}
export {SearchBar}