import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Output() onSelectPage = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  linkClicked(ev) {
    console.log('ev', ev.target.innerText);
    this.onSelectPage.emit(ev.target.innerText);
  }
}
