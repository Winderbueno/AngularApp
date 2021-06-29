//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { Account } from '@app_account/model/account.model';
import { AccountService } from '@app_account/service/account.service';
import { FormErrorService } from '@app_error/service/form-error.service';
import { AlertService } from '@app_error/service/alert.service';
//#endregion

@Component({ templateUrl: './login.component.html' })
export class LoginComponent implements OnInit {

  loggedInAccount: Account | undefined;

  // Form
  form!: FormGroup;
  submitted = false;

  password_type:string = 'password';
  pwd_visibility: string = 'visibility_off';

  // Easy access getters
  get f() { return this.form.controls; } // Form Control
  get err() { return this.formErrorService; } // Error Service

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formErrorService: FormErrorService,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    // Form definition
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.form.invalid) { return; }

    this.accountService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // Get return url from route parameters or default to '/'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
          this.router.navigate([returnUrl]);
        },
        error: error => { this.alertService.error(error); }
      });
  }

  swapPwdVisibility(): void {
    if(this.pwd_visibility === 'visibility_off') {
      this.pwd_visibility = 'visibility';
      this.password_type = 'text';
    } else {
      this.pwd_visibility = 'visibility_off';
      this.password_type = 'password';
    }
  }
}
