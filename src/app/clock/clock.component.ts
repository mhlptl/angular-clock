import { Component, OnInit, OnDestroy, Input } from '@angular/core';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

	@Input() date!: Date;

	updateTime = () => {
		this.date = new Date();
	}

	intervalId = setInterval(this.updateTime, 1000);

  constructor() {}

  ngOnInit(): void {
  }

	OnDestroy(): void {
		clearInterval(this.intervalId);
	}

}
