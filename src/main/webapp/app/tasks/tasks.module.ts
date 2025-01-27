import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSearchComponent } from './task-search/task-search.component';

@NgModule({
  declarations: [
    TaskFormComponent,
    TaskListComponent,
    TaskSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    TaskFormComponent,
    TaskListComponent,
    TaskSearchComponent
  ]
})
export class TasksModule {
}
