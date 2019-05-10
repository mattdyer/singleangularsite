import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  //template: 'test' + window.location.hostname,
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {
  
  results: string;
  
  router: Router;
  
  host_name: string = 'angulartest2.mdyer';
  
  constructor(private http: HttpClient, private _router: Router) {
  	this.host_name = window.location.hostname;
  	this.router = _router;
  	
  }
  
  ngOnInit(): void {
		
		console.log(this.router.url);
		
		var route = this.router.url.split('/')[1].split('?')[0];
		
		if(route == ''){
			route = 'home';
		}
		
		console.log(route);
		
		this.http.get('/shared/' + this.host_name + '/' + route + 'content.html',{ responseType: 'text' }).subscribe(data => {
			console.log(data);
			this.results = data;
		});
		
		
	}
  
}
