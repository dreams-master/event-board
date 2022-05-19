import { defineStore } from 'pinia'

const sheet_id = "1a81aI0Y8ViZO0tI92h2YSMqVQJ8hmNNMyMylXgvwiU4";
const api_token = "AIzaSyA-qeDXOhEeQDA0vQf7LgkF7DQtGnAtmAU";
const gsheet_url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values:batchGet?ranges=A1%3AE100&valueRenderOption=FORMATTED_VALUE&key=${api_token}`;

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
            this.events = [];
            this.loading = true;
            this.error = undefined;
            try {
                let result = await fetch(gsheet_url)
                    .then((response) => response.json());
                result = result.valueRanges[0].values;
                for (let i = 1; i < result.length; i++) {
                    let event = {};
                    event.date = `${result[i][1]} ${result[i][0]}`;
                    event.title = result[i][2];
                    event.body = result[i][3];

                    this.events.push(event);
                }
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
    }
})
