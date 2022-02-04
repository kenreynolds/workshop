import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
    currentPerson: string = '';

    constructor(private peopleService: PeopleService) { }

    ngOnInit(): void {
        this.fetchPeople();
    }

    fetchPeople() {
        this.peopleService.getPeople().subscribe(people => {
            // A good next step would be to setup an array that you can loop through
            // in your template to display some set of data using ngFor.
            const peopleArray = [];

            peopleArray.push(people.results);
            peopleArray.forEach((person: any) => {
                this.currentPerson = person[0].name;
            });
        });
    }
}
