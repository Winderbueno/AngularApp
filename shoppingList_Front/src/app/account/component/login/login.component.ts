//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { FormErrorService } from '@app_error/service/form-error.service';
import { LoaderService } from '@app/_shared/loader/loader.service';
import { AlertService } from '@app_error/service/alert.service';
import { AccountService } from '@app_account/service/account.service';
//#endregion

@Component({ templateUrl: './login.component.html' })
export class LoginComponent implements OnInit {

  // Form
  form!: FormGroup;
  submitted = false;

  // Getters
  get f() { return this.form.controls; }
  get err() { return this.formErrorService; }
  get isLoading() { return this.loaderService.loading;}
  get pwdCtrl() { return this.f.password as FormControl; }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formErrorService: FormErrorService,
    private loaderService: LoaderService,
    private alertService: AlertService,
    private accountService: AccountService,
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
}
