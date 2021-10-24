import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nube',
  templateUrl: './nube.component.html',
  styleUrls: ['./nube.component.css']
})
export class NubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [
    "Hello", "world", "normally", "you", "want", "more", "words",
    "than", "this"].map(function (d) {
      return { text: d, value: 10 + Math.random() * 90};
    })
}
