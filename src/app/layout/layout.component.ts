import { NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { MinimalLayoutComponent } from './layouts/minimal-layout/minimal-layout.component';

@Component({
  selector     : 'layout',
  templateUrl  : './layout.component.html',
  styleUrls    : ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
  imports      : [NgIf, EmptyLayoutComponent, MinimalLayoutComponent],
})

export class LayoutComponent {


}
