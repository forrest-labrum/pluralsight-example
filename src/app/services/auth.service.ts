import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private logger = new Subject<boolean>();

  constructor(private http: Http) { }

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  signIn(email: String, password: String) {
    let user = JSON.stringify({ email, password });

    return this.http.post('/api/auth', user)
      .map((res: Response) => {
        let data = res.json();

        if(!data) {
          return res;
        }

        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        this.logger.next(true);

        return data;
      });
  }

  signOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.logger.next(false);
  }

}
