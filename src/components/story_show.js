import React, { Component, PropTypes } from 'react';
import { getStoryById, removeStory } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router'; 

class StoryShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.getStoryById(this.props.params.id);
	}

	onClickHandler() {
		this.props.removeStory(this.props.params.id).
			then(() => {
				this.context.router.push('/');
			});
	}

	render() {
		const { story } = this.props;
		if (!story) {
			return <div><i>Loading ...</i></div>;
		}
		return (
			<div>
				<Link to="/" className="btn btn-primary">Go back</Link>
				<h3>{ story.title }</h3>
				<p>{ story.content }</p>
				<p><i>Written by: { story.author }</i></p>
				<button className="btn btn-danger" onClick={this.onClickHandler.bind(this)}>Remove</button>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {story: state.stories.story};
}

export default connect(mapStateToProps, { getStoryById, removeStory })(StoryShow);