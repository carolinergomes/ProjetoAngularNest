import { ComponentsModule } from './../../components/components.module';
import { MaterialModule } from './../../../material/material/material.module';
import { DefaultComponent } from './default.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class DefaultModule { }
