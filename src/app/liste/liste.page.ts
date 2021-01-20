import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: "app-liste",
  templateUrl: "./liste.page.html",
  styleUrls: ["./liste.page.scss"],
})
export class ListePage implements OnInit {
  wordList=[];
  kullanici_id = null;
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.auth.currentUser.then((res) => {
      this.kullanici_id = res.uid;
    });
  }
  ionViewWillEnter(){
    
    if (this.kullanici_id != null) {
      this.firestore
      .collection("Kelime")
      .doc(this.kullanici_id)
      .get()
      .toPromise()
      .then((rej) => {
         this.wordList = rej.get("wordList")
      
      });
    } 
  }
}
