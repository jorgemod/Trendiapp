import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nube',
  templateUrl: './nube.component.html',
  styleUrls: ['./nube.component.css']
})
export class NubeComponent implements OnInit {
@Input() palabras: any[] = [];
data:any[];
constructor() {

}

ngOnInit(): void {
  console.log("palabrasss: ", this.palabras);
}

ngOnChanges():void{

  this.data = this.palabras.map(function (d) {
      return { text: d.palabra, value: d.veces};
    });
}
// data = this.palabras.map(function (d) {
//     return { text: d.palabra, value: d.veces};
//   });
    
  }
