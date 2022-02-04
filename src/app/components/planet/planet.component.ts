import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
    currentPlanet: string = '';

    constructor(private planetsService: PlanetsService) { }

    ngOnInit() {
        this.fetchPlanets();
    }

    fetchPlanets(): void {
        this.planetsService
            .getPlanets()
            .subscribe(planets => {
                console.log(planets);

                const planetsArray = [];
                planetsArray.push(planets.results);
                planetsArray.forEach((planet: any) => {
                    this.currentPlanet = planet[8].name;
                });
            });
    }
}
