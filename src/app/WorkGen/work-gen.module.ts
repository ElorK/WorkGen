import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkGenComponent } from './work-gen/work-gen.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WorkGenComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WorkGenComponent
  ]
})
export class WorkGenModule { }
