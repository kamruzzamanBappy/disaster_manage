import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private builder: FormBuilder) {}

  registerform = this.builder.group({
    id: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
name:
password:
email:this.builder.control(
  '',
  Validators.compose([Validators.required, Validators.email])
),
gender:this.builder.control('male'),
role:this.builder.control(''),
isActive:this.builder.control(false)









  });
}
