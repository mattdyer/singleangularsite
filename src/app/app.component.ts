import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  //template: 'test' + window.location.hostname,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  topContent: string;
  
  host_name: string = 'angulartest2.mdyer';
  
  constructor(private http: HttpClient) {
  	this.host_name = window.location.hostname;
  }
  
  ngOnInit(): void {
		
		this.http.get('/shared/' + this.host_name + '/top.html',{ responseType: 'text' }).subscribe(data => {
			console.log(data);
			this.topContent = data;
		});
		
		
	}
  
}
