//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { Account } from '@app_auth/model/account.model';
import { AccountService } from '@app_auth/service/account.service';
import { FormErrorService } from '@app_error_mngt/service/form-error.service';
import { AlertService } from '@app_error_mngt/service/alert.service';
//#endregion

@Component({ templateUrl: './login.component.html' })
export class LoginComponent implements OnInit {

  loggedInAccount: Account | undefined;

  // Form
  form!: FormGroup;
  submitted = false;
  loading = false;

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

    // Reset alerts on submit
    this.alertService.clear();

    // Stop here if form is invalid
    if (this.form.invalid) { return; }
    
    this.loading = true;
    this.accountService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // Get return url from route parameters or default to '/'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
