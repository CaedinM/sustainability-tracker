import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    const newAction = {
      id: Math.floor(Math.random() * 1000),
      action: this.action,
      date: this.date,
      points: parseInt(this.points, 10)
    };

    this.apiService.addAction(newAction).subscribe(() => {
      alert('Action added successfully');
      this.action = '';
      this.date = '';
      this.points = '';
    });
  }
}