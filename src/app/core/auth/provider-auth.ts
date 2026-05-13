import { makeEnvironmentProviders } from "@angular/core";
import { provideLoggedInUser } from "./initializers/provider-logged-in-user";


export function prividerAuth() {
    return makeEnvironmentProviders([
        provideLoggedInUser()
    ]);
}