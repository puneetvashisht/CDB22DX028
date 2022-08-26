import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddCourseComponent } from './Components/add-course/add-course.component';
import { CardComponent } from './Components/card/card.component';
import { Comp1Component } from './Components/comp1/comp1.component';
import { Comp2Component } from './Components/comp2/comp2.component';
import { ContainerComponent } from './Components/container/container.component';
import { ViewDetailsComponent } from './Components/view-details/view-details.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'add',
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view/:id',
    component: ViewDetailsComponent,
  },
  {
    path: 'container',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: Comp1Component,
      },
      {
        path: 'comp2',
        component: Comp2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
