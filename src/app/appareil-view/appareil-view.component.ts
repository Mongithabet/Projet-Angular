import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth=false;
lastUpdate= new Promise(
  (resolve,reject)=>{
    const date = new Date();
    setTimeout(
      ()=>{
        resolve(date);
      },1000)
    
  }
)
appareils: any[];
constructor(private appareilService: AppareilService){
  setTimeout(
   () =>{
      this.isAuth=true
    },3000
  )
}
  ngOnInit(): void {
    this.appareils = this.appareilService.appareils
    throw new Error("Method not implemented.");
  }
onAllumer(){
  this.appareilService.switchOnAll();
}
ofAllumer(){
  this.appareilService.switchOfAll()

}

}
