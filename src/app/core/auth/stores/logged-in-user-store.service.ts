import { computed, Injectable, signal } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class LoggedInUserStoreService {

  private readonly state = signal<User | null>(null);

  currentUser = computed(() => this.state());

  isLoggedIn = computed(() => !!this.state());

  setUser(user: User) {
    this.state.set(user);
  }

  clearUser() {
    this.state.set(null);
  }
}
