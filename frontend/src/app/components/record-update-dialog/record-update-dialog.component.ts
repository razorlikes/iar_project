import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {record} from '../../interfaces/evaluationrecord-interface';
import {ApiService} from '../../api/services/api.service';
import {salesman} from '../../interfaces/salesman-interface';

@Component({
    selector: 'app-record-update-dialog',
    templateUrl: './record-update-dialog.component.html',
    styleUrls: ['./record-update-dialog.component.css'],
})
export class RecordUpdateDialogComponent implements OnInit {

    record: record;
    salesman: salesman;
    stotal = 0;
    ototal = 0;
    total = '';
    values: string[][] = [['4', '4', '4', '4', '4', '4'], ['', '', '', '', '', ''], ['0', '0', '0', '0', '0', '0']];

    constructor(
        private apiService: ApiService,
        private dialogRef: MatDialogRef<RecordUpdateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string
    ) {
    }

    ngOnInit(): void {
        if (this.data !== undefined) {
            this.apiService.apiEvaluationRecordsGet().subscribe((response): void => {
                if (response.status === 200) {
                    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,no-underscore-dangle
                    this.record = response.body.find(elem => elem._id === this.data);

                    this.apiService.apiSalesmenGet().subscribe((response2): void => {
                        if (response2.status === 200) {
                            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                            this.salesman = response2.body.find(elem => elem.sid === this.record.sid);
                        }
                    });
                }
            });
        } else {
            this.apiService.apiEvaluationRecordsGet().subscribe((response): void => {
                if (response.status === 200) {
                    this.record = response.body.pop();

                    this.apiService.apiSalesmenGet().subscribe((response2): void => {
                        if (response2.status === 200) {
                            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                            this.salesman = response2.body.find(elem => elem.sid === this.record.sid);
                        }
                    });
                }
            });
        }
    }

    calculate(): void {
        let temptotal = 0;

        for (let i = 0; i < 6; i++) {
            if (parseInt(this.values[0][i], 10) - parseInt(this.values[1][i], 10) === 1) {
                this.values[2][i] = '20';
                temptotal += 20;
            } else if (parseInt(this.values[0][i], 10) - parseInt(this.values[1][i], 10) === 0) {
                this.values[2][i] = '50';
                temptotal += 50;
            } else if (parseInt(this.values[0][i], 10) - parseInt(this.values[1][i], 10) <= -1) {
                this.values[2][i] = '100';
                temptotal += 100;
            } else {
                this.values[2][i] = '0';
            }

            this.stotal = temptotal;
        }
    }

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        this.calculate();

        this.record.socialBonus = this.stotal.toString(10);
        this.record.orderBonus = this.ototal.toString(10);
        this.record.totalBonus = (this.stotal + this.ototal).toString(10);

        // eslint-disable-next-line no-underscore-dangle
        this.apiService.apiEvaluationRecordsIdPut(this.record._id, this.record).subscribe((response): void => {
            if (response.status === 200) {
                this.dialogRef.close();
            }
        });
    }
}
