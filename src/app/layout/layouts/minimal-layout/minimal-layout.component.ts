import { NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingBarComponent } from 'src/app/core/components/loading-bar/loading-bar.component';

@Component({
  selector: 'minimal-layout',
  templateUrl: './minimal-layout.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
  imports      : [NgIf, RouterOutlet, LoadingBarComponent],
  styleUrls: ['./minimal-layout.component.scss']
})
export class MinimalLayoutComponent {

}
