//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { Account } from '@app/_shared/model/account.model';
import { AuthenticationService } from '@app/_shared/service/authentication.service';
//#endregion

@Component({ templateUrl: './login.component.html' })
export class LoginComponent implements OnInit {

  loggedInAccount: Account | undefined;
  
  // LoginForm
  formGroup!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private router: Router,
    private activRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authentService: AuthenticationService,
  ) { }

  get formGroupValue() { return this.formGroup.value; }

  ngOnInit(): void {

    // Define Form
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  onSubmit(): void {

    this.submitted = true;
      
    // TODO - Check User's Input Validity (Mail, Login, Pwd)
    if (this.formGroup.invalid) { return; }
      
    this.authentService.login(this.formGroupValue.email, this.formGroupValue.password)
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
    
    // Reset the Form
    this.formGroup.reset();
  }

  getEmailError() {
    let emailCtrl = this.formGroup.controls['email'];
    return emailCtrl.hasError('required') ? 'Veuillez entrer votre adresse email' :
    emailCtrl.hasError('email') ? 'L\'email saisi n\'est pas au bon format' : ''; 
  }

  getPasswordError() {
    let emailCtrl = this.formGroup.controls['password'];
    return emailCtrl.hasError('required') ? 'Veuillez saisir un mot de passe' : ''; 
  }
  

}
