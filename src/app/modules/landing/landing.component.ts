import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector     : 'landing-home',
    templateUrl  : './landing.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule],
})
export class LandingPageComponent
{
    /**
     * Constructor
     */
    constructor(private router: Router)
    {
    }
   
    navigateToHome(): void {
    this.router.navigate(['/home']);
    }
}
