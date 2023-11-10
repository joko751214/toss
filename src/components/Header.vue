<template>
  <div class="layout">
    <div class="header">
      <div class="hamburger" @click.stop="store.openMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <Nav :class="store.open ? 'open' : ''" v-click-outside="close" />
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { useStatusStore } from '../stores/status';
  import Nav from './Nav.vue';

  const store = useStatusStore();

  const openStatus = ref(false);

  const close = item => {
    if (!item) return store.closeMenu();
  };
</script>
<style lang="scss">
  .layout {
    overflow: hidden;
    position: relative;
  }
  .header {
    display: flex;
    justify-content: end;
  }
  .hamburger {
    width: 50px;
    padding: 5px 0;
    position: absolute;
    top: 5px;
    right: 5px;
    background: #80808024;
    border-radius: 5px;
    border: 1px solid #000;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      display: block;
      height: 2px;
      width: 20px;
      margin: 3px 0;
      background: #000;
      border-radius: 10px;
    }
  }
</style>
<script>
  export default {
    name: 'Header'
  };
</script>
