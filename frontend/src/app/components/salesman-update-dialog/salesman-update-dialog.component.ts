import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {salesman} from '../../interfaces/salesman-interface';
import {ApiService} from '../../api/services/api.service';

@Component({
    selector: 'app-salesman-update-dialog',
    templateUrl: './salesman-update-dialog.component.html',
    styleUrls: ['./salesman-update-dialog.component.css']
})
export class SalesmanUpdateDialogComponent implements OnInit {

    salesman: salesman;

    constructor(
        private apiService: ApiService,
        private dialogRef: MatDialogRef<SalesmanUpdateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string
    ) { }

    ngOnInit(): void {
        this.apiService.apiSalesmenIdGet$Response(this.data).subscribe((response): void => {
            if (response.status === 200){
                this.salesman = response.body;
            }
        });
    }

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        // eslint-disable-next-line no-underscore-dangle
        this.apiService.apiSalesmenIdPut$Response(this.salesman._id, this.salesman).subscribe((response): void => {
            if (response.status === 200){
                this.dialogRef.close();
            }
        });
    }
}
