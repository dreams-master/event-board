<template>
    <div class="event-card my-4 rounded-lg drop-shadow-lg p-4">
        <div class="event-time">{{ event.date.replace(/\//g,".") }}</div>
        <div class="event-title">{{ event.title }}</div>
        <div class="event-text">{{ event.body }}</div>
    </div>
</template>

<script setup>
defineProps({
    event: Object,
});
</script>

<style>
.event-card {
    background-color: #0f05a0;
    font-family: "Inter";
    font-style: normal;
    font-size: 28px;
    line-height: 36px;
}

.event-time {
    font-weight: 900;
    color: #eb5e00;
}

.event-title {
    font-weight: 900;
    color: #ffbfab;
}

.event-text {
    font-weight: 500;
    color: #ffbfab;
}
</style>
