import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TimezoneService } from '../timezone.service';

interface formProps {
	utc: string;
}

@Component({
  selector: 'app-timezone-picker',
  templateUrl: './timezone-picker.component.html',
  styleUrls: ['./timezone-picker.component.css']
})
export class TimezonePickerComponent implements OnInit {

	@Output() newClockEvent = new EventEmitter<string>();

  constructor(private timezoneService: TimezoneService, private formBuilder: FormBuilder) {}

	timezones = this.timezoneService.getTimeZones();
	utcForm = this.formBuilder.group({
		utc: '-4'
	});

  ngOnInit(): void {
  }

	handleSubmit(): void {
		const value: formProps = this.utcForm.value;
		this.newClockEvent.emit(value.utc);
	}


}
