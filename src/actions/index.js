import axios from 'axios';

export const FETCH_STORIES = 'FETCH_STORIES';
export const GET_STORY_BY_ID = 'GET_STORY_BY_ID';
export const DELETE_STORY = 'DELETE_STORY';
export const CREATE_STORY = 'CREATE_STORY';

const ROOT_URL = 'http://localhost:3000/travels';

export function fetchStories() {
	const request = axios.get(ROOT_URL);
	return {
		type: FETCH_STORIES,
		payload: request
	};
}

export function getStoryById(id) {
	const request = axios.get(`${ROOT_URL}/${id}`);
	return {
		type: GET_STORY_BY_ID,
		payload: request
	}
}

export function removeStory(id) {
	const request = axios.delete(`${ROOT_URL}/${id}`);
	return {
		type: DELETE_STORY,
		payload: request
	}
}

export function createStory(props) {
	const request = axios.post(`${ROOT_URL}`, props);
	return {
		type: CREATE_STORY,
		payload: request
	}
}