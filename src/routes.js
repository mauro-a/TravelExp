import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import TravelStories from './components/travel_stories';
import StoryShow from './components/story_show';
import StoryNew from './components/story_new';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={TravelStories} />
		<Route path='/story/:id' component={StoryShow} />
		<Route path='/travels/new' component={StoryNew} />
	</Route>
);