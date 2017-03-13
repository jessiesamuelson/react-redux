import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    // case types.CREATE_COURSE:
    //   // es6 spread operator, returns a new instance of state array
    //   return [...state,
    //     // deep copy of state, with new course
    //     Object.assign({}, action.course)
    //   ];
    default:
      return state;
  }
}
