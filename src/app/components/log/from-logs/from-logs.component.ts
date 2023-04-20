import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogService } from 'src/service/log.service';
import { SharedDataService } from 'src/service/challenge.sharedservices';


@Component({
  selector: 'app-from-logs',
  templateUrl: './from-logs.component.html',
  styleUrls: ['./from-logs.component.scss']
})
export class FromLogsComponent {
  model:any = {lastLogin:'', timeOnline:0}

  constructor(private logService: LogService, private sharedDataService: SharedDataService){}
  ngOnInit(): void {
  }

  agregarLog(){
    this.logService.addLog(this.model).subscribe(data => {
      console.log(this.model);
      this.model = {lastLogin:'', timeOnline:0};   
      this.sharedDataService.logAdded.next(true);   
    }, error => {
      console.log(this.model)
      console.log(error);
    })
  }

}
