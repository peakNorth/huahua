

<template>
    <div id="app">
      <RouterView />
    </div>
</template>

<script setup>
import { useRouter, RouterView } from 'vue-router'
import { reactive, toRefs } from 'vue'
const router = useRouter()
const state = reactive({
  transitionName: 'slide-left'
})
router.beforeEach((to, from) => {
  if (to.meta.index > from.meta.index) {
    state.transitionName = 'slide-left' // 向左滑动
  } else if (to.meta.index < from.meta.index) {
    // 由次级到主级
    state.transitionName = 'slide-right'
  } else {
    state.transitionName = ''   // 同级无过渡效果
  }
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
