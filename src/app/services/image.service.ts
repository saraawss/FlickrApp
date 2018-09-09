import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Image} from "../models/image.model";
import * as defaultConfig from '../config/default.config';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root',
  })
export class ImageService {
   
  constructor(private http: HttpClient) {}
  
  getImageList() : Observable<Image[]> {
            
      return this.http.get<Image[]>(defaultConfig.apiurl + 'images');
      
  }
  
  getImageListByTag(tag) : Observable<Image[]> {
      
      return this.http.get<Image[]>(defaultConfig.apiurl + 'images/' + tag);
      
  }
  
  
}