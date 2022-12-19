import { Component, OnInit } from '@angular/core';
import {ExampleDatapoint} from '../../interfaces/example-datapoint';
import {PeopleDemoService} from '../../services/people-demo.service';

@Component({
    selector: 'app-records-page',
    templateUrl: './records-page.component.html',
    styleUrls: ['./records-page.component.css']
})
export class RecordsPageComponent implements OnInit {

    displayedColumns = ['id', 'name', 'color', 'age', 'remarks'];
    people: ExampleDatapoint[] = [];

    constructor(private peopleDemoService: PeopleDemoService) { }

    ngOnInit(): void {
    }

    fetchPeople(): void{
        this.peopleDemoService.getPeople().subscribe((response): void => {
            if (response.status === 200){
                this.people = response.body;
            }
        });
    }

}
