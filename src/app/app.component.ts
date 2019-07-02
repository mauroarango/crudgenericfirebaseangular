import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servicios a Domicilio';
  description = 'Solicite su Servicio';

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase){
    this.items = db.list('items').valueChanges();
  }


  onSubmit() {
    this.db.list('items').push({content: this.itemValue});
    this.itemValue = '';
  }
}
