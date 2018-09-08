import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  myForm: FormGroup;

  loading = false;
  success = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async submitHandler() {
    this.loading = true;
    const formValue = this.myForm.value;

    try {
      // Here we would use something like a POST HTTP request to send this to a database for now were only logging it 
      console.log(formValue);
      this.success = true;
    } catch (err) {
      console.error(err);
    }

    this.loading = false;

  }

}
