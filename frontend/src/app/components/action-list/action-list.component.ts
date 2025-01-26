import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-action-list',
  standalone: true, //this is to match Angular project setup
  imports: [CommonModule], // necessary import
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {
  actions: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getActions().subscribe((data) => {
      this.actions = data;
    });
  }
}