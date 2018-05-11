import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  form;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl('pon'),
      lastname: new FormControl(''),
      languages: new FormControl('')

    });
  }
  onSubmit(user){
    console.log(user);
  }
}
