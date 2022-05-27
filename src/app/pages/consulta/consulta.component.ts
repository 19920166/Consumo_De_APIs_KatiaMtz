import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { WeatherService } from 'src/app/servicios/weather.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  imgDay: any;
  src: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getImageDay()
  }

  getImageDay(){
    this.weatherService.getImageDay().subscribe(
      res => {
        console.log(res);
        this.imgDay = res
      },
      error => {
        console.log(error)
        alert("No se pudo realizar la petición!!")
      }
    )
  }
}

interface Person{
  email: string;
  name: string;
  phoneNumber: number;
  website: string;
}

/*
listOfData: Person[] = [
    {
      email: 'john_123@gmail.com',
      name: 'Juan Gerardo Martinez Paz',
      phoneNumber: 9513245334,
      website: 'www.John.com'
    },
    {
      email: 'carmen@gmail.com',
      name: 'Carmen Soledad Gutierrez',
      phoneNumber: 9517682049,
      website: 'www.InfoTEcn.com'
    },
    {
      email: 'alfonso1994@gmail.com',
      name: 'Alfonso Pérez Omar',
      phoneNumber: 9516451234,
      website: 'www.DiarioDosMil.com'
    },
    {
      email: 'war_mac@gmail.com',
      name: 'Humberto Smith Jalisco',
      phoneNumber: 9516572839,
      website: 'www.Newnoticias.com'
    }
  ];
 */
