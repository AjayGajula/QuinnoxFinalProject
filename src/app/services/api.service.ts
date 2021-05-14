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
  
  getUser(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAllUsers/${id}`);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAllUsers`);
  }
  createUser(data:any){
    return this.http.post(`${this.baseUrl}/addUser`, data, this.createHeader('application/json')).toPromise()
  }
  resetPassword(data:any){
    return this.http.put(`${this.baseUrl}/updatePassword/${data.id}`, data, this.createHeader('application/json')).toPromise()
  }
  createBooking(data:any){
    return this.http.post(`${this.baseUrl}/addBooking `, data, this.createHeader('application/json')).toPromise()
  }
  private createHeader(contentType: string): any {
    return { headers: new HttpHeaders({ 'Content-Type': contentType }), responseType: 'text' };
  }

  addMoney(data:any){
    return this.http.put(`${this.baseUrl}/updateWallet/${data.id}`, data, this.createHeader('application/json')).toPromise()
  }
  // --------------Admin Resources------------
  authAdmin(data:any){
    return this.http.post(`${this.baseUrl}/authAdmin`, data, this.createHeader('application/json')).toPromise()
  }
  addBooking(data:any){
    return this.http.post(`${this.baseUrl}/addBooking`, data, this.createHeader('application/json')).toPromise()
  }
  // cancel room
  cancelUpdateRoom(data:any){
    return this.http.put(`${this.baseUrl}/updateRoom/${data.id}`, data, this.createHeader('application/json')).toPromise()
  }
  cancelUpdateBooking(data:any){//must recieve all fields
    return this.http.put(`${this.baseUrl}/updateBookings/${data.id}`, data, this.createHeader('application/json')).toPromise()
  }
  getBookingById(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAllBookings/${id}`);
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


  // extras
  public createRoom(data) {
    return this.http.post(`${this.baseUrl}/addRoom`, data, this.createHeader('application/json')).toPromise()
  }
  delRoomById(id: String){
    return this.http.delete(`${this.baseUrl}/deleteRoom/${id}`,  this.createHeader('application/json')).toPromise();
  }
  delBookById(id: String){
    return this.http.delete(`${this.baseUrl}/deleteBooking/${id}`,  this.createHeader('application/json')).toPromise();
  }
}
