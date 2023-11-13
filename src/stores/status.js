import { defineStore } from 'pinia';

export const useStatusStore = defineStore('status', {
  state: () => ({ open: false }),
  actions: {
    openSidebar() {
      this.open = true;
    },
    closeSidebar() {
      this.open = false;
    }
  }
});
