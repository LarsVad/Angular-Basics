import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h1>
      Title (uppercase): {{title | uppercase }}
    </h1>

    1313 Webfoot Walk, Duckburg, Calisota
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  title = "contact"
  constructor() { }

  ngOnInit(): void {
  }

}
