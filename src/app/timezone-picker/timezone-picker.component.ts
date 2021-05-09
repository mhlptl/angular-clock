import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TimeZone, TimezoneService } from '../timezone.service';

interface formProps {
	utc: string;
}

@Component({
  selector: 'app-timezone-picker',
  templateUrl: './timezone-picker.component.html',
  styleUrls: ['./timezone-picker.component.css']
})
export class TimezonePickerComponent implements OnInit {

	@Output() newClockEvent = new EventEmitter<TimeZone>();

  constructor(private timezoneService: TimezoneService, private formBuilder: FormBuilder) {}

	timezones = this.timezoneService.getTimeZones();
	utcForm = this.formBuilder.group({
		utc: JSON.stringify({
			"UTC_Offset": "-4",
			"name": "EDT",
			"location": "New York"
		})
	});

  ngOnInit(): void {
  }

	handleSubmit(): void {
		const value: formProps = this.utcForm.value;
		console.log(this.utcForm)
		this.newClockEvent.emit(JSON.parse(value.utc));
	}


}
