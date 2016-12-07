import axios from 'axios';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=12wocao34';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';


export const fetchAllPosts = () => {
	const fapRequest = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: fapRequest
	};
}

export const createNewPost = (props) => {
	console.log('21 -- upload obj props is: ', props);
	let newPostUrl = `${ROOT_URL}/posts${API_KEY}`;
	const cnpRequest = axios.post(newPostUrl, props);

	return {
		type: CREATE_POST,
		payload: cnpRequest
	};
}

export const fetchMatchedPost = (id) => {
	const fapRequest = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	console.log('33 -- fapRequest is: ', fapRequest);

	return {
		type: FETCH_POST,
		payload: fapRequest
	};
}

export const deletePost = (id) => {
	const fapRequest = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
	console.log('43 -- fapRequest is: ', fapRequest);

	return {
		type: DELETE_POST,
		payload: fapRequest
	};
}