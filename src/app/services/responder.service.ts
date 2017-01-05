import { User } from '../models/user';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

// simple hash for demonstration purposes
const hashString = (str: String) => {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }

  return hash.toString();
}

export const ResponderService = {
  provide: Http,
  deps: [MockBackend, BaseRequestOptions],
  useFactory: useFactory
}

export function useFactory(server: MockBackend, options: BaseRequestOptions) {
  const users: User[] = [new User({ id: 0, email: 'test@test.com', password: hashString('supersecret'), firstName: 'The', lastName: 'Dude'})];

  server.connections.subscribe((c: MockConnection) => {
    const respond = (code: number, body?: Object) => c.mockRespond(new Response(new ResponseOptions({ status: code, body: body })));

    if(c.request.url.endsWith('/api/users') && c.request.method === 1) {
      let newUser: User = JSON.parse(c.request.getBody());
      let collision = users.find(u => u.email === newUser.email);

      if(collision) {
        return respond(409);
      }

      newUser.id = users.length;
      newUser.password = hashString(newUser.password);
      users.push(newUser);

      return respond(201, newUser);
    }

    if(c.request.url.endsWith('/api/auth')) {
      let { email, password } = JSON.parse(c.request.getBody());
      let foundUser = users.filter(u => u.email === email)[0];

      if(!foundUser) {
        return respond(404);
      }

      let token = hashString(JSON.stringify(foundUser));

      // sending hashed password as well, for simplicities sake. wouldn't do so with real API obviously
      return hashString(password) === foundUser.password ?
             respond(201, { user: foundUser, token: token }) :
             respond(401);
    }
  });

  return new Http(server, options);
}
