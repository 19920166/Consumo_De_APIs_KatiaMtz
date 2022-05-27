import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { WeatherService } from 'src/app/servicios/weather.service';

@Component({
  selector: 'app-curp',
  templateUrl: './curp.component.html',
  styleUrls: ['./curp.component.css']
})
export class CurpComponent implements OnInit {
  curp = 'GAGA980828HOCRNG03';
  curpInf: any;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCurp();
  }

  getCurp(){
    this.weatherService.getCurp(this.curp).subscribe(
      res => {
        console.log(res);
        this.curpInf = res
      },
      error => {
        console.log(error)
        alert("No se pudo realizar la petición!!")
      }
    )
  }
}

