import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportDialogComponent } from './export-dialog.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ExportDialogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModalModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ExportDialogComponent]
})
export class ExportDialogModule { }
