import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-air-base-form',
  templateUrl: './air-base-form.component.html',
  styleUrls: ['./air-base-form.component.scss']
})
export class AirBaseFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
