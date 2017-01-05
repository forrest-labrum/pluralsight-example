import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css']
})
export class TitleCardComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() title: string;
  @Input() backgroundImg: string;

  constructor() { }

  ngOnInit() {
  }

}
