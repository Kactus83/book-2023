import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'cv',
    templateUrl  : './cv.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule],
    styleUrls    : ['./cv.component.scss'],
})
export class CVComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
