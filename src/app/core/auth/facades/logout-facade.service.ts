import { inject, Injectable } from "@angular/core";
import { tap } from "rxjs";
import { AuthTokenStorageService } from "../service/auth-token-storage.service";
import { AuthService } from "../service/auth.service";
import { LoggedInUserStoreService } from "../stores/logged-in-user-store.service";

@Injectable({
    providedIn: 'root'
})
export class LogoutFacadeService {

    private readonly authTokenStorage = inject(AuthTokenStorageService);
    private readonly loggedInUserStore = inject(LoggedInUserStoreService);
    private readonly authService = inject(AuthService);

    logout() {
        return this.authService.logout().pipe(
            tap(() => {
                this.authTokenStorage.clearToken()
                this.loggedInUserStore.clearUser()
            })
        );
    }
}
