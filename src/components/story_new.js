import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createStory } from '../actions/index';

class StoryNew extends Component {
	render() {
		const { fields: { title, author, content }, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.props.createStory)}>
				<h3>Create a new Story!</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</div>

				<div className="form-group">
					<label>Author</label>
					<input type="text" className="form-control"  {...author}/>
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" {...content} />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'StoryNew',
	fields: ['title', 'author', 'content']
}, null, { createStory })(StoryNew);