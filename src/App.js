import React, { Component, } from 'react';
import { Route, BrowserRouter, Navigate, Routes } from 'react-router-dom';

import Auxiliary from './Auxiliary/Auxiliary';
import MainPage from './Containers/MainPage/MainPage';
import Background from './Containers/LoginPage/Background';
import LoginPage from './Containers/LoginPage/LoginPage';
import RegisterPage from './Containers/LoginPage/RegisterPage';
import ProjectPage from './Containers/ProjectPage/ProjectPage';
import axios from 'axios';
import DisplayFullProject from './Components/Multi/DisplayFullProject/DisplayFullProject';
import Navbar from './Components/MainPage/Navbar/Navbar';
import ProfilePage from './Containers/ProfilePage/ProfilePage';
import ReviewProjects from './Containers/ReviewPage/ReviewProjects';

class App extends Component {
	state = {

	}

	userAuthHandler = () => {
		this.setState({ isUserAuth: !this.state.isUserAuth });
		console.log("[App.js] login state changed")
	}

	componentDidMount = () => {
		axios.get('http://localhost:3001/api/v1/auth/me').then(res => {
			this.setUser(res.data);
		}).catch(err => { console.log(err); });
		axios.get('http://localhost:3001/api/v1/projects').then(res => {
			this.setState({
				projects: res.data
			});
		}).catch(err => { console.log(err); });
	}

	setUser = (User) => {
		this.setState({
			user: User,
			isUserAuth: true
		});		
	}

	render() {
		return (
			<Auxiliary>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/start/register" element={<RegisterPage />} />
						<Route path='/start' render={() => <Background />} />	
						{/* <Route path="/start/main-page" element={<Navbar />} /> */}
						<Route path="/start/main-page" element={<Navbar />} />
						<Route path="/start/main-page" element={<ProjectPage />} />
						<Route path="/start/main-page" element={<ProfilePage />} />
						<Route path="/start/full-page" element={<DisplayFullProject />}/>
						<Route path="/home/review/review-projects" element={<ReviewProjects />}></Route>
		  {/* <Route path="/start/full-page" element={<DisplayFullProject />}/> */}
          {/* <Route path={"/"} exact>			
						{this.state.isUserAuth ? <Navigate to="/home/profile/project" /> : <Navigate to="/start/login" />}
					</Route>
					
						<Route path='/start' render={() => <Background />} />
						<Route path='/home' render={() => <MainPage user={this.state.user} projects={this.state.projects} />} />
					</Routes> */}
          			</Routes>
				</BrowserRouter>
			</Auxiliary>
		);
	}
}

export default App;