// vehicule.model.ts

export class Vehicule {
    constructor(
      public _id?: string, // L'identifiant est rendu facultatif avec '?'
      public marque?: string,
      public modele?: string,
      public annee?: number
    ) {}
  }
  