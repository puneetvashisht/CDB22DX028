import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(courses: Array<any>, ...args: Array<string>): Array<any> {
    console.log(courses);
    console.log(args);

    let filteredCourseList = courses.filter((c) => c.title.startsWith(args[0]));
    return filteredCourseList;
  }
}
