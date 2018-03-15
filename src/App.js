import React from 'react';
import {Router, Link, Route, browserHistory, Redirect} from 'react-router';
import {ConnectionPage} from './ConnectionPage/ConnectionPage';
import {HomePage} from './HomePage/HomePage';
import {SearchByInstitutePage} from './SearchByInstitutePage/SearchByInstitutePage';
import {TeacherDetailPage} from './TeacherDetailPage/TeacherDetailPage';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Redirect from="/" to="/HomePage"></Redirect>
				<Route path="/HomePage" component={HomePage}></Route>
				<Route path="/ConnectionPage" component={ConnectionPage}></Route>
				<Route path="/SearchByInstitutePage" component={SearchByInstitutePage}></Route>
				<Route path="/TeacherDetailPage/:teacherID" component={TeacherDetailPage
				}></Route>
			</Router>
		);
	}
}

export {App};
