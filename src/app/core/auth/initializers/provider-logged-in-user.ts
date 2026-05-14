import { inject, provideAppInitializer } from "@angular/core";
import { of } from "rxjs";
import { LoginFacadeService } from "../facades/login-facade.service";
import { AuthTokenStorageService } from "../service/auth-token-storage.service";
import { LoggedInUserStoreService } from "../stores/logged-in-user-store.service";

export function provideLoggedInUser() {
    return provideAppInitializer(() => {

        const loggedInUserStore = inject(LoggedInUserStoreService);

        if (!inject(AuthTokenStorageService).hasToken()) {
            return of();
        }

        const authTokenStorageService = inject(AuthTokenStorageService);
        const loginFacadeService = inject(LoginFacadeService);
        const token = authTokenStorageService.getToken() as string;

        return loginFacadeService.refreshToken(token);
    });
}