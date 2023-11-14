<template>
  <ul v-if="menuData.length > 0">
    <li v-for="item in menuData" :key="item.key">
      <h2
        :class="{ 'is-active': item.key === selectedTarget.key }"
        @click="toggleExpand($event, item)"
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
    },
    depth: {
      type: Number
    }
  });

  const level = ref(props.depth);

  const selectedTarget = ref({});
  const toggleExpand = (event, item) => {
    // 確認是否為最後一層
    if (event.target.nextElementSibling) {
      // 針對點選過的 DOM 去做顯示與否的屬性控制
      if (event.target.className.includes('is-active')) {
        event.target.className = '';
        event.target.nextElementSibling.style.display = 'none';
      } else {
        event.target.className = 'is-active';
        event.target.nextElementSibling.style.display = '';
      }
    }
    selectedTarget.value = item;
  };
</script>
<style lang="scss" scoped>
  .nav {
    height: 100vh;
    position: fixed;
    background: #000;
    top: 0;
    color: #fff;
    width: 210px;
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.25);
    z-index: 1;
    transform: translateX(380px);
    opacity: 0;
    transition: all 0.3s ease-in-out;
    z-index: 111;
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
