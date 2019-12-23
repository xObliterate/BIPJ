import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private modalController: ModalController) { }

  async closeModal() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
