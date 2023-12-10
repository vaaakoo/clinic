import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validationform';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    idNumber: '',
    password: '',
    selectedCategory: ''
  };

  categoryList: string[] = []; 
  public signUpForm!: FormGroup;
  type: string = 'password';
  constructor(private fb : FormBuilder, private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      idNumber:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      cv: ['', Validators.required],
      role: ['doctor']
    })
    this.showDropdown();
  }

  showDropdown() {
    setTimeout(() => {
      this.categoryList = ['ანდროლოგი',
      'ანესთეზიოლოგი',
      'კარდიოლოგი',
      'კოსმეტოლოგი',
      'ლაბორანტი',
      'ოჯახის ექიმი',
      'პედიატრი',
      'ტოქსიკოლოგი',
      'ტრანსფუზილოგი',
      'გინეკოლოგი',
      'დერმატოლოგი',
      'ენდოკრინოლოგი',
      'გასტროენტეროლოგი',
      'თერაპევტი',];
    }, 1000); 
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      let signUpObj = {
        ...this.signUpForm.value

      }
      this.auth.signUp(signUpObj)
      .subscribe({
        next:(res=>{
          console.log(res.message);
          this.signUpForm.reset();
          this.router.navigate(['home']);
          alert(res.message)
        }),
        error:(err=>{
          alert(err?.error.message)
          console.log(err.message)
        })
      })
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm); 
    }
  }

  onImageChange(event: any) {
    
  }

  onCVChange(event: any) {
    
  }
}
