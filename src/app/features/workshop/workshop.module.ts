import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { WorkshopComponent } from './workshop.component';

@NgModule({
  declarations: [WorkshopComponent],
  imports: [CommonModule, MarkdownModule.forRoot()],
  exports: [WorkshopComponent],
})
export class WorkshopModule {}
