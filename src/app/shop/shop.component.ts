import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
    public recentMovie: String;
    public cartItem: Array<String>;
    public movieList: Array<String>;

    constructor() {
        this.recentMovie = "None";
        this.cartItem = [];
        this.movieList = [
            'Batman Vs Superman',
            'Civil War',
            'Dead Pool',
            'Spiderman'
        ];
    }

    ngOnInit() {}

    selectedMovie(movie) {
        console.log(movie);
        this.recentMovie = movie;
        this.cartItem.push(movie);
    }

}
