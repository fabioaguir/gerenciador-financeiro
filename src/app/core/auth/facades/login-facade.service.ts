import { inject, Injectable } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { UserCredentials } from "../interface/user-credentials";
import { tap, switchMap, pipe } from "rxjs";
import { AuthTokenStorageService } from "../service/auth-token-storage.service";
import { LoggedInUserStoreService } from "../stores/logged-in-user-store.service";
import { AuthTokenResponse } from "../interface/auth-token-response";
import { User } from "../interface/user";

@Injectable({
    providedIn: 'root'
})
export class LoginFacadeService {

    private readonly authTokenStorage = inject(AuthTokenStorageService);
    private readonly loggedInUserStore = inject(LoggedInUserStoreService);
    private readonly authService = inject(AuthService);

    login(userDetails: UserCredentials) {
        return this.authService.login(userDetails).pipe(this.createUserSession())
    }

    refreshToken(token: string) {
        return this.authService.refreshToken(token).pipe(this.createUserSession())
    }

    private createUserSession() {
        return pipe(
            tap((token: AuthTokenResponse) => this.authTokenStorage.setToken(token.token)),
            switchMap((token: AuthTokenResponse) => this.authService.getCurrentUser(token.token)),
            tap((user: User) => this.loggedInUserStore.setUser(user))
        )
    }
}
