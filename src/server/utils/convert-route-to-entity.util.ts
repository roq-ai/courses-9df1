const mapping: Record<string, string> = {
  companies: 'company',
  courses: 'course',
  'course-users': 'course_user',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
