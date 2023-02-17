import { Component } from '@angular/core';
import { myApplication } from '../applications/application.module';

@Component({
  selector: 'app-job-logged',
  templateUrl: './job-logged.component.html',
  styleUrls: ['./job-logged.component.css']
})
export class JobLoggedComponent {
  Applications : myApplication[] = [

    new myApplication('../../../assets/black.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),

     new myApplication('../../../assets/BMW.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),

    new myApplication('../../../assets/Bond.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),

     new myApplication('../../../assets/fendi.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),

     new myApplication('../../../assets/horse.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),
  ]
}
