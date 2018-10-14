import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../service/userinfo.service';
import { first } from 'rxjs/operators';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  userInfoForm: FormGroup;
  loading = false;
  submitted = false;
  error = "";

  
 
  
  @Input() public alerts: Array<string> = [];

  constructor(private formBuilder: FormBuilder,private router:Router,
    private userInfoService: UserInfoService,private alertConfig: NgbAlertConfig) { 
      
    }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      username: ['', Validators.required],
      userId: new FormControl('')
    })
  }
    
    get f(){
      return this.userInfoForm.controls;
    }

    onSubmit() {
      this.submitted = true;
  
      if (this.userInfoForm.invalid) {
        return;
       }
      
        this.loading = true;
  
  
        console.log(this.f.username.value);
        this.userInfoService.postUserInfo(this.f.username.value)
                            .pipe(first())
                            .subscribe(
                            data => {
                              this.loading=false;
                              console.log(data.id);
                              userId: new FormControl(data.id);        
                              this.alertConfig.type = 'success';
                              this.alertConfig.dismissible = true;
                               console.log(data);
                            },
                            error => {
                              this.error = error;
                              this.loading = false;
                          });
                         
        }

  }


