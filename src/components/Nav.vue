<template>
  <ul v-if="menuData.length > 0">
    <li v-for="item in menuData" :key="item.key">
      <h2
        class="has-child"
        :class="{ 'is-active': item.key === selectedTarget.key }"
        @click="toggleExpand(item)"
      >
        {{ item.text }}
      </h2>
      <Nav v-show="item.key === selectedTarget.key" :menuData="item.children" />
    </li>
  </ul>
</template>
<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    menuData: {
      type: Array,
      default: []
    }
  });

  const selectedTarget = ref({});
  const toggleExpand = item => {
    selectedTarget.value = item;
  };
</script>
<style lang="scss" scoped>
  .nav {
    height: 100vh;
    position: relative;
    right: -10px;
    background: #000;
    color: #fff;
    width: 200px;
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.25);
    z-index: 1;
    transform: translateX(380px);
    opacity: 0;
    transition: all 0.3s ease-in-out;
    &.open {
      transform: translateX(180px);
      opacity: 1;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      width: 100%;
      padding: 20px;
      transition: all 0.15s ease;
      &:hover {
        background: grey;
        transition: all 0.15s ease;
      }

      a {
        display: block;
        padding: 20px;
        width: 100%;
        height: 100%;
      }

      h2.is-active {
        color: yellow;
      }
    }
  }
</style>
