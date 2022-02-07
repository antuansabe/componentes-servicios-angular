import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private fileService: FilesService
  ) {

  }


  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService.create({
      name: 'Antonn',
      email:'antonn@gmail.com',
      password: '1212'
    })
    .subscribe( rta => {
    console.log(rta);
    });
  }

  login() {
    this.authService.login('antonn@gmail.com','1212')
    .subscribe( rta => {
    this.token = rta.access_token;
    });
  }

  getProfile() {
    this.authService.profile(this.token)
    .subscribe( profile => {
      console.log(profile);
    });
  }

  downloadPdf() {
    this.fileService.getFile('my.pdf','https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf' )
    .subscribe()
  }


}
