import { defineStore } from 'pinia';

export const useStatusStore = defineStore('status', {
  state: () => ({ open: false }),
  actions: {
    openMenu() {
      this.open = true;
    },
    closeMenu() {
      this.open = false;
    }
  }
});
