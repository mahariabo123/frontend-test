import { Component, OnInit } from '@angular/core';
import { CrudVehicule } from '../crud-vehicule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  vehicules: any[];

  constructor(private crudVehicule: CrudVehicule, private router: Router) {
    this.vehicules=[]
    this.loadVehicules();
  }

  ngOnInit(): void {
    
  }

  loadVehicules(): void {
    this.crudVehicule.getVehicules().subscribe((data) => {
      this.vehicules = data;
    });
  }

  deleteVehicule(vehiculeId: string): void {
    this.crudVehicule.deleteVehicule(vehiculeId).subscribe((data) => {
      console.log('Véhicule supprimé avec succès :', data);
      this.loadVehicules(); // Rechargez la liste après la suppression
    });
  }

  updateVehicule(vehiculeId: string): void {
    // Rediriger vers le composant de mise à jour avec l'ID du véhicule en tant que paramètre
    this.router.navigate(['/update', vehiculeId]);
  }
}
