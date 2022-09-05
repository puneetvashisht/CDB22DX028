import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
})
export class ViewDetailsComponent implements OnInit {
  // title?: string;
  // summary?: string;
  course: any = {};
  constructor(
    public courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log('params', params);

      this.courseService.fetchSingleCourses(params.id).subscribe((res: any) => {
        console.log(res);
        this.course = res;
      });
    });
  }
}
