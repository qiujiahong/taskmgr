import { NgModule , SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MatToolbarModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CommonModule) {
    if (parent) {
      throw  new Error('模块已经存在');
    }
  }
}
