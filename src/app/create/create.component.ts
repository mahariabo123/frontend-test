import { Component } from '@angular/core';
import { CrudVehicule } from '../crud-vehicule';
import { Vehicule } from '../model/vehicule.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  vehicule: Vehicule = new Vehicule();

  constructor(private crudVehicule: CrudVehicule,private router:Router) {
    
  }

  createVehicule(): void {
    console.log("tay")
    console.log(this.vehicule)
    // Vous pouvez accéder aux propriétés du formulaire directement depuis l'objet 'vehicule'
    this.crudVehicule.createVehicule(this.vehicule).subscribe((data) => {
      console.log('Véhicule créé avec succès :', data);
      // Traitez les données renvoyées par le serveur comme nécessaire
    });
    this.router.navigate(['/']);
  }
}
