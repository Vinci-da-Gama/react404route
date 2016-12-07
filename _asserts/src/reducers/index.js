import { combineReducers } from 'redux';
import FetchPostOrPosts from './reducer_posts';
import { reducer as rxFormReducer } from 'redux-form';

const RootReducer = combineReducers({
	posts: FetchPostOrPosts,
	form: rxFormReducer
});

export default RootReducer;