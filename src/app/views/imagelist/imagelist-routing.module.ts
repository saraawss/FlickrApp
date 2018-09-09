import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ImageListComponent } from './imagelist.component';

const routes: Routes = [
  {
    path: '',
    component: ImageListComponent,
    data: {
      title: 'Images'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageListRoutingModule {}
