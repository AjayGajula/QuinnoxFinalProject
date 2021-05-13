import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
}
