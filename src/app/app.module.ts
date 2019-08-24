import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { ProjectContentComponent } from './projection/project-content/project-content.component';
import { MultipleProjectContentComponent } from './projection/multiple-project-content/multiple-project-content.component';
import { CompanyPageComponent } from './company/company-page/company-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProjectContentComponent,
    MultipleProjectContentComponent,
    CompanyPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
