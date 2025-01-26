import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // needed for Angular standalone APIs
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-action-form',
  standalone: true, //this is to match Angular project setup
  imports: [CommonModule, FormsModule], // necessary import
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent {
  action = '';
  date = '';
  points = '';

  constructor(private apiService: ApiService) {}

  submitForm(): void {
    // create an object containing user inputs
    const newAction = {
      action: this.action.trim(), // trim leading/trailing spaces
      date: this.date,
      points: this.points ? Number(this.points) : null
    };

    // validates inputs
    if (!newAction.action || !newAction.date || newAction.points === null || isNaN(newAction.points)) {
      alert('Please fill in all fields correctly.');
      return;
    }

    // send action to backend API
    this.apiService.addAction(newAction).subscribe(() => {
      alert('Action added successfully');
      this.action = '';
      this.date = '';
      this.points = '';
    });
  }
}