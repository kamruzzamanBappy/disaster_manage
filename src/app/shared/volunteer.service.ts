import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class VolunteerService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly baseURL = 'http://localhost:3000/api/volunteers/';

  volunteerForm = this.fb.group({
    _id: [null],
    fullName: ['', Validators.required],
    age: ['', Validators.required],
    mobile: ['', Validators.required],
    location: [''],
  });

  postVolunteer() {
    return this.http.post(this.baseURL, this.volunteerForm.value);
  }
}
