import axios from 'axios';
import queryString from 'query-string';
import { CourseUserInterface, CourseUserGetQueryInterface } from 'interfaces/course-user';
import { GetQueryInterface } from '../../interfaces';

export const getCourseUsers = async (query?: CourseUserGetQueryInterface) => {
  const response = await axios.get(`/api/course-users${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCourseUser = async (courseUser: CourseUserInterface) => {
  const response = await axios.post('/api/course-users', courseUser);
  return response.data;
};

export const updateCourseUserById = async (id: string, courseUser: CourseUserInterface) => {
  const response = await axios.put(`/api/course-users/${id}`, courseUser);
  return response.data;
};

export const getCourseUserById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/course-users/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCourseUserById = async (id: string) => {
  const response = await axios.delete(`/api/course-users/${id}`);
  return response.data;
};
