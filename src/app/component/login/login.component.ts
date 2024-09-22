import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}
  userdate: any;
  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });
  proceedlogin() {
    if (this.loginform.valid) {
      // this.service.Proceedregister(this.loginform.value).subscribe((res) => {
      //  this.toastr.success(
      // 'Please contact admin for enable access',
      //   'Registered Successfully'
      //  );
      //  this.router.navigate(['login']);
      // });
      // } else {
      //  this.toastr.warning('Please enter valid data');
      // }
      this.service.Getbycode(this.loginform.value.username).subscribe((res) => {
        this.userdate = res;
        console.log(this.userdate);
      });
    }
  }
}
