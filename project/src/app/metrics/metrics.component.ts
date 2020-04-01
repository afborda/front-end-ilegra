import { UserService } from "./../services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-metrics",
  templateUrl: "./metrics.component.html",
  styleUrls: ["./metrics.component.scss"]
})
export class MetricsComponent implements OnInit {
  Movies: any = [];
  TopMovies: any = [];
  TopCategory: String;
  TopViews: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadMovies();
    this.loadTopViewCategory();
  }

  loadMovies() {
    return this.userService.getMovies().subscribe((data: {}) => {
      this.Movies = data;
      this.topMovies(data);
    });
  }

  loadTopViewCategory() {
    var filterSearch = {
      views: null,
      category: "topViewCategory",
      Title: null,
      Year: null,
      imdbID: null,
      Type: null,
      Poster: null
    };

    return this.userService.getFilter(filterSearch).subscribe((data: {}) => {
      this.TopCategory = Object.keys(data)[0];
      let array = Object.values(data);
      const topCategoryViews = Math.max.apply(null, array);
      this.TopViews = topCategoryViews;
    });
  }

  topMovies(value) {
    const topMovies = value.sort((a, b) => {
      return a.views > b.views ? 1 : b.views > a.views ? -1 : 0;
    });
    this.TopMovies = topMovies.reverse();
    console.log(topMovies);
  }
}
