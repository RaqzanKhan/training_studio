import { Component } from '@angular/core';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrl: './shedule.component.scss',
})
export class SheduleComponent {
  selectedSection: string = 'first';

  selectSection(section: string): void {
    this.selectedSection = section;
  }
}
