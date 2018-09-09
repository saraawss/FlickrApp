import { Component, ViewChild, OnInit, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import * as defaultConfig from '../../config/default.config';
import { Router } from '@angular/router';
import {ImageService} from '../../services/image.service';
import {Image} from "../../models/image.model";


@Component({
  templateUrl: 'imagelist.component.html',
})

export class ImageListComponent implements OnInit {
    		
	imagesList : Image[];
    processIcon : any;

    constructor(private http: HttpClient , private router: Router 
            , public imageService: ImageService
            ) { }
    
	ngOnInit(){
	    this.loadImages();
    }
	
	
	loadImages(){
	    this.clearImages();
	    this.imageService.getImageList().subscribe(data => {
	        this.imagesList =  data;
	    });
    	
	}
	
	loadImagesByTag(tag){
	    console.log('tag>> '+tag);
	    this.clearImages();
	    this.processIcon = true;
	    this.imageService.getImageListByTag( tag ).subscribe(data => {
            this.imagesList =  data;
            
            if(this.imagesList.length){
                this.processIcon = false; 
            }
        });
    }
	
	clearImages(){
	   this.imagesList =  [];
	   this.processIcon = false;
    }
	
}
