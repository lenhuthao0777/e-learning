const initialState = {
	courses: [],
};
function coursesReducer(state = initialState, action) {
	switch (action.type) {
		case 'value': {
		}

		default:
			return state;
	}
}
export default coursesReducer;
