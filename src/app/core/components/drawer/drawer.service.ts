import { Injectable } from '@angular/core';
import { CoreDrawerComponent } from './drawer.component';

@Injectable({providedIn: 'root'})
export class CoreDrawerService
{
    private _componentRegistry: Map<string, CoreDrawerComponent> = new Map<string, CoreDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: CoreDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): CoreDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
