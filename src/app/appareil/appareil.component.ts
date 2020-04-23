import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input()appareilName:string
  @Input()appareilStatus:string;
  @Input()id:number

  @Input() indexofAppareil: number;
  constructor(private appareilService:AppareilService ) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus
  }
  getColor(){
    if (this.appareilStatus=='allume'){
      return 'green'
    }else {
      return 'red'
    }
  }
  OnSwitchOn(){
this.appareilService.switchOnOne(this.indexofAppareil)
  }
  OnSwitchOff(){
    this.appareilService.switchOffOne(this.indexofAppareil)
  }
}
