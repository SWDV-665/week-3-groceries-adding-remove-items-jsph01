import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery";
  items = [
    {
      name: "milk",
      cost: 3.5,
      quantity: 2
    },
    {
      name: "bread",
      cost: 2.75,
      quantity: 1
    },
    {
      name: "bannanna",
      cost: .99,
      quantity: 3
    },
    {
      name: "sugar",
      cost: 4.95,
      quantity: 1
    }
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  async removeItem(item, index) {
    let toast = await this.toastCtrl.create({
      message: item.name + ' was removed',
      duration: 300
    });

    this.items.splice(index, 1);
    return await toast.present();
  }

  async addItem() {
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      header: "Add an item",
      inputs : [
        {
          name: 'name',
          type: 'text',
          placeholder: 'type in the name of an item'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: '0'
        },
        {
          name: 'cost',
          type: 'number',
          placeholder: 'how much does the item cost?'
        }
      ],
      buttons: [
        {
          text: 'Add',
          cssClass: 'primary',
          handler: (item) => {
            this.items.push(item);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('confirm cancel');
          }
        }
      ]
    });
    await prompt.present();
  }
}
