import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
@Component({
  selector: "app-feed",
  templateUrl: "./feed.page.html",
  styleUrls: ["./feed.page.scss"],
})
export class FeedPage implements OnInit {
  kelime = {i:'',t:''};
  kullanici_id = null;
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.auth.currentUser.then((res) => {
      this.kullanici_id = res.uid;
    });
  }
  Ekle(kelime) {
    console.log(kelime);

    if (this.kullanici_id != null) {
      this.firestore
      .collection("Kelime")
      .doc(this.kullanici_id)
      .get()
      .toPromise()
      .then((rej) => {
        var word = rej.get("wordList")
        console.log("2 --> ",word)
        word[word.length]=kelime;
        console.log("2 --> ",word)
        // word.put(kelime)
        this.firestore
          .collection("Kelime")
          .doc(this.kullanici_id)
          .set({ wordList: word })
          .then(() => {
            console.log("selam");
          });
      });
    } 
  }
}
