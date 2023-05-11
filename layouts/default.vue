<template>
  <div id="app">
    <nav-bar :is-scrolling="isScrolling" />
    <div id="content">
      <slot />
    </div>
    <site-footer />
  </div>
</template>

<script setup lang="ts">
const isScrolling = ref(false);

const handleScroll = (e) => {
  if (e.target.documentElement.scrollTop) {
    isScrolling.value = true;
  } else {
    isScrolling.value = false;
  }
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
#content {
  min-height: calc(100vh - $navbar-height);
}
</style>
