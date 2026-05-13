import { inject, provideAppInitializer } from "@angular/core";
import { AuthTokenStorageService } from "../service/auth-token-storage.service";
import { tap, switchMap, of } from "rxjs";
import { AuthService } from "../service/auth.service";
import { LoggedInUserStoreService } from "../stores/logged-in-user-store.service";

export function provideLoggedInUser() {
    return provideAppInitializer(() => {

        const loggedInUserStore = inject(LoggedInUserStoreService);

        if (!inject(AuthTokenStorageService).hasToken()) {
            return of();
        }

        const authTokenStorageService = inject(AuthTokenStorageService);
        const loginService = inject(AuthService);

        const token = authTokenStorageService.getToken() as string;

        return loginService.refreshToken(token).pipe(
            tap((token) => authTokenStorageService.setToken(token.token)),
            switchMap((token) => loginService.getCurrentUser(token.token)),
            tap((user) => loggedInUserStore.setUser(user))
        );
    });
}