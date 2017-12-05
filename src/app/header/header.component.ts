import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm: string = 'disco'

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    console.log('routingf');
    this.router.navigate(['search', {term: this.searchTerm, sr: 'dd'}]);
  }

  home() {
    this.router.navigate(['home']);
  }

}
