import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector     : 'navigation',
    templateUrl  : './navigation.component.html',
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'navigation',
    standalone   : true
})

export class Navigation implements OnInit, OnChanges, OnDestroy {

    /**
     * Constructor
     */
    constructor(private router: Router)
    {
    }
    
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
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