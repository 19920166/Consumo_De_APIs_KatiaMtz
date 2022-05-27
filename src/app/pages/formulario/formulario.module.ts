import { NgModule } from '@angular/core';

import { FormularioRoutingModule } from './formulario-routing.module';

import { FormularioComponent } from './formulario.component';
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
import {NzLayoutModule} from "ng-zorro-antd/layout";

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [FormularioRoutingModule, ReactiveFormsModule, NzInputModule, NzFormModule, CommonModule, NzSelectModule, NzCheckboxModule, NzButtonModule, NzCardModule, NzDropDownModule, NzIconModule, NzDividerModule, NzTableModule, NzSwitchModule, FormsModule, NzRadioModule, NzLayoutModule, HttpClientModule],
  declarations: [FormularioComponent],
  exports: [FormularioComponent]
})
export class FormularioModule { }
