/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { ResponderService } from './responder.service.ts';

import {BaseRequestOptions, Http, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, MockBackend, BaseRequestOptions, ResponderService]
    })
  })

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('Should successfully create a new user', inject([UserService], (user: UserService) => {
    let newUser = { email: 'newdude@coolguy.com', password: 'nonsense', firstName: 'Sir', lastName: 'Nonsense'};

    user.create(newUser)
      .subscribe(res => {
        let data = res.json();

        expect(res.status).toEqual(201);
        expect(data.email).toEqual('newdude@coolguy.com');
        expect(data.firstName).toEqual('Sir');
        expect(data.lastName).toEqual('Nonsense');
      })
  }));

  it('Should reject creation of multiple users with same email', inject([UserService], (user: UserService) => {
    let newUser = { email: 'test@test.com', password: 'supersecret', firstName: 'The', lastName: 'Dude' };

    user.create(newUser)
      .subscribe(res => {
        expect(res.status).toEqual(409);
      })
  }));
});
