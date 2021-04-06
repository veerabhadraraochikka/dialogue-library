import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-export-dialog',
  templateUrl: './export-dialog.component.html'
})
export class ExportDialogComponent implements OnInit {

  @Input() posts: any;

  constructor(public readonly activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
