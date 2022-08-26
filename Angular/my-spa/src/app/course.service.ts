import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseURL = 'http://localhost:8000/courses/';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(public http: HttpClient) {}

  fetchCourses() {
    return this.http.get(baseURL);
  }
  fetchSingleCourses(id: number) {
    return this.http.get(baseURL + id);
  }

  addCourse(course: any) {
    return this.http.post(baseURL, course);
  }

  deleteCourse(id: number) {
    return this.http.delete(baseURL + id);
  }

  updateCourse(id: number, course: any) {
    return this.http.patch(baseURL + id, course);
  }
}
