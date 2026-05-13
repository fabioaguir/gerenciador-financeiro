import { HttpInterceptorFn } from "@angular/common/http";
import { LoggedInUserStoreService } from "../stores/logged-in-user-store.service";
import { inject } from "@angular/core";
import { AuthTokenStorageService } from "../service/auth-token-storage.service";


export const setAuthTokenInterceptor: HttpInterceptorFn = (req, next) => {

    const loggedInUserStore = inject(LoggedInUserStoreService);

    if (!loggedInUserStore.isLoggedIn()) {
        return next(req);
    }

    const token = inject(AuthTokenStorageService).getToken();

    return next(req.clone({
        setHeaders: {
            Authorization: token ? `Bearer ${token}` : ""
        }
    }));
}