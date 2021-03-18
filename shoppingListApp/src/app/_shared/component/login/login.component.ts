import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// Model, Service
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    login: '',
    pwd: ''
  });

  userConnect: User | undefined;
  users:User[]=[];
  from!: string | null; // 

  constructor(
    private activRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    //if(this.activRoute) { this.from = this.activRoute.snapshot.paramMap.get('from');}
    //console.warn('valeur recup de la route :', this.from);

    // The component suscribe to route change
    this.activRoute.params.subscribe(routeParams => {
      this.from=routeParams.from;
    });
  }

  print():void {
    console.log('UserSS gotten from DB is :', this.users);
    console.log('Current User :', this.userConnect);
  }

  onSubmit(): void {

    this.userService.getAll()
        .subscribe(user => this.users = user);

    console.log('UserSS gotten from DB is :', this.users);


    // Get User's input
    let formValue=this.loginForm.value;
    console.warn('A user is attempting to connect', formValue);

    // TODO - Check User's Input
    // mail is a mail, pwd is safe

    // Create a User to register
    this.userConnect = {
      id: 0,
      mail: formValue.login,
      name: "Raymond",
      firstName: "Barjo",
      pwd: formValue.pwd
    }

    // 'Join' if it's first app use, 'SignIn' if it's a user
    if(this.from == 'join'){   
      this.userService.join(this.userConnect)
        .subscribe(user => this.userConnect = user);

    } else if(this.from == 'signin'){ // 
      this.userService.signIn(this.userConnect)
        .subscribe(user => this.userConnect = user);
    }
    
    // Reset the Form
    this.loginForm.reset();
  }

}
