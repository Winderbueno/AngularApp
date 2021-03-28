//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { AlertService } from '@app/_shared/service/alert.service';
import { AuthenticationService } from '@app/_shared/service/authentication.service'
import { MustMatch } from '@app/_shared/must-match.validator';
//#endregion


@Component({ templateUrl: 'register.component.html'})  
export class RegisterComponent implements OnInit {
    formGroup!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authentService: AuthenticationService,
        private alertService: AlertService
    ) { }

    get formValue() { return this.formGroup.value; }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.formGroup.invalid) { return; }

        // Create a User to register
        let inCreationAccount = { id: "0", 
            login: this.formValue.login, pwd: this.formValue.pwd,
            mail: this.formValue.mail
        }

        this.loading = true;
        this.authentService.register(this.formGroup.value)
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
        let formCtrl = this.formGroup.controls['username'];
        return formCtrl.hasError('required') ? 'Veuillez entrer votre adresse email' :
        formCtrl.hasError('email') ? 'Not a valid email' : ''; 
    }

    getEmailError() {
        let formCtrl = this.formGroup.controls['email'];
        return formCtrl.hasError('required') ? 'Veuillez entrer votre adresse email' :
        formCtrl.hasError('email') ? 'Not a valid email' : ''; 
    }
    
    getPasswordError() {
        let formCtrl = this.formGroup.controls['password'];
        return formCtrl.hasError('required') ? 'Veuillez saisir un mot de passe' : '';
    }
}