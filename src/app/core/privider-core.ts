import { DEFAULT_CURRENCY_CODE, LOCALE_ID, makeEnvironmentProviders } from "@angular/core";
import { prividerAuth } from "./auth/provider-auth";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from "@angular/material/snack-bar";
import { provideEnvironmentNgxMask } from "ngx-mask";
import { setAuthTokenInterceptor } from "./auth/interceptors/set-auth-token";
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from "@angular/common";

registerLocaleData(ptBr);

export function prividerCore() {
    return makeEnvironmentProviders([
        prividerAuth(),
        provideHttpClient(withInterceptors([setAuthTokenInterceptor])),
        provideEnvironmentNgxMask({
            thousandSeparator: ".",
            decimalMarker: ","
        }),
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
            } as MatSnackBarConfig
        },
        {
            provide: LOCALE_ID, useValue: 'pt'
        },
        {
            provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'
        }
    ]);
}