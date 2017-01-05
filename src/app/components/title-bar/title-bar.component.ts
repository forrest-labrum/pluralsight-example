import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { titleBarData } from '../../data/titleBarData';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  private firstName: string;
  private languages: any[] = titleBarData.languages;
  private features: any[] = titleBarData.features;
  private rowTables: any[] = titleBarData.rowTables;
  private colTables: any[] = titleBarData.colTables;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe(state => {
      this.isLoggedIn = state;

      if(this.isLoggedIn) {
        this.firstName = JSON.parse(localStorage.getItem('user')).firstName;
      }
    });
  }

  signOut() {
    this.authService.signOut();
  }


}
