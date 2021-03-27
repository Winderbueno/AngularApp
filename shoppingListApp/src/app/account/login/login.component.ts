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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedInAccount: Account | undefined;
  
  // LoginForm
  form!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private router: Router,
    private activRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authentService: AuthenticationService,
  ) { }

  get formValue() { return this.form.value; }

  ngOnInit(): void {

    // Define Form
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {

    this.submitted = true;
      
    // TODO - Check User's Input Validity (Mail, Login, Pwd)
    if (this.form.invalid) { return; }
      
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
    
    // Reset the Form
    this.form.reset();
  }

}
