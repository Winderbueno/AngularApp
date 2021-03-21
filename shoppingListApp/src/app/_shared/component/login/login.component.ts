//#region Angular Module
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

// Model, Service
import { User } from '../../model/user.model';
import { AuthenticationService } from '../../_security/authentication.service';
import { UserService } from '../../service/user.service';


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
  from!: string | null;
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
      login: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  onSubmit(): void {

    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) { return; }

    // TODO
    this.userService.getAll().subscribe(user => this.users = user);
    
    // TODO - Check User's Input, mail is a mail, pwd is safe

    // 'Join' if it's first app use, 'SignIn' if it's a user
    if(this.from == 'join'){

      // Create a User to register
      this.userConnect = { id: 0, 
        login: this.formValue.login, pwd: this.formValue.pwd,
        firstName: "Barjo", lastName: "Raymond", mail: 'Plop'
      }

      this.authentService.join(this.userConnect)
        .subscribe(user => this.userConnect = user);

    } else if(this.from == 'signin'){
      
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
