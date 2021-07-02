import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.base_url = "category";
  }

}
