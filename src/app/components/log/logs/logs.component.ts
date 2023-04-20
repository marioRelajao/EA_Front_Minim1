import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FromLogsComponent } from '../from-logs/from-logs.component';
import { ListLogsComponent } from '../list-logs/list-logs.component';
import { ModifyLogComponent } from '../modify-log/modify-log.component';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Añadir Log', cols: 1, rows: 1 , html: '', component: FromLogsComponent},
          { title: 'Modificar Log', cols: 1, rows: 1 , html: '', component: ModifyLogComponent},
          { title: 'Listado Logs', cols: 1, rows: 1 , html: '', component: ListLogsComponent},
        ];
      }

      return [
        { title: 'Añadir Log', cols: 1, rows: 1 , html: '', component: FromLogsComponent},
        { title: 'Modificar Log', cols: 1, rows: 1 , html: '', component: ModifyLogComponent},
        { title: 'Listado Log', cols: 2, rows: 2 , html: '', component: ListLogsComponent},
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
