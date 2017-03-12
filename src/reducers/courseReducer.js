export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      // es6 spread operator, returns a new instance of state array
      return [...state,
        // deep copy of state, with new course
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
