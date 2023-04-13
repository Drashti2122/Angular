import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { SearchService } from '../appService/search.service';
import { Search } from '../appInterface/search.interface';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.css']
})
export class SwitchMapSearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchForm') searchForm!: NgForm;
  searchResults!: Search;
  searchresultCount!: any;

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // this._searchService.getSearches(4).subscribe(res => {
    //   console.log(res)
    //   this.searchResults = res;
    // })
    const fromValue = this.searchForm.valueChanges;
    fromValue?.pipe(
      // map(data => data.searchTerm)
      filter(() => this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this._searchService.getSearches(data))
    ).subscribe(res => {
      console.log(res)
      this.searchResults = res;
      // console.log("count=>", Object.keys(res).length)
      this.searchresultCount = Object.keys(res).length;
    })
  }
}
