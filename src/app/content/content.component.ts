import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	dates: Date[] = []

  constructor() { }

  ngOnInit(): void {
  }

	addMore(): void {
		this.dates.push(new Date());
	}

}
