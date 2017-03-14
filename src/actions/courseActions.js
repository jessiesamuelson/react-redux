import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}


// Thunk1
export function loadCourses() {
  return function(dispatch) {
    // This is where you would do an ajax call
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

// Thunk2
export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ?
        dispatch(updatedCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    })
  }
}
