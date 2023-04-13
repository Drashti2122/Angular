import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Search } from "../appInterface/search.interface";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getSearches(searchTerm: any): Observable<Search> {
    return this.http.get<Search>(this.url + '? userId =' + searchTerm)
  }
}
