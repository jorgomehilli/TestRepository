import {Component} from '@angular/core';
@Component({
    selector:'server-app',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent{
    id=10000;
    ServerStatus= "Offline";
}