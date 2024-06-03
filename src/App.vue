<template>
  <div id="app">
    <nav class="bg-blue-100 p-4 flex pl-20 gap-12 mb-8">
      <router-link to="/">Components</router-link>
      <router-link to="/drag-and-drop">Drag and Drop</router-link>
    </nav>
    <router-view class="m-20"></router-view>
  </div>
</template>
