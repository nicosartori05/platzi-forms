import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  // FORM CONTROL
  // nameField = new FormControl('', [
  //   Validators.required,
  //   Validators.maxLength(10),
  // ]);
  // emailField = new FormControl('');
  // phoneField = new FormControl('');
  // colorField = new FormControl('#000000');
  // numberField = new FormControl('');
  // dateField = new FormControl(12);

  // categoryField = new FormControl('category-2');
  // tagField = new FormControl('');

  // agreeField = new FormControl(false);
  // genderField = new FormControl('');
  // zoneField = new FormControl('');

  // FORM GROUP

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    number: new FormControl(''),
    date: new FormControl(12),
    category: new FormControl('category-2'),
    tag: new FormControl(''),
    agree: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    // this.nameField.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  save(event) {
    console.log(this.form.value);
  }

  get nameField() {
    return this.form.get('name');
  }
  get emailField() {
    return this.form.get('email');
  }
  get phoneField() {
    return this.form.get('phone');
  }
  get colorField() {
    return this.form.get('color');
  }
  get ageField() {
    return this.form.get('age');
  }
  get dateField() {
    return this.form.get('date');
  }
  get categoryField() {
    return this.form.get('category');
  }
  get tagField() {
    return this.form.get('tag');
  }
  get agreeField() {
    return this.form.get('agree');
  }
  get genderField() {
    return this.form.get('gender');
  }
  get zoneField() {
    return this.form.get('zone');
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }
}
