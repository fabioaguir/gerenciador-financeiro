import { BreakpointObserver } from "@angular/cdk/layout";
import { computed, inject, Injectable, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SidenavVisibilityStore {
    private state = signal(false);

    isVisible = computed(() => this.state());

    toggle() {
        this.state.update((value) => !value);
    }

    close() {
        this.state.set(false);
    }
}