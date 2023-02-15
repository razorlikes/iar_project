import {Component, OnInit} from '@angular/core';
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
    selection = new SelectionModel<salesman>(false, []);

    constructor(private apiService: ApiService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.fetchSalesmen();
    }

    fetchSalesmen(): void {
        this.apiService.apiSalesmenGet().subscribe((response): void => {
            if (response.status === 200) {
                this.salesmen = response.body;
            }
        });
    }

    addSalesman(): void {
        this.apiService.apiSalesmenPost().subscribe((response): void => {
            if (response.status === 200) {
                this.fetchSalesmen();
            }
        });
    }

    getSalesmen(): void {
        this.apiService.apiSalesmenOhrmGet().subscribe((response): void => {
            if (response.status === 200) {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                response.body.forEach(ohrmsalesman => this.apiService.apiSalesmenPostBody(ohrmsalesman)
                    .subscribe((response2): void => {
                        this.fetchSalesmen();
                    }));
            }
        });
    }

    deleteSalesman(): void {
        // eslint-disable-next-line no-underscore-dangle
        this.apiService.apiSalesmenIdDelete(this.selection.selected[0]._id).subscribe((response): void => {
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
