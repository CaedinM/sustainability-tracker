import { Component } from '@angular/core';
import { ActionListComponent } from './components/action-list/action-list.component';
import { ActionFormComponent } from './components/action-form/action-form.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Ensure app.component is also standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ActionListComponent, ActionFormComponent] // ✅ Import the standalone components
})
export class AppComponent {
  title = 'Sustainability Tracker';
}