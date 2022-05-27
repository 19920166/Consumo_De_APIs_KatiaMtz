import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { WeatherService } from 'src/app/servicios/weather.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  validateForm!: FormGroup;
  weather: any;

  constructor(private weatherService: WeatherService, private fb: FormBuilder) {

  }

  ngOnInit(): void {


    this.validateForm = this.fb.group({
      ciudad: [null, [Validators.required]],
      codigo: [null, [Validators.required]],
      remember: [true]
    });

  }

  getWeather(cityName: string, countryCode: string){
    this.weatherService.getWeather(cityName, countryCode).subscribe(
      res => {
        console.log(res);
        this.weather = res
      },
      error => {
        console.log(error)
        alert("No se encuentran los datos ingresados!!")
      }
    )
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      //console.log('submit', this.validateForm.value.ciudad);
      this.getWeather(this.validateForm.value.ciudad, this.validateForm.value.codigo);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
