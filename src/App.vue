<template>
    <header></header>
    <main class="m-5">
        <div class="app-title">Welcome to Opportunity</div>
        <div class="app-date">08.08.2021</div>
        <EventBoard></EventBoard>
    </main>
    <AppFooter></AppFooter>
</template>

<script setup>
import EventBoard from "./components/EventBoard.vue";
import AppFooter from "./components/AppFooter.vue";
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
