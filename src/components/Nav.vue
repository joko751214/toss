<template>
  <div class="nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
  .nav {
    height: 100vh;
    position: relative;
    right: -10px;
    background: #000;
    color: #000;
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
    ul {
      list-style: none;
      padding: 0;

      li {
        width: 100%;
        transition: all 0.15s ease;

        a {
          display: block;
          padding: 20px;
          width: 100%;
          height: 100%;
        }

        &:hover {
          background: grey;
          color: yellow;
          transition: all 0.15s ease;
        }
      }
    }
  }
</style>
<script>
  export default {
    name: 'Nav'
  };
</script>
