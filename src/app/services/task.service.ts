import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http:Http) { 
   console.log('Task service intialize');
  }
  getTasks(){
    return this.http.get('http://localhost:5000/api/tasks')
    .pipe(
      map(res => res.json())
    );
  
    
    
  }
  addTask(newTask) {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:5000/api/tasks',JSON.stringify(newTask),{headers:headers})
      .pipe(
        map(res => res.json())
      );

  }
}
