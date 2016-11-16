import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/index';
import { Link } from 'react-router';

class TravelStories extends Component {
	componentWillMount() {
		this.props.fetchStories();
	}

	renderStories() {
		return this.props.stories.map((story) => {
			return (
				<li className="list-group-item" key={story.id}>
					<Link to={'story/'+story.id}>
						<span className="pull-xs-right">{story.title}</span>
						<strong>{story.author}</strong>
						<b>{story.content}</b>
					</Link>
				</li>
			);
		});
	}
	render() {
		return (
			<div>
				<h3>Travel Stories</h3>
				<ul className="list-group">
					{this.renderStories()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {stories: state.stories.all};
}

export default connect(mapStateToProps, { fetchStories })(TravelStories);