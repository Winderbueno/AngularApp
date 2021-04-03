//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { AlertService } from '@app/_shared/service/alert.service';
import { AccountService } from '@app/_shared/service/business/account.service'
import { MustMatch } from '@app/_shared/must-match.validator';
//#endregion


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  
  // Form
  form!: FormGroup;
  submitted = false;
  loading = false;

  // Form controls getter
  get f() { return this.form.controls; }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // Form definition
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    this.submitted = true;

    // Reset alerts on submit
    this.alertService.clear();

    // Stop here if form is invalid
    if (this.form.invalid) { return; }

    // Create a User to register
    let inCreationAccount = {
      id: "0",
      email: this.f.email.value, pwd: this.f.password.value,
      username: this.f.username.value,
    }

    this.loading = true;
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });

  }

  getUsernameError() {
    let formCtrl = this.form.controls['username'];
    return formCtrl.hasError('required') ? 'Veuillez entrer votre nom d\'utilisateur' : '';
  }

  getEmailError() {
    let formCtrl = this.form.controls['email'];
    return formCtrl.hasError('required') ? 'Veuillez entrer votre adresse email' :
      formCtrl.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordError() {
    let formCtrl = this.form.controls['password'];
    return formCtrl.hasError('required') ? 'Veuillez saisir un mot de passe' : '';
  }

  getConfirmPasswordError() {
    let formCtrl = this.form.controls['confirmPassword'];
    return formCtrl.hasError('required') ? 'Veuillez confirmer votre mot de passe' :
      formCtrl.hasError('mustMatch') ? 'Les mots de passe doivent être les mêmes' : '';
  }
}