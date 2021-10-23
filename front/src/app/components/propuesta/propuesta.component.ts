import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/databank.service';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {
  
  constructor(private prueba: DatabankService) { 
    this.prueba.data().subscribe( paises=>{
      
      console.log(paises);
    })
  }

  ngOnInit(): void {
  }

}
