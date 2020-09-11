import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ParticipantsComponent } from './participants/participants.component';
import { CoursesComponent } from './courses/courses.component';
import { TasksComponent } from './tasks/tasks.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ParticipantsComponent,
    CoursesComponent,
    TasksComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
