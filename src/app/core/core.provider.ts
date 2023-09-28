import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, ENVIRONMENT_INITIALIZER, EnvironmentProviders, importProvidersFrom, inject, Provider } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CoreConfig } from './services/config/config.types';
import { CORE_CONFIG } from './services/config/config.constants';
/* import { CoreConfirmationService } from './services/confirmation'; */
import { LoadingService } from './services/loading/loading.service';
import { loadingInterceptor } from './services/loading/loading.interceptor';
import { MediaWatcherService } from './services/media-watcher/media-watcher.service';
import { PlatformService } from './services/platform/platform.service';
/* import { CoreSplashScreenService } from './services/splash-screen'; */
import { CoreUtilsService } from './services/utils/utils.service';

export type CoreProviderConfig = {
    mockApi?: {
        delay?: number;
        services?: any[];
    },
    core?: CoreConfig
}

/**
 * Core provider
 */
export const provideCore = (config: CoreProviderConfig): Array<Provider | EnvironmentProviders> =>
{
    // Base providers
    const providers: Array<Provider | EnvironmentProviders> = [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true,
            },
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill',
            },
        },
/*
        {
            provide : CORE_MOCK_API_DEFAULT_DELAY,
            useValue: config?.mockApi?.delay ?? 0,
        },
*/
        {
            provide : CORE_CONFIG,
            useValue: config?.core ?? {},
        },
/*
        importProvidersFrom(MatDialogModule),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(CoreConfirmationService),
            multi   : true,
        },
*/
        provideHttpClient(withInterceptors([loadingInterceptor])),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(LoadingService),
            multi   : true,
        },

        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(MediaWatcherService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(PlatformService),
            multi   : true,
        },
/*
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(CoreSplashScreenService),
            multi   : true,
        },
*/
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(CoreUtilsService),
            multi   : true,
        },
    ];

    // Return the providers
    return providers;
};
