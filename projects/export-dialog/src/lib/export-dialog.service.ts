import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExportDialogComponent } from './export-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ExportDialogService {

  constructor(private modalService: NgbModal) { }

  open({ posts, config }: any): any {
    const modalRef = this.modalService.open(ExportDialogComponent, config);
    modalRef.componentInstance.posts = posts;
    return modalRef.result;
  }

}
