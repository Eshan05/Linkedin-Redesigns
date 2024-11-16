<script setup>

import Avatar from './components/UI/Avatar.vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";
</script>

<template>
  <div class="underline">Hi</div>
  <div>
    <Avatar label="P" class="mr-2 bg-red-50" :size="12" />
    <Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
    <Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" />

    <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
    <Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
    <Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" shape="circle" />

    <Avatar icon="fa-user" class="mr-2" size="xlarge" />
    <Avatar icon="fa-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
    <Avatar icon="fa-user" style="background-color: #dee9fc; color: #1a2551" />

    <Avatar image="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" class="mr-2" size="xlarge" shape="circle" />
  </div>
</template>

<style scoped>
</style>
