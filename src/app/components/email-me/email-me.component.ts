import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService } from '../shared';

@Component({
  selector: 'app-email-me',
  templateUrl: './email-me.component.html',
  styleUrls: ['./email-me.component.scss']
})
export class EmailMeComponent implements OnInit {
  constructor(
    private alertService: AlertService) { 

    }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
   const email = form.value.email;
   this.alertService.showToaster('Your email is saved');
  }  

}
