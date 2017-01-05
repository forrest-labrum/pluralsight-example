import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'full-window-container',
  templateUrl: './full-window-container.component.html',
  styleUrls: ['./full-window-container.component.css']
})
export class FullWindowContainerComponent implements OnInit {
  private _center: boolean = false;
  @Input() background: string;

  @Input()
  set center(params: string) {
    this._center = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
