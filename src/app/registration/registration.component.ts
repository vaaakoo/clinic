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
    password: '',
    selectedCategory: ''
  };

  categoryList: string[] = []; // Initialize as an empty array

  ngOnInit() {
    // You might want to call this in ngOnInit or any other lifecycle hook based on your requirements
    this.showDropdown();
  }

  showDropdown() {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      // Replace this with your actual API call to fetch categories
      this.categoryList = ['Category 1', 'Category 2', 'Category 3'];
    }, 1000); // Simulate a delay of 1 second
  }

  onSubmit() {
    console.log('Form submitted:', this.user);
  }

  onImageChange(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
        const imageFile: File = fileList[0];

    }
}

  onCVChange(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
        const cvFile: File = fileList[0];

    }
}
}
