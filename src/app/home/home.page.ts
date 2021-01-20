import { Component } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { NavController } from '@ionic/angular';
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  kullanici={password:'',email:''};
  constructor(private nav : NavController, private auth:AngularFireAuth,  private firestore: AngularFirestore,) {
   
  }
  KayitOl(kullanici){
    //console.log(kullanici);
    this.auth.createUserWithEmailAndPassword(kullanici.email, kullanici.password).then( (res) =>{
      this.firestore.collection('Kelime').doc(res.user.uid).set({wordList:[]})
      this.nav.navigateRoot('tabs')
    }).catch((err)=>{
      console.log(err)
    })
  }
  GirisYap(kullanici){
    this.auth.signInWithEmailAndPassword(kullanici.email,kullanici.password).then(()=>{
      console.log("hg")
      this.nav.navigateRoot('tabs');
    }).catch(()=>{
      console.log("fakof")
    })
  }
}
