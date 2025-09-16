import { Inject, Injectable } from "@angular/core";
import { Hero } from "./hero";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class HeroService {
    private heroes: Hero[] = [
        { id: 1, name: 'Windstorm' },
        { id: 2, name: 'Bombasto' },
        { id: 3, name: 'Magneta' },
        { id: 4, name: 'Tornado' }
    ];

    getHeroes(): Observable<Hero[]> {
        return of(this.heroes);
    }

    getHero(id: number): Observable<Hero | undefined> {
        return of(this.heroes.find(hero => hero.id === id));
    }
}