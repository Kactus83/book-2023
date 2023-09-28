import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingService } from '../../services/loading/loading.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector     : 'loading-bar',
    templateUrl  : './loading-bar.component.html',
    styleUrls    : ['./loading-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'fuseLoadingBar',
    standalone   : true,
    imports      : [NgIf, MatProgressBarModule],
})
export class LoadingBarComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() autoMode: boolean = true;
    mode: 'determinate' | 'indeterminate';
    progress: number = 0;
    show: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private LoadingService: LoadingService)
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
        // Auto mode
        if ( 'autoMode' in changes )
        {
            // Set the auto mode in the service
            this.LoadingService.setAutoMode(coerceBooleanProperty(changes['autoMode'].currentValue));
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the service
        this.LoadingService.mode$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) =>
            {
                this.mode = value;
            });

        this.LoadingService.progress$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) =>
            {
                this.progress = value;
            });

        this.LoadingService.show$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) =>
            {
                this.show = value;
            });

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
