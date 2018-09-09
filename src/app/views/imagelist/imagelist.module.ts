import { NgModule , Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ImageListComponent } from './imagelist.component';
import { ImageListRoutingModule } from './imagelist-routing.module';

@NgModule({
  imports: [
  	FormsModule,
  	CommonModule,
    ImageListRoutingModule
  ],
  declarations: [ 
	  ImageListComponent
  ]
})

export class ImageListModule { }