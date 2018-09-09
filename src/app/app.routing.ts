import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'images',
    pathMatch: 'full',
  },

  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
       {
          path: 'images',
          loadChildren: './views/imagelist/imagelist.module#ImageListModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
