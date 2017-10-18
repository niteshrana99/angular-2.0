import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() bookdetails: { name: string, src: string, content: string, author:string, description:string }

  constructor() { 
    console.log('in app component')
   }

  ngOnInit() {
  }

}
