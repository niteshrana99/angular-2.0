import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { BookListComponent } from './search-component/book-list/book-list.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SerachBoxPipe } from './serach-box.pipe';
import { FilterSearchPipe } from './filter-search.pipe';
import { ServerService } from './server.service';
import { GoogleLoginComponent } from './google-login/google-login.component';

const appRoutes:Routes = [
  {path:'',component:GoogleLoginComponent},
  {path:'books', component:SearchComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BookListComponent,
    SearchComponentComponent,
    SerachBoxPipe,
    FilterSearchPipe,
    GoogleLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
