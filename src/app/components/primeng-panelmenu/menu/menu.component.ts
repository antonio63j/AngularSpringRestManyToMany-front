import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor() { }

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Empleados',
                icon: 'fa-users',
                items: [
                    {
                    label: 'Gestión',
                    icon: 'fa-plus',
                    routerLink: ['empleados'],
                    // routerLinkActiveOptions: {exact: true}
                    },
                   { label: 'Consulta movimientos',
                     icon: 'fa-table'
                   },
                ]
            },
            {
                label: 'Documentacion',
                icon: 'fa-info-circle',
                items: [
                    { label: 'Front', icon: 'fa-mail-forward' },
                    { label: 'Back', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Contacto',
                icon: 'fa-envelope',
                items: [
                    {
                        label: 'Email',
                        icon: 'fa-envelope-o',
                    },
                    {
                        label: 'Telefono',
                        icon: 'fa-phone',
                    },
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-pencil',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            }
        ];
    }

}
