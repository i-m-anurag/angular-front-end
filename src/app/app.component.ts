import { Component } from '@angular/core';
import { TaskService } from '../app/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TaskService]
})
export class AppComponent {
  title = 'client';
}
