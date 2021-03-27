//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { Account } from '../../model/account.model';
import { AuthenticationService } from '../../service/authentication.service';
//#endregion

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedInAccount: Account | undefined;
  
  // LoginForm
  loginForm!: FormGroup;
  action: string = 'signin'; // Can be 'signin' or 'sign up'
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private router: Router,
    private activRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authentService: AuthenticationService,
  ) { }

  get formValue() { return this.loginForm.value; }

  ngOnInit(): void {

    // Define Form
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
      let inCreationAccount = { id: "0", 
        login: this.formValue.login, pwd: this.formValue.pwd,
        mail: this.formValue.mail
      }

      this.authentService.register(inCreationAccount).subscribe({
          error: error => {
            this.error = error;
            this.loading = false;
          }
        });

    } else if(this.action == 'signin'){
      
      // TODO - Check User's Input Validity (Login, Pwd)
      
      this.authentService.login(this.formValue.login, this.formValue.pwd)
        .pipe(first())
        .subscribe({
          next: () => {
            // Get return url from route parameters or default to '/'
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
