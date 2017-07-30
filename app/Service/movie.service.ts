// Importing required libraries.
import { Injectable } from '@angular/core'
import { Movie, IRating } from './movie'

@Injectable()
export class MovieService {
    // Movie collection Array
    movieList: Array<Movie> = new Array<Movie>();

    /** Function to get the Movie List */
    getList() {
        return this.movieList = [];
    }

    /** To Add Movie in the List */
    addList(currentMovie: Movie) {
        this.movieList.unshift(currentMovie);
    }
}

@Injectable()
export class RatingService {
    ratings: IRating[] = [];

    /** Returns the Ratings */
    getRatings() {
       return this.ratings = [
            {id: 1, title: '*'},
            {id: 2, title: '**'},
            {id: 3, title: '***'},
            {id: 4, title: '****'},
            {id: 5, title: '*****'},
        ]
    }
}
