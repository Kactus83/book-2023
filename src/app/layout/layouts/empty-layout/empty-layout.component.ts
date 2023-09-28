import { NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-empty-layout',
  templateUrl: './empty-layout.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
  imports      : [NgIf, RouterOutlet],
  styleUrls: ['./empty-layout.component.scss']
})
export class EmptyLayoutComponent {

}
