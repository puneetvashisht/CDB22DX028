import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseURL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(public http: HttpClient) {}

  fetchCourses() {
    return this.http.get(baseURL + 'course');
  }
  fetchSingleCourses(id: number) {
    return this.http.get(baseURL + 'course/' + id);
  }

  addCourse(course: any) {
    return this.http.post(baseURL + 'course', course);
  }

  deleteCourse(id: number) {
    return this.http.delete(baseURL + 'delete/' + id);
  }

  updateCourse(route: string, id: number, course: any) {
    return this.http.put(baseURL + route + id, course);
  }
}
