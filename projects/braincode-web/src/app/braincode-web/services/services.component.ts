import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';

@Component({
  selector: 'anms-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  submenu(url:string){
    if(url == "sub1"){
      this.router.navigate(['/braincode-web/services/sub1']);
    }
    else if( url == "sub2"){
      this.router.navigate(['/braincode-web/services/sub2']);
    }
   else if (url == "sub3"){
    this.router.navigate(['/braincode-web/services/sub3']);
   }
  else {
    this.router.navigate(['/braincode-web/services/sub4']);
    }
    
  }
}
