<template>
    <p v-if="loading">Loading events ...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="events">
        <div v-for="(event, index) in events" :key="index">
            <EventCard :event="event"></EventCard>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useEventStore } from "../stores/event";
import EventCard from './EventCard.vue';

const { events, loading, error } = storeToRefs(useEventStore());
const { fetchEvents } = useEventStore();

fetchEvents();
</script>

<style>
</style>
