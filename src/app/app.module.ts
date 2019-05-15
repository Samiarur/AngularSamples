import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { ReviewComponent } from './review/review.component';
import { ThumpnailComponent } from './review/thumpnail/thumpnail.component';
import { DescriptionComponent } from './review/description/description.component';
import { DerectivesComponent } from './super_html/derectives/derectives.component';
import { fromEventPattern } from 'rxjs';
import { InbuiltComponent } from './pipes/inbuilt/inbuilt.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    FamilyComponent,
    FatherComponent,
    SonComponent,
    ReviewComponent,
    ThumpnailComponent,
    DescriptionComponent,
    DerectivesComponent,
    InbuiltComponent,
    BadrouteComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'Pipes',
        pathMatch:'full'
      },
      {
        path:'Father',
        component:FatherComponent
      },
      {
        path:'Family',
        component:FamilyComponent,
        children:[
          {
            path:'father',
            component:FatherComponent
          },
          {
            path:'son',
            component:SonComponent
          }
        ]
      },
      {
        path:'Pipes',
        component:InbuiltComponent
      },
      {
        path:'**',
        component:BadrouteComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
