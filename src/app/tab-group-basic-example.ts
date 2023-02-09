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

  tabForm1 = this.formBuilder.group({
  name: '',
  age: '',
  address: '',
  anything: ''
  })

  tabForm2 = this.formBuilder.group({
    address: '',
  })

  tabForm3 = this.formBuilder.group({
    notes: ''
  })

  tabForm = ({
    tabForm1: this.tabForm1,
    tabForm2: this.tabForm2,
    tabForm3: this.tabForm3
  }
  )

  submitTabForm1() {
    return this.tabForm1.reset();
  }

  submitTabForm2() {
    return this.tabForm2.reset();
  }

  submitTabForm3() {
    return this.tabForm3.reset();
  }

  onSubmit(): void {

    //** Submit Logic here */
    console.warn('Your form has been submitted', this.tabForm1.value, this.tabForm2.value, this.tabForm3.value);
    this.submitTabForm1();
    this.submitTabForm2();
    this.submitTabForm3();

    }

}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license **/