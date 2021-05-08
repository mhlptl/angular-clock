import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

	date = new Date();

	updateTime = () => {
		this.date = new Date();
	}

	intervalId = setInterval(this.updateTime, 1000);

  constructor() {
	}

  ngOnInit(): void {
  }

	ngOnDestroy(): void {
		clearInterval(this.intervalId);
	}

}
