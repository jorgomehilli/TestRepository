import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
ServerCreationStatus="Serveri nuk eshte krijuar!";
ServerName="Server1";
  constructor() {
    setTimeout(()=> {this.allowNewServer=true;},2000);
   }

  ngOnInit() {
  }
CreateServer(){
  this.ServerCreationStatus="Serveri u krijua, emri eshte " + this.ServerName;
}
}
