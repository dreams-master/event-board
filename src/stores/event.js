import { defineStore } from 'pinia'

const data = {
    events: [
        { id: 1, date: "2022-5-7", title: "adfasd", body: "asdfasdfadsfasdfadsf sdafdsafasdf"},
        { id: 2, date: "2022-5-8", title: "adfasd", body: "asdfasdfadsfasdfadsf sdafdsafasdf"},
        { id: 3, date: "2022-5-9", title: "adfasd", body: "asdfasdfadsfasdfadsf sdafdsafasdf"},
        { id: 4, date: "2022-5-10", title: "adfasd", body: "asdfasdfadsfasdfadsf sdafdsafasdf"},
        { id: 5, date: "2022-5-11", title: "adfasd", body: "asdfasdfadsfasdfadsf sdafdsafasdf"},
    ]
}

export const useEventStore = defineStore({
    id: 'event',
    state: () => ({
        events: [],
        loading: false,
        error: null
    }),
    getters: {
        getEvent: (state) => {
            return (id) => state.events.filter((event) => event.id === id);
        }
    },
    actions: {
        async fetchEvents() {
            this.events = []
            this.loading = true
            try {
                this.events = data.events;
                // this.posts = await fetch('https://')
                //     .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async fetchEvent(id) {
            this.post = null
            this.loading = true
            try {
                //this.event
                // this.post = await fetch(`https://`)
                //     .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})
