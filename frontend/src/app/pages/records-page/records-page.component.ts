import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api/services/api.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {record} from '../../interfaces/evaluationrecord-interface';
import {SelectionModel} from '@angular/cdk/collections';
import {RecordUpdateDialogComponent} from '../../components/record-update-dialog/record-update-dialog.component';
import {salesman} from '../../interfaces/salesman-interface';

@Component({
    selector: 'app-records-page',
    templateUrl: './records-page.component.html',
    styleUrls: ['./records-page.component.css']
})
export class RecordsPageComponent implements OnInit {

    displayedColumns = ['select', 'year', 'saleb', 'socialb', 'totalb', 'remarks'];
    records: record[] = [];
    inputVal: string;
    selection = new SelectionModel<record>(false, []);
    salesman: salesman;

    constructor(private apiService: ApiService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    fetchRecords(): void {
        this.apiService.apiEvaluationRecordsIdGet(this.inputVal).subscribe((response): void => {
            if (response.status === 200) {
                this.records = response.body;
            }
        });

        this.apiService.apiSalesmenGet().subscribe((response): void => {
            if (response.status === 200) {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                this.salesman = response.body.find(elem => elem.sid === this.inputVal);
            }
        });
    }

    addRecord(): void {
        this.apiService.apiEvaluationRecordsPost({sid: this.inputVal}).subscribe((response): void => {
            if (response.status === 200) {
                this.fetchRecords();
                this.openDialog(undefined);
            }
        });
    }

    deleteRecord(): void {
        // eslint-disable-next-line no-underscore-dangle
        this.apiService.apiEvaluationRecordsIdDelete(this.selection.selected[0]._id).subscribe((response): void => {
            if (response.status === 200) {
                this.fetchRecords();
            }
        });
    }

    pushToHrm(): void {
        this.apiService.apiBonusOhrmPost(this.salesman.ohrmId, this.selection.selected[0]).subscribe((response): void => {
            if (response.status === 200) {
                this.fetchRecords();
            }
        });
    }

    openDialog(id: string): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        // eslint-disable-next-line no-underscore-dangle
        dialogConfig.data = id;

        this.dialog.open(RecordUpdateDialogComponent, dialogConfig).beforeClosed().subscribe((): void => {
            this.fetchRecords();
        });
    }
}
