import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  passedData: any;
  login!: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private router: ActivatedRoute
  ) { }


  ngOnInit(): void {

    this.login = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })

    this.router.data.subscribe((data) => {
      this.passedData = data;
      this.patchFormvalue();
    })
    console.log(this.passedData, " data assigned");
  }

  submit(): void {
    console.log(this.login);
  }
  patchFormvalue() {
    this.login.patchValue({
      username: this.passedData.username,
      password: this.passedData.password
    })
  }


}

