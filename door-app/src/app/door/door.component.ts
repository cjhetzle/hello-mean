import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Door } from './door';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})

export class DoorComponent {
  private readonly baseURL = "http://localhost:4000/api";
  doors: Door[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() { console.log('1'); this.getDoors(); }

  getDoors() {
    console.log("Getting doors...");
    this.http.get<Door[]>(`${this.baseURL}/doors`).subscribe(
      doors => {
        this.doors = doors
      },
      err => {
        console.log(err)
      }
    );
  }

  createDoor( width: number, height: number, type: string) {
    console.log("Adding doors...");
    const payload = { width_in: width, height_in: height, type};
    this.http.post<Door>(`${this.baseURL}/door`, payload).subscribe(
      response => {
        this.doors.push(response);
      }
    );
  }
}
