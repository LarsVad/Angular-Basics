import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <p>
      about works!
    </p>

    <p> {{ title   }}   </p>

  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  title = "overskrift"

  constructor() { }

  ngOnInit(): void {
  }

}
