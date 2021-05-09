import { Component, OnInit } from '@angular/core';
import { TimeZone } from '../timezone.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	dates: {date: Date, utc: TimeZone}[] = []

  constructor() { }

  ngOnInit(): void {
  }

	addNew(utc: TimeZone): void {
		this.dates.push({date: new Date(), utc: utc});
	}
}
