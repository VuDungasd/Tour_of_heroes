import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@Component({
    selector: "app-hero-list",
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: "./hero-list.component.html",
    styleUrls: ["./hero-list.component.css"],
})
export class HeroListComponent implements OnInit {
    heroes: Hero[] = [];
    
    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes().subscribe(h => this.heroes = h);
    }
}