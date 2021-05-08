import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	dates: {date: Date, utc: string}[] = []

  constructor() { }

  ngOnInit(): void {
  }

	addMore(): void {
		this.dates.push({date: new Date(), utc: '-4'});
	}

	addNew(utc: string): void {
		this.dates.push({date: new Date(), utc: utc});
	}
}
