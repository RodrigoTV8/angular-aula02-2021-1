import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaColecoesComponent } from './components/lista-colecoes/lista-colecoes.component';
import { LivroComponent } from './components/livro/livro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaColecoesComponent,
    LivroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
