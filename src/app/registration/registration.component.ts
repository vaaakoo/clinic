import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationDetailsService } from '../shared/registration-details.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  uploadedFileNames: string []= [];

  constructor(public service: RegistrationDetailsService) {
  }

  
  categoryList: string[] = []; 

  async ngOnInit() {
    await this.showDropdown();
    // Now that the dropdown data is loaded, you can proceed with any other initialization.
  }
  
  async showDropdown(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.categoryList = ['Category 1', 'Category 2', 'Category 3'];
        resolve();
      }, 1000);
    });
  }

  onSubmit(form:NgForm) {
    this.service.formSubmitted = true;
    if(form.valid){
      this.service.postRegistrationDetails()
      .subscribe({
        next: res => {
          this.service.resetForm(form)
        },
        error: err => {console.log(err)}
      })
    }
  }

  onImageChange(event: any) {
    const file = event.currentTarget.files[0];
    const formObj = new FormData();
    formObj.append('file',file);
    console.log(formObj)
    this.service.postRegistrationDetails()
    .subscribe((res: any) =>{
      console.log(res)
        this.uploadedFileNames.push(res);
    })

}

  onCVChange(event: any) {
    const file = event.currentTarget.files[0];
    const formObj = new FormData();
    formObj.append('file',file);
    console.log(formObj)

    this.service.postRegistrationDetails()
    .subscribe((res: any) =>{
      console.log(res)
        this.uploadedFileNames.push(res);
    })
}
}
