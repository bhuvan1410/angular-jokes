import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Joke } from './joke.model';

@Injectable({ providedIn: 'root' })
export class JokeService {
  private API = 'https://official-joke-api.appspot.com';

  constructor(private http: HttpClient) {}

  /** Single random joke */
  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${this.API}/jokes/random`);
  }

  getRandomTen(): Observable<Joke[]> {
    return this.http.get<Joke[]>(`${this.API}/random_ten`);
  }

  /** Ten jokes of a given category (\"programming\" or \"general\") */
  getJokesByType(type: 'programming' | 'general'): Observable<Joke[]> {
    return this.http.get<Joke[]>(`${this.API}/jokes/${type}/ten`);
  }
}
export { Joke };

