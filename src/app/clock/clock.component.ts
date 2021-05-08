import { Component, OnInit, OnDestroy, Input } from '@angular/core';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

	@Input() date!: Date;
	@Input() utc!: string;

	updateTime = () => {
		this.date = new Date();
	}

	intervalId = setInterval(this.updateTime, 200);

  constructor() {}

  ngOnInit(): void {
  }

	OnDestroy(): void {
		clearInterval(this.intervalId);
	}

}
