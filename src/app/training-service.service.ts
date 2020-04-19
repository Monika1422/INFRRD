import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  public listOfTrainings = [];

  constructor() { }

  setLocalStorage(item) {
    localStorage.setItem('trainingData', JSON.stringify(item));
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('trainingData'));
  }

  addTraining(training) {
    this.listOfTrainings.push(training);
    this.setLocalStorage(this.listOfTrainings);
  }

  updateTraining(trainingModel) {
    for(let i=0;i<this.listOfTrainings.length;i++) {
      if(this.listOfTrainings[i].trainingId === trainingModel.trainingId) {
        this.listOfTrainings[i]  = trainingModel;
      } 
    }
    this.setLocalStorage(this.listOfTrainings);
  }

  findTrainigAtInstance({ trainingId, meetingRoom, date, time}) {
      return this.listOfTrainings.find(ele => 
         ele.trainingId !== trainingId && ele.meetingRoom === meetingRoom && ele.date === date && ele.time === time
      );
  }

  getAllTrainingsDepartmentWise() {
    let result = {};
    
    this.listOfTrainings = this.getLocalStorage();;
    for(let i=0;i<this.listOfTrainings.length;i++) {
      let ele = this.listOfTrainings[i];
      if(result[ele.department]) {
        result[ele.department].push(ele);
      }else {
        result[ele.department] = [ele];
      }
    }
    
    return result; 
  }

}
