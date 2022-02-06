// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class HelperService {
//   isUserLogged = new Subject<boolean>();
//   searchQuery = new Subject<string>();
//   cartStatus = new Subject<string>();
 

//   saveSession(token): void {
    
//     localStorage.setItem('token', token);
//   }

//   clearSession(): void {
//     localStorage.clear();
//   }
//   getToken(): string {
//     return localStorage.getItem('token');
//   }

//   isLoggedIn():boolean{
//     try{
//       const decoded=this.getToken();
//       if(decoded=='adminrole'){
 
//         return true
//       }else if(decoded=='userrole'){
      
//         return true
//       }
//     }catch(err){
//       return false;
//     }
//   }

//   getProfile(): any {
//     try {
//       const decoded = this.getToken();
//       if(decoded==='adminrole'){
//         return 'Admin Role'
//       }else{
//         return 'User Role';
//       }
      
//     } catch (err) {
//       return {};
//     }
//   }

//   isAdmin(): boolean {
//     try{
//       const decoded=this.getToken();
//       if(decoded=='adminrole'){
//         return true
//       }else if(decoded=='userrole'){
//         return false
//       }
//     }catch(err){
//       return false;
//     }
//   }

//   constructor() { }
// }

// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Subject } from 'rxjs';

// JWT Decoding
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  isUserLogged = new Subject<boolean>();
  searchQuery = new Subject<string>();
  cartStatus = new Subject<string>();

  saveSession(token): void {
    localStorage.setItem('token', token);
  }

  clearSession(): void {
    localStorage.clear();
  }

  getProfile(): any {
    try {
      const decoded = decode(this.getToken());
      console.log("Decoded Sub"+decoded['sub']);
      return decoded['sub'];
    } catch (err) {
      return {};
    }
  }

  isLoggedIn(): boolean {
    try {
      const decoded = decode(this.getToken());
      console.log("Decoded exp"+decoded['exp']);
      if (decoded['exp'] > Date.now() / 1000) {
        console.log("Decoded exp admin"+decoded['exp'])
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  isAdmin(): boolean {
    try {
      const decoded = decode(this.getToken());

      console.log("Decoded isAdmin"+decoded['sub']['isAdmin']);
      if (decoded['exp'] < Date.now() / 1000 || !decoded['sub']['isAdmin']) {
        return false;
      }

      return true;
    } catch (err) {
      return false;
    }
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
