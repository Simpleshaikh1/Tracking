import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonalInfoModalComponent } from '../../modals/personal-info-modal/personal-info-modal.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  
    title = 'myxalary-app';
  
    constructor(private dialogRef: MatDialog){
  
    }
  
    openDialog(){
      this.dialogRef.open(PersonalInfoModalComponent);
    }
  
  
}
