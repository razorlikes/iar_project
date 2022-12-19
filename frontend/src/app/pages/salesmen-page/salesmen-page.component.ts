import { Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {salesman} from '../../interfaces/salesman-interface';
import {ApiService} from '../../api/services/api.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SalesmanUpdateDialogComponent} from '../../components/salesman-update-dialog/salesman-update-dialog.component';

@Component({
    selector: 'app-salesman-page',
    templateUrl: './salesmen-page.component.html',
    styleUrls: ['./salesmen-page.component.css']
})

export class SalesmenPageComponent implements OnInit {

    displayedColumns = ['select', 'id', 'name', 'jobTitle'];
    salesmen: salesman[] = [];

    constructor(private apiService: ApiService, private dialog: MatDialog) { }

    ngOnInit(): void {
        this.fetchSalesmen();
    }

    selection = new SelectionModel<salesman>(false, []);

    fetchSalesmen(): void{
        this.apiService.apiSalesmenGet$Response().subscribe((response): void => {
            if (response.status === 200){
                this.salesmen = response.body;
            }
        });
    }

    addSalesman(): void{
        this.apiService.apiSalesmenPost$Response().subscribe((response): void => {
            if (response.status === 200){
                this.fetchSalesmen();
            }
        });
    }

    deleteSalesman(): void {
        // eslint-disable-next-line no-underscore-dangle
        this.apiService.apiSalesmenIdDelete$Response(this.selection.selected[0]._id).subscribe((response): void => {
            if (response.status === 200) {
                this.fetchSalesmen();
            }
        });
    }

    openDialog(): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        // eslint-disable-next-line no-underscore-dangle
        dialogConfig.data = this.selection.selected[0]._id;

        this.dialog.open(SalesmanUpdateDialogComponent, dialogConfig).beforeClosed().subscribe((): void => {
            this.fetchSalesmen();
        });
    }
}
