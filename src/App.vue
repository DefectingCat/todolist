<template>
  <div id="app">
    <MainTab />
  </div>
</template>

<script>
import MainTab from '@/components/content/MainTab';

export default {
  name: 'App',
  components: {
    MainTab
  }
};
</script>

<style>
@import './assets/css/base.css';
@import url('//at.alicdn.com/t/font_2359322_s9o06gjbk5m.css');
#app {
  height: 100%;
  background-image: linear-gradient(80deg, #20b2aa, #1c86ee);
}
</style>
