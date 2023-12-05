import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AngularVideoCourseComponent } from './components/angular-video-course/angular-video-course.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'angular-video-course', component: AngularVideoCourseComponent }
];
