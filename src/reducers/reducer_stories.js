import { FETCH_STORIES, GET_STORY_BY_ID } from '../actions/index';

const INITIAL_STATE = { all: [], story: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_STORIES:
			return { ...state, all: action.payload.data };
		case GET_STORY_BY_ID:
			return { ...state, story: action.payload.data[0] };
		default: 
			return state;
	}
}