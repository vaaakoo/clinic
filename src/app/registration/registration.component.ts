import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validationform';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  progress!: number;
  message!: string;
  @Output() public onUploadFinished = new EventEmitter();

  categoryList: string[] = []; 
  public signUpForm!: FormGroup;
  type: string = 'password';
  constructor(private fb : FormBuilder, private auth: AuthService, private router: Router, private http: HttpClient ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      idNumber:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.requiredTrue],
      cv: ['', Validators.requiredTrue],
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
  
  // upload image
  uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('http://localhost:5100/api/User/upload', formData, { reportProgress: true, observe: 'events' })
      .subscribe({
        next: (event: any) => { // Specify the type of event
          if (event.type === HttpEventType.UploadProgress)
            this.progress = Math.round(100 * event.loaded / event.total);
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
          }
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }

}
