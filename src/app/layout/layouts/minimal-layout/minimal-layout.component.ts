import { NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minimal-layout',
  templateUrl: './minimal-layout.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
  imports      : [NgIf, RouterOutlet],
  styleUrls: ['./minimal-layout.component.scss']
})
export class MinimalLayoutComponent {

}
