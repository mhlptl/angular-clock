import { Component, OnInit } from '@angular/core';
import { TimezoneService } from '../timezone.service';

@Component({
  selector: 'app-timezone-picker',
  templateUrl: './timezone-picker.component.html',
  styleUrls: ['./timezone-picker.component.css']
})
export class TimezonePickerComponent implements OnInit {

  constructor(private timezoneService: TimezoneService) {}

	timezones = this.timezoneService.getTimeZones();

  ngOnInit(): void {
  }

}
