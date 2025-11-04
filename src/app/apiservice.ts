import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  private http = inject(HttpClient);
  private api = "https://portfoliobackend-8g0r.onrender.com";
   
  getFeedback():Observable<any>{
    return this.http.get<any>(`${this.api}/feedbacks`);
  }
  postFeedback(data:any){
    return this.http.post(`${this.api}/feedbacks`,data);
  }
  editFeedback(data:any,id:string){
    return this.http.put(`${this.api}/feedbacks/${id}`,data);
  }
  deleteFeedback(id:string){
    return this.http.delete(`${this.api}/feedbacks/${id}`);
  }
  login(data:{email:string,password:string}):Observable<{message:string,isvalid:boolean}>{
    return this.http.post<{message:string,isvalid:boolean}>(`${this.api}/login`,data);
  }
}
