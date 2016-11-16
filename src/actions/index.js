import axios from 'axios';

export const FETCH_STORIES = 'FETCH_STORIES';
export const GET_STORY_BY_ID = 'GET_STORY_BY_ID';

const ROOT_URL = 'http://localhost:3000/travels';

export function fetchStories() {
	const request = axios.get('http://localhost:3000/travels');
	return {
		type: FETCH_STORIES,
		payload: request
	};
}

export function getStoryById(id) {
	const request = axios.get(`${ROOT_URL}?id=${id}`);
	return {
		type: GET_STORY_BY_ID,
		payload: request
	}
}