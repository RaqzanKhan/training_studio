import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './component/start/start.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' }, // Default page
  { path: 'start', component: StartComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
