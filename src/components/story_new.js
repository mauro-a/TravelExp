import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createStory } from '../actions/index';
import { Link } from 'react-router';

const FIELDS =  {
	title: {
		type: 'input',
		label: 'Title for story'
	},
	author: {
		type: 'input',
		label: 'Name'
	},
	content: {
		type: 'textarea',
		label: 'Content'
	}
};

class StoryNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	renderField(fieldConfig, field) {
		const fieldHelper = this.props.fields[field];
		return(
			<div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
				<label>{fieldConfig.label}</label>
				<fieldConfig.type className="form-control" {...fieldHelper} />
				<div className="text-help">
					{fieldHelper.touched ? fieldHelper.error : ''}
				</div>
			</div>
		);
	}

	onSubmit(props) {
		this.props.createStory(props).
			then(() => {
				this.context.router.push('/');
			})
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a new Story!</h3>
				{_.map(FIELDS, this.renderField.bind(this))}
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to='/' className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};
	
	_.each(FIELDS, (type, field) => {
		if(!values[field]) {
			errors[field]  = `Enter a ${field}`;
		}
	});
	return errors;
}

export default reduxForm({
	form: 'StoryNew',
	fields: _.keys(FIELDS),
	validate
}, null, { createStory })(StoryNew);