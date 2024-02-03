import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TesthtmlComponent } from './testhtml/testhtml.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: '', component: ReadComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'test', component: TesthtmlComponent } // Redirection pour les URL non définies
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    TesthtmlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Ajoutez le module de routage à la liste des imports
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
