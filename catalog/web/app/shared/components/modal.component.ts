import {Component, ViewChild, ElementRef} from "@angular/core";


@Component({
    selector: 'custom-modal',
    moduleId: module.id,
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    //directives: [MODAL_DIRECTVES],
    //viewProviders: [BS_VIEW_PROVIDERS]
})


export class ModalComponent {
    modalBody:string;
    @ViewChild('lgModal') modal:ElementRef;

    showModal(modalBody:string) {
        if (modalBody != undefined) {
            this.modalBody = modalBody;
            this.modal.show();
        }
    }
}