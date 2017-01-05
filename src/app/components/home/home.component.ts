import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { YoutubeModalComponent } from '../youtube-modal/youtube-modal.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(vcRef: ViewContainerRef, public modal: Modal) {
    modal.overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

  openYoutube() {
    this.modal.open(YoutubeModalComponent, new YoutubeModalComponent());
  }

}
