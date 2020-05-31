import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {BlogComponent} from './blog/blog.component';






const routes: Routes = [
  {path:'', redirectTo: 'app',pathMatch:'full'},
    {path:'about', component:AboutComponent},
    {path:'blog',component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
