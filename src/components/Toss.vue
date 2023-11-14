<template>
  <div class="toss">
    <div class="toss-container">
      <div class="toss-content" v-for="index in 9">
        <div class="toss-blink-area"></div>
        <div class="toss-ball" v-if="[1, 3, 7, 9].indexOf(index) !== -1">0</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Toss'
  };
</script>
<style lang="scss">
  .toss {
    position: absolute;
    top: 20%;

    .toss-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .toss-content {
        position: relative;
        &:nth-child(3),
        &:nth-child(5),
        &:nth-last-child(1) {
          .toss-blink-area {
            animation: twinkle 0.5s infinite;
          }
        }
        .toss-blink-area {
          width: 100px;
          height: 100px;
          margin: 10px;
          border: black solid 2px;
          background: radial-gradient(circle, rgba(113, 81, 95, 1) 81%, rgba(0, 0, 0, 1) 100%);
        }
        .toss-ball {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #a5f12b;
          position: absolute;
          text-align: center;
          line-height: 1.8;
          animation: move 2s infinite ease-out;
          z-index: 11;
        }
      }
    }
  }

  @keyframes twinkle {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }

  @keyframes move {
    0% {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    100% {
      top: 50%;
      left: 50%;
      transform: translate(800%, -50%);
    }
  }
</style>
