import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../service/api.service';
import {Project} from '../../../model/project';
import {DashboardService} from '../../../service/dashboard.service';

@Component({
  selector: 'app-new',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  projectForm = new FormGroup({
    clientName: new FormControl('My cool client', [Validators.required]),
    titleName: new FormControl('Some project title', Validators.required)
  });

  constructor(private apiService: ApiService,
              private dashboardService: DashboardService) { }

  ngOnInit() { }

  public hasError = (controlName: string, errorName: string) => {
    return this.projectForm.controls[controlName].hasError(errorName);
  };

  public createProject() {
    const project = new Project();
    project.client = this.projectForm.value.clientName;
    project.title = this.projectForm.value.titleName;
    this.dashboardService.addProject(project);
    this.projectForm.reset();
    this.projectForm.markAsUntouched();
  };

}
