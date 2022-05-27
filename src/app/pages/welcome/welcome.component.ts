import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public lottieConfig!: Object;
  private anim: any;
  animationSpeed: number = 1;

  radioValue = 'A';
  selectedValue = null;
  validateForm!: FormGroup;


  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.lottieConfig = {
      path: 'assets/users.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  // Integración de Lottie
  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: string) {
    this.animationSpeed = speed as unknown as number;
    this.anim.setSpeed(speed);
  }

}

interface Person{
  key: string;
  name: string;
  age: number;
  address: string;
}
