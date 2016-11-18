import { combineReducers } from 'redux';
import StoriesReducer from './reducer_stories';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  stories: StoriesReducer,
  form: formReducer
});

export default rootReducer;
