//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { FormErrorService } from '@app_error/service/form-error.service';
import { LoaderService } from '@app/_shared/loader/loader.service'; // TODO - Use Loader
import { AlertService } from '@app_error/service/alert.service';
import { AccountService } from '@app_account/service/account.service';
//#endregion


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {

  // Form
  form!: FormGroup;
  submitted = false;

  // Getters
  get f() { return this.form.controls; }
  get err() { return this.formErrorService; }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formErrorService: FormErrorService,
    private loaderService: LoaderService,
    private alertService: AlertService,
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    // Form definition
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue]
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
