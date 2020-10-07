import {Component, OnInit} from '@angular/core';
import {BackendService} from "../service/backend.service";
import {AirbaseDto} from "../model/airbase-dto";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  allAirbase: AirbaseDto[];
  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.backendService.getAllAirbase().subscribe((value: AirbaseDto[]) => {
      this.allAirbase = value;
    });
  }

}
