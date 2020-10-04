import {Component, OnInit} from '@angular/core';
import {BackendService} from "../service/backend.service";
import {AirbaseDto} from "../model/airbase-dto";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.backendService.getAllAirbase().subscribe((value) => {
      console.log(value);
    });

    this.backendService.getAirbaseByid(1).subscribe((value: AirbaseDto) => {
      console.log(value);
    })
  }

}
