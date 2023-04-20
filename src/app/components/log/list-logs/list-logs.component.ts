import { Component } from '@angular/core';
import { Log } from 'src/models/log';
import { SharedDataService } from 'src/service/challenge.sharedservices';
import { LogService } from 'src/service/log.service';


@Component({
  selector: 'app-list-logs',
  templateUrl: './list-logs.component.html',
  styleUrls: ['./list-logs.component.scss']
})
export class ListLogsComponent {
  model:Log = {_id:"", lastLogin:"",timeOnline:0}

  constructor(private logService: LogService, private sharedDataService: SharedDataService){}

  ngOnInit(): void {
    // this.obtenerUsers();
    this.obtenerLogs();
    this.sharedDataService.logAdded.subscribe(() => {
      this.obtenerLogs();
    });
  }

  logs: Log [] = [];

  obtenerLogs(){
    this.logService.getLogs().subscribe(data => {
      console.log(data);
      this.logs = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarLog(id:string){
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if(answer){
      this.logService.deleteLog(id).subscribe(data => {
        this.obtenerLogs();    
      }, error => {
        console.log(error);
      })
    }    
  }

  editarLog(i:any){
    this.sharedDataService.log = this.logs[i];
    this.sharedDataService.editClickedLog.next(true);
  }
}
