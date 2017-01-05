/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { ResponderService } from './responder.service.ts';

import {BaseRequestOptions, Http, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, MockBackend, BaseRequestOptions, ResponderService]
    })
  })

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('Should successfully authenticate a registered user', inject([AuthService], (auth: AuthService) => {
    auth.signIn('test@test.com', 'supersecret')
      .subscribe(res => {
        expect(res.token).toEqual('1894190786');
        expect(res.user.id).toEqual(0);
        expect(res.user.email).toEqual('test@test.com');
        expect(res.user.firstName).toEqual('The');
        expect(res.user.lastName).toEqual('Dude');
      })
  }));

  it('Should successfully reject a bad password', inject([AuthService], (auth: AuthService) => {
    auth.signIn('test@test.com', 'toowrong')
      .subscribe(res => {
        expect(res.status).toEqual(401);
      })
  }));

  it('Should successfully reject a bad email', inject([AuthService], (auth: AuthService) => {
    auth.signIn('random@nowhere.com', 'T00R@nD0m')
      .subscribe(res => {
        expect(res.status).toEqual(404);
      })
  }));
});
