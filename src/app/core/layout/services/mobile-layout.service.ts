import { BreakpointObserver } from "@angular/cdk/layout";
import { inject, Injectable } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MobileLayoutService {
    private readonly breakpointObserve = inject(BreakpointObserver);

    isMobile() {
        const matches = this.breakpointObserve.observe('(max-width: 1280px)').pipe(
            map(state => state.matches)
        );


        return toSignal(matches, { requireSync: true });
    }
}