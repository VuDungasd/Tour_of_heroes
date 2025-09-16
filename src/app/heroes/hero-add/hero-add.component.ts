import { Component } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-add-hero",
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: "./hero-add.component.html",
    styleUrls: ["./hero-add.component.css"],
})
export class HeroAddComponent {
    newHeroName: string = "";
    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
    ) {}

    addHero(): void {
        const name = this.newHeroName.trim();
        if (!name) return;
        this.heroService.addHero(name).subscribe(() => {
            this.heroService.getHeroes().subscribe(h => this.heroes = h);
            this.newHeroName = "";
            alert("Thêm thành công!");
        });
    }
}