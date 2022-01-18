import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, CreateUserDTO } from '../models/user.model';
import { Auth } from '../models/auth.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = ' https://young-sands-07814.herokuapp.com/api/auth';




  constructor(
    private http: HttpClient
  ) { }

login(email: string, password: string ){
  return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password} );
}

profile( token: string){
 // const headers = new HttpHeaders();
 // headers.set('Authorization', `Bearer ${token}` );
  return this.http.get<User>(`${this.apiUrl}/profile`,{
    headers: {
      Authorization: `Bearer ${token}`,

    }
  });
  }
}
