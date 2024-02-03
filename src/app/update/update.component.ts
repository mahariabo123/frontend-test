import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudVehicule } from '../crud-vehicule';
import { Vehicule } from '../model/vehicule.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})

export class UpdateComponent implements OnInit {
  vehicule: Vehicule = new Vehicule();
  vehiculeId: string | null;

  constructor(private crudVehicule: CrudVehicule, private route: ActivatedRoute, private router: Router) {
    this.vehiculeId = null;
  }

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    this.vehiculeId = idFromRoute !== null ? idFromRoute : null;

    if (this.vehiculeId !== null) {
      this.crudVehicule.getVehicule(this.vehiculeId).subscribe((data) => {
        this.vehicule = data || new Vehicule();
      });
    }
  }

  updateVehicule(): void {
    if (this.vehiculeId !== null) {
      console.log("miditra ato");
      this.crudVehicule.updateVehicule(this.vehiculeId, this.vehicule).subscribe((data) => {
        console.log('Véhicule mis à jour avec succès :', data);
      });
      this.router.navigate(['/']);
    }
  }

  // Ajoutez cette méthode pour gérer le cas où vehicule.annee pourrait être undefined
  isNumber(value: any): value is number {
    return typeof value === 'number';
  }
}
