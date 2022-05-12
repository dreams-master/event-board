<template>
    <div class="bg-slate-400 m-4 rounded-lg p-4">
        <div>{{ event.date }}</div>
        <div>{{ event.title }}</div>
        <div>{{ event.body }}</div>
    </div>
</template>

<script setup>
defineProps({
    event: Object
});
</script>

<style>
</style>
