<template>
<div class="business-data">
  <p>这是商务数据页</p>
  <header>
    <nav class="console-nav">
      <div class="nav-title"></div>
      <div class="nav-list"></div>
      <div class="nav-search"></div>
      <div class="nav-right"></div>
    </nav>
  </header>
  <section>
    <div class="bread"></div>
    <div class=""></div>
  </section>
  <main>
    <aside class="panel left main">
      <router-view></router-view>
    </aside>
    <aside class="panel right"></aside>
  </main>
</div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="less">
.business-data{
  header{
    nav{
      height:55px;
      width: 1920px;
      background-color: #3396fe;
    }
  }
}
</style>
