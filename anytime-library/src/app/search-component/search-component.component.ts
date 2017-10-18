import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor(private ServerService:ServerService) { }

  apps = [];
  ngOnInit() {
    this.ServerService.getBookDetails()
      .subscribe(
        (response)=>{
          console.log(response)
          this.apps = response;
        }
      )
  }
  searchBooksByName='';
  // putData() {
  //   this.ServerService.storeBookdetails(this.apps)
  //     .subscribe(response => console.log(response),
  //     (err) => console.log(err))
  // }
}