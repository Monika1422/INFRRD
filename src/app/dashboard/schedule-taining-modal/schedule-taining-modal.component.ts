import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrainingService } from '../../training-service.service';
import { Training } from '../../model/training';

import * as moment from 'moment';

@Component({
  selector: 'app-schedule-taining-modal',
  templateUrl: './schedule-taining-modal.component.html',
  styleUrls: ['./schedule-taining-modal.component.css']
})
export class ScheduleTainingModalComponent implements OnInit {
  @Input() openScheduleTrainingModal;
  @Input() openEditScheduleTrainingModal;
  @Input() selectedTrainingData;
  @Output() close = new EventEmitter();

  public trainingModel = new Training(Date.now(), '', '', '', '', '', '', '');
  public duration = [1, 2, 3, 4, 5, 6, 7, 8];
  public listOfdepartment = ['Department1', 'Department2', 'Department3', 'Department4'];
  public listOfMeetingRoom = ['Mars', 'Venus', 'Mercury', 'Earth', 'Jupiter', 'Saturn', 'Neptune']
  public selectedDuration;
  public trainingName: string;
  public alertMsg = '';
  public minDate = moment().format('YYYY-MM-DD');
  public maxDate = moment().add(7, 'days').format('YYYY-MM-DD');

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() { }

  ngOnChanges() {
    if (this.selectedTrainingData) {
      this.trainingModel = this.selectedTrainingData;
    }
  }

  addTraining() {
    if (!this.ifRoomAlreadyBooked(this.trainingModel)) {
      this.trainingService.addTraining(this.trainingModel);
      this.clearData();
      this.close.emit(false);

    } else {
      this.alertMsg = "Room already booked at given date and time";
    }
  }

  clearData() {
    this.trainingModel = new Training(Date.now(), '', '', '', '', '', '', '');
    this.alertMsg = '';
  }

  updateTraining() {
    if (!this.ifRoomAlreadyBooked(this.trainingModel)) {
      this.trainingService.updateTraining(this.trainingModel);
      this.clearData();
      this.close.emit(false);
    } else {
      this.alertMsg = "Room already booked at given date and time";
    }
  }

  ifRoomAlreadyBooked(trainingModel) {
    const training = this.trainingService.findTrainigAtInstance(trainingModel);
    return training ? true : false;
  }

  closeModal() {
    this.clearData();
    this.close.emit(false);
  }
}
