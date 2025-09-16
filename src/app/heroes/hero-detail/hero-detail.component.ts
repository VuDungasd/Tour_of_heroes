import {Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-hero-detail",
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: "./hero-detail.component.html",
    styleUrls: ["./hero-detail.component.css"],
})
export class HeroDetailComponent implements OnInit {
    hero: Hero | undefined;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const heroId = Number(this.route.snapshot.paramMap.get("id"));
        this.heroService.getHero(heroId).subscribe(h => this.hero = h);
    }
}