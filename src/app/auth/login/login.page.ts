import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  public wavesDifference: number = 100;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(public keyboard: Keyboard,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) { }

  segmentChanged(event: any){
    if(event.detail.value === 'login'){
      this.slides.slidePrev();
      this.wavesPosition -= this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }

  async login(){
    await this.presentLoading
  }
  ngOnInit() {
  }

}
