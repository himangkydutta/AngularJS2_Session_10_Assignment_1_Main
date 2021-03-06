// Importing required libraries.
import { Component, Injectable } from '@angular/core'
import { Movie, IRating } from '../Service/movie'
import { MovieService, RatingService } from '../Service/movie.service'
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
    selector: 'app-movie-root',
    templateUrl: '../View/movie.Component.html',
    providers: [MovieService, RatingService]
})
export class MovieComponent {
    // Binding Logic.
    currMovie: Movie = new Movie();

    // List of Movies.
    listOfMovies: Array<Movie> = new Array<Movie>();

    // Initializing the Rating
    ratings: IRating[] = [];


    // Declaring myForm of Type FormGroup
    formMovie: FormGroup;


    // Injecting services into constructor.
    constructor(private _movieService: MovieService, private _ratingService: RatingService, private _formBuilder: FormBuilder) {}

    /** Adding the Validators */
   ngOnInit() {
      this.formMovie = new FormGroup({
        imagesUrl: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.pattern('^[a-zA-Z0-9]*$'), Validators.required, Validators.maxLength(10)]),
        description: new FormControl('', [Validators.pattern('^[a-zA-Z]*$'), Validators.required, Validators.minLength(10)]),
        rating: new FormControl('', [Validators.required] ),
      });

      this.listOfMovies = this._movieService.getList();
      this.ratings = this._ratingService.getRatings();
    }

    /** To Add the Movies */
    addMovie() {
        this._movieService.addList(this.currMovie);
        this.currMovie = new Movie();
        this.formMovie.reset();
    }
}
