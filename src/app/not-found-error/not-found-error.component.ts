import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-not-found-error',
  templateUrl: './not-found-error.component.html',
  styleUrl: './not-found-error.component.css'
})


export class NotFoundErrorComponent implements OnInit {

 data:any;
  sampleobj$!: Observable<any>;
 constructor(private activated:ActivatedRoute){}
  obj: any = {
    "name": "Error",
  "appId": "DemoApp",
  "user": "Angular Academy",
  "time": 1720162687365,
  "id": "DemoApp-Angular Academy-1720162687365",
  "url": "/home",
  "status": null,
  "message": "testing code error",
  "stack": "",
  "navigationId": 2
  }


 ngOnInit(): void {
this.sampleobj$ = this.activated.paramMap.pipe(map(()=>this.obj));

 this.data = this.activated.snapshot.data;
 console.log(this.data,'----404')
}

}