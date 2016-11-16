import React, { Component } from 'react';

export default class StoryShow extends Component {
	render() {
		return (
			<div>
				Story selected: {this.props.params.id}
			</div>
		);
	}
}