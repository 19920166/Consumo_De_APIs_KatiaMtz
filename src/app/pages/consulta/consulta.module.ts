import { NgModule } from '@angular/core';

import { ConsultaRoutingModule } from './consulta-routing.module';

import { ConsultaComponent } from './consulta.component';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

import {NzFormModule, NzFormTooltipIcon} from 'ng-zorro-antd/form';
import {NzInputModule} from "ng-zorro-antd/input";
import {CommonModule} from "@angular/common";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {NzRadioModule} from "ng-zorro-antd/radio";

import { HttpClientModule } from '@angular/common/http';
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzImageModule} from "ng-zorro-antd/image";

@NgModule({
  imports: [ConsultaRoutingModule, ReactiveFormsModule, NzInputModule, NzFormModule, CommonModule, NzSelectModule, NzCheckboxModule, NzButtonModule, NzCardModule, NzDropDownModule, NzIconModule, NzDividerModule, NzTableModule, NzSwitchModule, FormsModule, NzRadioModule, HttpClientModule, NzSpaceModule, NzImageModule],
  declarations: [ConsultaComponent],
  exports: [ConsultaComponent]
})
export class ConsultaModule { }
