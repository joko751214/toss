<template>
  <div class="layout">
    <div class="header">
      <div class="hamburger" @click.stop="store.openSidebar()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <Nav
      class="nav"
      v-click-outside="close"
      :class="store.open ? 'open' : ''"
      :menuData="menuData"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { useStatusStore } from '../stores/status';
  import Nav from './Nav.vue';

  const store = useStatusStore();

  const openStatus = ref(false);

  const close = item => {
    if (!item) return store.closeSidebar();
  };

  const menuData = [
    {
      key: '64f',
      text: '好喝黑糖',
      children: [
        {
          key: '445',
          text: '黑糖鮮奶',
          children: [
            {
              key: '37a',
              text: '黑糖珍珠鮮奶'
            },
            {
              key: 'feb',
              text: '黑糖芋圓鮮奶'
            },
            {
              key: '59c',
              text: '黑糖蒟蒻鮮奶'
            }
          ]
        },
        {
          key: '29e',
          text: '黑糖冬瓜',
          children: [
            {
              key: 'ac3',
              text: '黑糖冬瓜牛奶'
            },
            {
              key: 'ca0',
              text: '黑糖冬瓜珍珠'
            }
          ]
        }
      ]
    },
    {
      key: '6c3',
      text: '茶',
      children: [
        {
          key: '5dc',
          text: '烏龍綠'
        },
        {
          key: 'b5f',
          text: '綠茶'
        },
        {
          key: 'b09',
          text: '紅茶'
        },
        {
          key: '887',
          text: '青茶'
        }
      ]
    },
    {
      key: 'c81',
      text: '咖啡',
      children: [
        {
          key: 'e02',
          text: '黑咖啡',
          children: [
            {
              key: 'd20',
              text: '濃縮咖啡'
            },
            {
              key: '1f8',
              text: '美式咖啡'
            }
          ]
        },
        {
          key: 'd7a',
          text: '牛奶咖啡',
          children: [
            {
              key: 'c09',
              text: '拿鐵',
              children: [
                {
                  key: 'db2',
                  text: '黑糖拿鐵'
                },
                {
                  key: '9f6',
                  text: '榛果拿鐵'
                },
                {
                  key: 'b61',
                  text: '香草拿鐵'
                }
              ]
            },
            {
              key: '9ac',
              text: '卡布奇諾'
            },
            {
              key: 'ce8',
              text: '摩卡'
            }
          ]
        }
      ]
    }
  ];
</script>
<style lang="scss">
  .layout {
    overflow: hidden;
    position: relative;
  }
  .header {
    display: flex;
    justify-content: end;
    height: 50px;
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
