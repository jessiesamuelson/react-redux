// Actions creator
export function createCourse(course) {
  // Action
  // return { type: 'CREATE_COURSE', course: course }
  // this is equivalent to the above because in es6 if righthand matches lefthand you don't need it
  return { type: 'CREATE_COURSE', course };
}
