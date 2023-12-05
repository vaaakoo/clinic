import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    idNumber: '',
    activationCode: '',
    password: ''
  };

  onSubmit() {
    // You can handle form submission logic here
    console.log('Form submitted:', this.user);
  }

  onImageChange(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
        const imageFile: File = fileList[0];
        // You can use 'imageFile' as needed, for example, store it in your 'user' object.
    }
}

  onCVChange(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
        const cvFile: File = fileList[0];
        // You can use 'cvFile' as needed, for example, store it in your 'user' object.
    }
}
}
