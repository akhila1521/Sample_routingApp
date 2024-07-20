import { Component, OnInit } from '@angular/core';
import { Observable, map, of} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {


sampleobs: Observable<string> = of('akhila');
nextob:any;

ngOnInit(): void {
  this.nextob = this.sampleobs.pipe(
    map(data=> data.split('').join('*'))
  )
  this.nextob.subscribe((item: any)=>{
    console.log(item,'---data----');
  })
}
 


}
