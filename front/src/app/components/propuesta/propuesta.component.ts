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
  data: any = [];
  palabras: any [] = [];
  palabrasEncontradas :any[] = [];
  keyword :any []= [];
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
  }
  
  ngOnInit(): void {
    
    this.getKeyWords("tweesss");
    
  }
  
  getKeyWords(fuente){
    if(fuente == "tweet"){

      this.prueba.tweets().subscribe( data =>{
        this.data = data;    
        this.data.map( dato =>{
          let keywordss = dato.keywords.split(' ');
          keywordss.map((palabra,index) =>{
            if( this.palabras.includes(palabra)){

              this.keyword[index].veces = this.keyword[index].veces +1;
              
            }
            else{
              this.palabras.push(palabra);
              this.keyword.push({palabra: palabra, veces: 1});
            }

          });
          console.log(this.keyword);
        })
      });
    }
    else{
      this.prueba.noticias().subscribe( data =>{
        this.data = data;    
        this.data.info.map( dato =>{
          let keywordss = dato.keywords.split(' ');
          keywordss.map((palabra,index) =>{
            if( this.palabras.includes(palabra)){

              this.keyword[index].veces = this.keyword[index].veces +1;
              
            }
            else{
              this.palabras.push(palabra);
              this.keyword.push({palabra: palabra, veces: 1});
            }

          });
          console.log(this.keyword);
        })
      });
    }




  }
}
