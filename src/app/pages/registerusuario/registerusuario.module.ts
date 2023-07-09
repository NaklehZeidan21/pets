import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterusuarioComponent } from './registerusuario.component';

@NgModule({
  declarations: [RegisterusuarioComponent],
  imports: [CommonModule, FormsModule,ReactiveFormsModule, HttpClientModule],
  exports: [RegisterusuarioComponent]
})
export class registerusuarioModule { }
