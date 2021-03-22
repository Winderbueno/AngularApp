//#region Angular Module
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

// Model, Service
import { User } from '../../../business/model/user.model';
import { AuthenticationService } from '../../service/authentication.service';
import { UserService } from '../../../business/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userConnect: User | undefined;
  users:User[]=[];
  
  // Form Status
  action: string = 'signin'; // Can be a signin or an account creation
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private router: Router,
    private activRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authentService: AuthenticationService,
    private userService: UserService
  ) { }

  // Convenience getter to access form fields
  get formValue() { return this.loginForm.value; }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.required],
      login: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  onSubmit(): void {

    this.submitted = true;

    // 'Join' if it's first app use, 'SignIn' if it's a user
    if(this.action == 'join'){
      
      // TODO - Check User's Input Validity (Mail, Login, Pwd)
      if (this.loginForm.invalid) { return; }

      // Create a User to register
      this.userConnect = { id: 0, 
        login: this.formValue.login, pwd: this.formValue.pwd,
        mail: this.formValue.mail
      }

      this.authentService.join(this.userConnect)
        .subscribe(user => this.userConnect = user);

    } else if(this.action == 'signin'){
      
      // TODO - Check User's Input Validity (Login, Pwd)

      this.authentService.login(this.formValue.login, this.formValue.pwd)
        .pipe(first())
        .subscribe({
          next: () => {
            // Get return url from route parameters or default to '/'
            console.log(this.activRoute.snapshot.queryParams['returnUrl']);
            const returnUrl = this.activRoute.snapshot.queryParams['returnUrl'] || '';
            console.log(returnUrl);
            stop();
            this.router.navigate([returnUrl]);
          },
          error: error => {
            this.error = error;
            this.loading = false;
          }
        });
    }
    
    // Reset the Form
    this.loginForm.reset();
  }

}
