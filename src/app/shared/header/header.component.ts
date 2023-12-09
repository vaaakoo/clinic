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
  isLoggedIn: boolean = true;
  isAdministrator: boolean = false; 


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    // private toast: NgToastService,
    // private userStore: UserStoreService
  ) {}
  

  // Method to navigate to the registration page
  navigateToRegistration() {
    this.router.navigate(['/client-reg']);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // navigateToAuthorization() {
  //   this.router.navigate(['/authorization']);
  // }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res.message);
          this.loginForm.reset();

          const isAdmin = res.User && res.User.isAdmin;
          console.log(isAdmin.type)

          if (isAdmin) {
            this.isLoggedIn = true;
            this.isLoggedIn = false;
          } 
  
          console.log("Is Admin:", this.isAdministrator);
          console.log("Is Logged In:", this.isLoggedIn);

          // this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
          const modalElement: any = $('#exampleModal');
          if (modalElement) {
            modalElement.modal('hide');
          }
          this.router.navigate(['']);
          
        },
        error: (err) => {
          alert(err?.error.message)
          // this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
          console.log(err);
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }

}
