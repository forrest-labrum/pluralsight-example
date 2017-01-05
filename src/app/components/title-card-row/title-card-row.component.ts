import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title-card-row',
  templateUrl: './title-card-row.component.html',
  styleUrls: ['./title-card-row.component.css']
})
export class TitleCardRowComponent implements OnInit {
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

}
