import { UserService } from "./../services/user.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  Movies: any = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    return this.userService.getMovies().subscribe((data: {}) => {
      this.Movies = data;
    });
  }
}
