import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { ContactFilter } from '../models/contact-filter.model';
import { User } from '../models/user.model';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private STORAGE_KEY = 'user';

  private store(key, value) {
    localStorage[key] = JSON.stringify(value);
  }

  private load(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
  }
  // private _user$ = new BehaviorSubject<User[]>([]);
  // public user$ = this._user$.asObservable()

  public signup(name) {
    const user = this.getEmptyUser();
    user.name = name;
    this.store(this.STORAGE_KEY, user);
    // console.log('user :>>', user);
    return user;
  }

  public signout() {
    this.store(this.STORAGE_KEY, '');
  }

  public getEmptyUser() {
    const newUser = new User();
    newUser.setId();
    newUser.name = '';
    newUser.coins = 100;
    newUser.moves = [];
    return newUser;
  }

  public getUser() {
    // const newUser = new User();
    // newUser.setId();
    // newUser.name = 'Ochoa Hyde';
    // newUser.coins = 100;
    // newUser.moves = [];
    // this._user$.push(newUser)
    // this._user$.next(newUser)
    // return of({newUser})
    const user = this.load(this.STORAGE_KEY);
    if (!user) return '';
    return user;
  }

  public async saveUser(user) {
    console.log(user);
    if (user._id) {
      this.store(this.STORAGE_KEY, user);
    } else {
      this.getEmptyUser();
    }

    return of(user);
  }
}
