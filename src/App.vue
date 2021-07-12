<template>
  <main class="container-fluid">
    <div v-if="meetings.loading" class="text-center my-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else-if="meetings.data.length" class="list-group">
      <MeetingNotice
        v-for="{ id, fields } in meetings.data"
        :key="id"
        :meeting="fields"
      />
    </div>

    <div v-else class="alert alert-warning" role="alert">
      No meetings to show at this time.
    </div>
  </main>
</template>

<script>
import { meetings, fetchMeetings } from './lib'
import MeetingNotice from './components/MeetingNotice.vue'

export default {
  components: { MeetingNotice },

  setup() {
    fetchMeetings()
    return { meetings }
  },
}
</script>

<style lang="scss" src="./assets/main.scss"></style>
