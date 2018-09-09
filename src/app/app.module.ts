import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

const appRoutes: Routes = [

  { path: '',
    redirectTo: '/images',
    pathMatch: 'full'
  }
];


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  	HttpClientModule,
  	CommonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})



export class AppModule { }
