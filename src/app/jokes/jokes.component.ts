// src/app/jokes/jokes.component.ts
import { Component, OnInit } from '@angular/core';
import { JokeService, Joke } from '../joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes: Joke[] = [];
  favorites: { [id: number]: Joke } = {};

  constructor(private jokesSvc: JokeService) {}

  ngOnInit() {
    this.loadRandom();
  }

  loadRandom() {
    this.jokesSvc.getRandomTen().subscribe(js => this.jokes = js);
  }

  loadProgramming() {
    this.jokesSvc.getJokesByType('programming').subscribe(js => this.jokes = js);
  }

  loadGeneral() {
    this.jokesSvc.getJokesByType('general').subscribe(js => this.jokes = js);
  }

  showFavorites() {
    this.jokes = Object.values(this.favorites);
  }

  toggleFavorite(j: Joke) {
    if (this.favorites[j.id]) {
      delete this.favorites[j.id];
    } else {
      this.favorites[j.id] = j;
    }
  }

  get favoriteCount() {
    return Object.keys(this.favorites).length;
  }

  isFavorite(j: Joke) {
    return !!this.favorites[j.id];
  }
}
