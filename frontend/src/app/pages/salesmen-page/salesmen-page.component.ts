import { Component, OnInit } from '@angular/core';
import {ExampleDatapoint} from '../../interfaces/example-datapoint';
import {PeopleDemoService} from '../../services/people-demo.service';

@Component({
    selector: 'app-salesmen-page',
    templateUrl: './salesmen-page.component.html',
    styleUrls: ['./salesmen-page.component.css']
})
export class SalesmenPageComponent implements OnInit {

    displayedColumns = ['id', 'name', 'color'];
    people: ExampleDatapoint[] = [];

    constructor(private peopleDemoService: PeopleDemoService) { }

    ngOnInit(): void {
        this.fetchPeople();
    }

    fetchPeople(): void{
        this.peopleDemoService.getPeople().subscribe((response): void => {
            if (response.status === 200){
                this.people = response.body;
            }
        });
    }

}
