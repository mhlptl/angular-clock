import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface TimeZone {
	"UTC_Offset": string;
	"name": string;
	"location": string;
}

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

	getTimeZones() {
		return this.http.get<TimeZone[]>('/assets/timezones.json');
	}


  constructor(private http: HttpClient) { }
}
