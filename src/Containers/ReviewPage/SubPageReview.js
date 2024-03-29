import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReviewProjects from './ReviewProjects'
import ReviewTheProject from './ReviewTheProject'



class SubPageReview extends Component {
    state = {

    }


    render() {

        console.log(this.state.projects);
        return (

            <div>
                <Routes>
                    <Route path="/home/review/review-projects" render={(props) => <ReviewProjects projects={this.props.projects} />} />
                    <Route path="/home/review/:id" render={(props) => <ReviewTheProject user={this.props.user}/>} />
                </Routes>

            </div>
        );

    }


}

export default SubPageReview;