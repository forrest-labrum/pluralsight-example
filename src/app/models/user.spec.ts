import { User } from './user';

describe('User', () => {
  it('should accept constructor values', () => {
    let user = new User({
      id: 1,
      username: 'test',
      email: 'test@test.com',
      password: 'sosecret',
      firstName: 'The',
      lastName: 'Dude'
    });

    expect(user).toBeTruthy();
    expect(user.id).toEqual(1);
    expect(user.username).toEqual('test');
    expect(user.email).toEqual('test@test.com');
    expect(user.firstName).toEqual('The');
    expect(user.lastName).toEqual('Dude');
  });
});
