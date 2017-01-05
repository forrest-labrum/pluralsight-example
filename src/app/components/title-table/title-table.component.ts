import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'title-table',
  templateUrl: './title-table.component.html',
  styleUrls: ['./title-table.component.css']
})
export class TitleTableComponent implements OnInit {
  @Input() data: any[];
  @Input() color: string;
  @HostBinding('style.border-left') border: string;

  constructor() { }

  ngOnInit() {
    this.border = `solid 4px ${this.color}`;
  }

}
