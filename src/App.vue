<template>
    <header></header>
    <main class="m-5">
        <div class="app-title">Welcome to Opportunity</div>
        <div class="app-date">{{ currentDate }}</div>
        <EventBoard></EventBoard>
    </main>
    <AppFooter></AppFooter>
</template>

<script setup>
import EventBoard from "./components/EventBoard.vue";
import AppFooter from "./components/AppFooter.vue";
import { computed, ref } from "@vue/runtime-core";
import { useEventStore } from "./stores/event";

const date = ref(new Date());
const { fetchEvents } = useEventStore();
const currentDate = computed(() => `${date.value.getDate().toString().padStart(2,"0")}.${(date.value.getMonth() + 1).toString().padStart(2, "0")}.${date.value.getFullYear()}`);

function update() {
    date.value = new Date();
    fetchEvents();
}

update();
setInterval(update, 1000 * 60 * 30);
</script>

<style>
body {
    background-color: #e8eff4;
    min-height: 100vh;
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

footer {
    margin-top: auto;
}

.app-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 62px;
    line-height: 75px;
    color: #323d4a;
}

.app-date {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 62px;
    line-height: 75px;
    color: #9aa7b1;
}
</style>
