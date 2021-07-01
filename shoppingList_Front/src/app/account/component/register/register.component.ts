//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { FormErrorService } from '@app_error/service/form-error.service';
import { AlertService } from '@app_error/service/alert.service';
import { MustMatch } from '@app_error/must-match.validator';
import { AccountService } from '@app_account/service/account.service';
//#endregion


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {

  // Form
  form!: FormGroup;
  submitted = false;

  // Access getters
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

    // Stop here if form is invalid
    if (this.form.invalid) { return; }

    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(
            'Registration successful, please check your email for verification instructions',
            { keepAfterRouteChange: true }
          );
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => { this.alertService.error(error); }
      });

  }
}
