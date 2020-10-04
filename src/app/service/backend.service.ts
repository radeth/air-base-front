import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AirbaseDto} from "../model/airbase-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiUrl: string = "http://localhost:8080/";
  airbaseUrl: string = this.apiUrl + "airbase/";

  constructor(private httpClient: HttpClient) {

  }

  getAllAirbase() {
    const getAllUrl = this.airbaseUrl + "find_all";
    return this.httpClient.get(getAllUrl)
  }

  getAirbaseByid(id: number): Observable<AirbaseDto>{
    return this.httpClient.get<AirbaseDto>(this.airbaseUrl + id.toString())
  }

}
