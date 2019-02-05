import { NgModule , SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
import {loadSvgResources} from '../svg.util';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
SidebarComponent
],
imports: [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  HttpClientModule
],
  exports: [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  HttpClientModule
]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CommonModule,
              ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw  new Error('模块已经存在');
    }
    loadSvgResources(ir, ds);
  }
}
