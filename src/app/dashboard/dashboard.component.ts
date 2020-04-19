import { Component, OnInit } from '@angular/core';
import { TrainingService } from "../training-service.service";

import * as trainingData from '../trainingData.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public openScheduleTrainingModal = false; 
  public openEditScheduleTrainingModal = false;
  public listOfBookedTrainings;
  public listOfDepartment;
  public selectedTrainingData;
  public searchByName:string

  constructor(private trainingService: TrainingService) {
    if(!this.trainingService.getLocalStorage().length) {
      this.trainingService.setLocalStorage(trainingData);
    }
    
   }

  ngOnInit() {
    this.listOfBookedTrainings = this.trainingService.getAllTrainingsDepartmentWise();
    this.listOfDepartment = Object.keys(this.listOfBookedTrainings);
  }

  ngDoCheck() {
    this.listOfBookedTrainings = this.trainingService.getAllTrainingsDepartmentWise();
    this.listOfDepartment = Object.keys(this.listOfBookedTrainings);
  }

  openScheduleModal() {
    this.openScheduleTrainingModal=true;
  }

  editScheduleTrainingModal(selectedTrainingData) {
    this.openEditScheduleTrainingModal = true; 
    this.selectedTrainingData = selectedTrainingData
  }

  closeScheduleTrainingModal(event) {
    this.openScheduleTrainingModal = event;
    this.openEditScheduleTrainingModal = event;
    this.selectedTrainingData = 0;
  }

}
