import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  displayedColumns = ['links']
  dataSource = []
  ngOnInit(): void {
    for (var i = 11; i < 33; i++) { this.dataSource.push(i) }
  }

}
