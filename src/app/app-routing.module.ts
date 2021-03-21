import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddersComponent } from './ladders/ladders.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'ladder', component: LaddersComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
