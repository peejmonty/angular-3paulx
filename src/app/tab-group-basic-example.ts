import {Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
/**
 * @title Basic use of the tab group
 */

 export interface FormInfo {
  name: string;
  age: number;
  address: string;
  anything: string;
}

@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
})

export class TabGroupBasicExample {


  constructor(
    private formBuilder: FormBuilder
    ){}

  tabForm = this.formBuilder.group({
  name: '',
  age: '',
  address: '',
  anything: ''
  });


  onSubmit() {
    console.warn('Your form has been submitted', this.tabForm.value);
    return this.tabForm.reset();
    }

}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license **/