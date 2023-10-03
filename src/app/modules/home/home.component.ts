import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector     : 'home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule],
})
export class LandingHomeComponent
{
    /**
     * Constructor
     */
    constructor(private router: Router)
    {
    }

    

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    
    /**
     * Navigate to the provided route.
     *
     * @param routePath The path of the route to navigate to.
     */
    public navigateTo(routePath: string): void {
        this.router.navigate([routePath]).then(() => {
            // Voir si ajout de code
        }).catch((error) => {
            console.error(`Failed to navigate to ${routePath}:`, error);
        });
    }
}
