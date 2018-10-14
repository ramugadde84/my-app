import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../service/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading =  false;
  submitted = false;
  error = '';
  returnUrl: string;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route : ActivatedRoute,
              private authService: AuthService,
              private alertService: AlertService) { }

  ngOnInit() {
    
    
    this.loginForm =this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

   // get return url from route parameters or default to '/'
   

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
     }
    
      this.loading = true;


      this.authService.authenticate(this.f.username.value,this.f.password.value)
                       .pipe(first())
                       .subscribe(
                        data => {
                            this.router.navigate(["/tabdata"]);
                        },
                        error => {
                          this.alertService.error(error);
                          this.loading = false;
                      });
                       
      
}

}

