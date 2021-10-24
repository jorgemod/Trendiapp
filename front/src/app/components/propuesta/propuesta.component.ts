import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabankService } from 'src/app/databank.service';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {
  pestania; 
  constructor(private prueba: DatabankService, private router: ActivatedRoute) { 
    
    this.router.params.subscribe(params => {
      console.log(params['id']);
      if (params['id'] ==1 ){
        this.pestania = "Crecer en Clientes"
      }
      else{
        
        this.pestania = "Excelencia Operativa"
      }
    });
    this.prueba.data().subscribe( paises=>{
      
      console.log(paises);
    })

  }

  ngOnInit(): void {
  }

}
