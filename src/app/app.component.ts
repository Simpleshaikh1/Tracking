import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonalInfoModalComponent } from './modals/personal-info-modal/personal-info-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myxalary-app';

  constructor(private dialogRef: MatDialog){

  }

  openDialog(){
    this.dialogRef.open(PersonalInfoModalComponent);
  }

}
