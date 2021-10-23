import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabankService {

  constructor(private http: HttpClient) { }


  getPaises(){
    //return de la funcion
    return this.http.get("https://restcountries.com/v2/lang/es").pipe(
      //lo pasamos por un pipe para transformar la info y luego un map para recorrer todos los elementos
      map( (resp:any[]) =>{
        //retorno de la funcion map en donde recorreremos todo el arreglo con el map pero del arreglo
        return resp.map( pais =>{
          //return del map del arreglo donde creamos los objetos que tendremos
          return{
            nombre: pais.name,
            codigo: pais.alpha3Code
          }
        })
      }) 
    );
  }


}
