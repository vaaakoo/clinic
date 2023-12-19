import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/helpers/validationform';
import 'jquery';

// import { NgToastService } from 'ng-angular-popup';
// import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public loginForm!: FormGroup;
  isLoggedIn: boolean = false;
  isAdministrator: boolean = false; 
  submissionSuccess: boolean = false;
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    // private toast: NgToastService,
    // private userStore: UserStoreService
  ) {}
  

  // Method to navigate other page
  navigateToRegistration() {
    this.router.navigate(['/client-reg']);
  }
  navigateAdmin() {
    this.router.navigate(['/admin-page']);
  }
  navigateClient() {
    this.router.navigate(['/client-page']);
  }
  navigateDoctor() {
    this.router.navigate(['/doctor-page']);
  }  

  ngOnInit(): void { 
    this.auth.getUsers().subscribe(
      (res) => {
        this.users = res;
        console.log(this.users)
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res.message);
          this.loginForm.reset();
          
          const isAdmin = res.message === "true";
          if (isAdmin) {
            this.isAdministrator = true;
          } else {
            this.isLoggedIn = true;
          }

          console.log(this.isAdministrator + "is admin");
          console.log(this.isLoggedIn + "is logged")
          // this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});

          this.submissionSuccess = true;
          
          
        },
        error: (err) => {
          alert(err?.error.message)
          // this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
          // console.log(err);
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }

}
