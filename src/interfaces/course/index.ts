import { CourseUserInterface } from 'interfaces/course-user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  price: number;
  places_limit: number;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  course_user?: CourseUserInterface[];
  company?: CompanyInterface;
  _count?: {
    course_user?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  company_id?: string;
}
