import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-youtube-modal',
  templateUrl: './youtube-modal.component.html',
  styleUrls: ['./youtube-modal.component.css']
})
export class YoutubeModalComponent extends BSModalContext {

  constructor() {
    super()
  }

}
