import { Component } from '@angular/core';
import { Log } from 'src/models/log';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogService } from 'src/service/log.service';
import { SharedDataService } from 'src/service/challenge.sharedservices';

@Component({
  selector: 'app-modify-log',
  templateUrl: './modify-log.component.html',
  styleUrls: ['./modify-log.component.scss']
})
export class ModifyLogComponent {
  model:Log = {_id:'', lastLogin:'', timeOnline:0}

  constructor(private logService: LogService, private sharedDataService: SharedDataService){}

  ngOnInit(): void {
    this.sharedDataService.editClicked.subscribe(() => {
      this.model = this.sharedDataService.log;
    });
  } 

  editarLog(id:any){
    this.logService.updateLog(id,this.model).subscribe(data =>{
      this.model = {_id:'',lastLogin:'', timeOnline:0};
      this.sharedDataService.logAdded.next(true);
    }, error => {
      console.log(error);
    })
  }
}
