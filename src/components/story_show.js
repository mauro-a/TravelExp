import React, { Component } from 'react';
import { getStoryById } from '../actions/index';
import { connect } from 'react-redux';

class StoryShow extends Component {
	componentWillMount() {
		this.props.getStoryById(this.props.params.id);
	}

	render() {
		const { story } = this.props;
		if (!story) {
			return <div><i>Loading ...</i></div>;
		}
		return (
			<div>
				<h3>{ story.title }</h3>
				<p>{ story.content }</p>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {story: state.stories.story};
}

export default connect(mapStateToProps, { getStoryById })(StoryShow);