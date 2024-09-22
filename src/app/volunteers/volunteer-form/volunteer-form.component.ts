import { Component } from '@angular/core';
import { VolunteerService } from 'src/app/shared/volunteer.service';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styles: [],
})
export class VolunteerFormComponent {
  submitted: boolean = false;
  constructor(public service: VolunteerService) {}

  onSubmit() {
    this.submitted = true;
    if (this.service.volunteerForm.valid)
      console.log(this.service.volunteerForm.value);
  }
}
