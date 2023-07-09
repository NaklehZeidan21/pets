import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, FormsModule,ReactiveFormsModule, HttpClientModule],
  exports: [TestComponent]
})
export class TestModule { }
