import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Model
import { User } from '../business/model/user.model';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  
    private currentUserSubject!: BehaviorSubject<User>;
    public currentUser!: Observable<User>;

    constructor(private http: HttpClient) {
        
        let curUserInLocStorage = localStorage.getItem('currentUser');

        if(curUserInLocStorage){
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(curUserInLocStorage));
        } else { // NoUser Connected is a user with a '-1' id 
            this.currentUserSubject = new BehaviorSubject<User>({ id:-1 });
        }
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(login: any, pwd: any) {
        return this.http.post<any>(`${environment.apiUrl}.apiUrl}/users/authenticate`, { username: login, password: pwd })
            .pipe(map(user => {
                // Store user details and jwt token in local storage
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // Replace user in local storage by a fake one
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next({ id:-1 });
    }

    /**
     * TODO - A User Join the website
     * @returns 
     */
    join(user: User) {

        return this.http.post<any>(`${environment.apiUrl}.apiUrl}/users/join`, { username: user.login, password: user.pwd })
        .pipe(map(user => {
            // Store user details and jwt token in local storage
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }
}
