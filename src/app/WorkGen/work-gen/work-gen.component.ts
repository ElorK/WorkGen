import { Component, Input } from '@angular/core';
import { Day } from '../Models/day';
import { first } from 'rxjs';

@Component({
  selector: 'app-work-gen',
  templateUrl: './work-gen.component.html',
  styleUrls: ['./work-gen.component.css']
})
export class WorkGenComponent {
  result = "";
  firstDate = new Date();
  tuesday: Day = new Day("שלישי");
  wednesday: Day = new Day("רביעי");
  thursday: Day = new Day("חמישי");
  friday: Day = new Day("שישי");
  saturday: Day = new Day("שבת");
  sunday: Day = new Day("ראשון");
  monday: Day = new Day("שני");
  nextTuesday: Day = new Day("שלישי");
  nextWednesday: Day = new Day("רביעי");
  nextThursday: Day = new Day("חמישי");
  nextFriday: Day = new Day("שישי");
  nextSaturday: Day = new Day("שבת");
  workdays: Day[] = [
    this.tuesday,
    this.wednesday,
    this.thursday,
    this.friday,
    this.saturday,
    this.sunday,
    this.monday,
    this.nextTuesday,
    this.nextWednesday,
    this.nextThursday,
    this.nextFriday,
    this.nextSaturday
  ];
  createSchedule(workdays: Day[]) {
    let newDate = new Date(this.tuesday.date);
    this.result = "";
    workdays.forEach(workday => {
      workday.date = newDate;
      this.result += workday.getDay() + "\n";
      newDate.setDate(newDate.getDate() + 1)
    });

  }
  copyInputMessage(inputElement: any){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}

