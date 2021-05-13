import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Booking } from '../commonClasses/booking';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl;
  // public loggedIn=false;
  authAdmin(data:any){
    return this.http.post(`${this.baseUrl}/authAdmin`, data, this.createHeader('application/json')).toPromise()
  }
  getUser(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAllUsers/${id}`);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAllUsers`);
  }
  createUser(data:any){
    return this.http.post(`${this.baseUrl}/addUser`, data, this.createHeader('application/json')).toPromise()
  }
  private createHeader(contentType: string): any {
    return { headers: new HttpHeaders({ 'Content-Type': contentType }), responseType: 'text' };
  }
  /////////RITESH
  baseURL='http://ec2-3-108-66-146.ap-south-1.compute.amazonaws.com:8080/';

  public checkAvailability(): Observable<any> {
    return this.http.get<any>(
      this.baseURL + 'findAllRooms'
    );
  }
  public bookRoom(booking: Booking): Observable<any> {
    return this.http.post<any>(
      this.baseURL+'addBooking ',
      booking
    );
  }
  public getWalletAmount(id:any): Observable<any> { 
    return this.http.get<any>(
      this.baseURL + 'findAllUsers/'+id
    );
  }
  public getBookings(): Observable<any> { 
    return this.http.get<any>(
      this.baseURL + 'findAllBookings'
    );
  }
  public checkBooking(): Observable<any> { //pass user id
    return this.http.get<any>(
      this.baseURL + 'findAllBookings/{id}'
    );
  }
}
