import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {

  @Input() disabled:string;

  constructor() { }

  ngOnInit() {
  }

}
