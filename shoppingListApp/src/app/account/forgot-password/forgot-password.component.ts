//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, finalize } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { AlertService } from '@app/_shared/service/alert.service';
import { AuthenticationService } from '@app/_shared/service/authentication.service'
//#endregion

@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent implements OnInit {
    formGroup!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private authentService: AuthenticationService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.formGroup.invalid) {
            return;
        }

        this.loading = true;
        this.alertService.clear();
        this.authentService.forgotPassword(this.f.email.value)
            .pipe(first())
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: () => this.alertService.success('Please check your email for password reset instructions'),
                error: error => this.alertService.error(error)
            });
    }

    getEmailError() {
        let emailCtrl = this.formGroup.controls['email'];
        return emailCtrl.hasError('required') ? 'Veuillez entrer votre adresse email' :
        emailCtrl.hasError('email') ? 'L\'email saisi n\'est pas au bon format' : ''; 
      }
}