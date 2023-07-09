import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      cedula: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }

    const formData = this.myForm.value;
   
    this.http.post('http://localhost:3000/usuarios', formData)
      .subscribe(
        response => {
          console.log('Post request successful', response);
          // Do something with the response if needed
        },
        error => {
          console.error('Error occurred:', error);
          // Handle the error
        }
      );
  }
}
