<template>
  <section class="card my-3">
    <div class="card-header d-flex justify-content-between align-items-center">
      <p class="card-title h4 fw-light">
        {{ meeting.MeetingName }}
      </p>
    </div>

    <div class="card-body">
      <dl class="row">
        <dt class="col-sm-4 col-lg-3">Date/time</dt>
        <dd class="col-sm-8 col-lg-9">
          <strong class="mark">
            {{ meetingDate }}
            to
            {{ meeting.EndTime }}
          </strong>
        </dd>

        <dt class="col-sm-4 col-lg-3">Meeting type</dt>
        <dd class="col-sm-8 col-lg-9">
          {{ meeting.MeetingType }}
        </dd>

        <dt class="col-sm-4 col-lg-3">Location</dt>
        <dd class="col-sm-8 col-lg-9">
          {{
            meeting.Location || 'N/A - Virtual meeting - no physical location'
          }}
          <small v-if="meeting.ForCommitteeMembersOnly" class="fw-bold">
            (for committee members only, no general public admitted)
          </small>
        </dd>

        <dt class="col-sm-4 col-lg-3">Method</dt>
        <dd class="col-sm-8 col-lg-9">
          {{ meeting.Method }}
        </dd>

        <dt class="col-sm-4 col-lg-3">Purpose</dt>
        <dd class="col-sm-8 col-lg-9">
          {{ meeting.Purpose }}
        </dd>

        <dt class="col-sm-4 col-lg-3">Contact</dt>
        <dd class="col-sm-8 col-lg-9">
          For more information, including any questions before or after the
          public meeting, contact <strong>{{ meeting.ContactName }}</strong> at
          <strong>{{ meeting.ContactPhone }}</strong> or by email at
          <a href="mailto:procurement@hcfl.gov">procurement@hcfl.gov</a>.
        </dd>

        <template v-if="meeting.OptionalMeetingNotice">
          <dt class="col-sm-4 col-lg-3">Meeting Notice</dt>
          <dd class="col-sm-8 col-lg-9">
            <div class="d-grid gap-2 d-sm-block">
              <a
                v-for="file in meeting.OptionalMeetingNotice"
                :key="file.id"
                :href="file.url"
                class="btn btn-sm btn-outline-dark"
                target="_blank"
              >
                <!--  -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-earmark"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
                  />
                </svg>
                <!--  -->
                {{ file.filename }}
              </a>
            </div>
          </dd>
        </template>
      </dl>

      <footer v-if="meeting.PublicLink" class="d-grid gap-2 d-xs-block">
        <a
          :href="meeting.PublicLink"
          target="_blank"
          class="btn btn-outline-primary"
          :title="`View meeting - ${meetingDate}`"
          :aria-label="`View meeting - ${meetingDate}`"
        >
          <!--  -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-link-45deg"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
            />
            <path
              d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
            />
          </svg>
          <!--  -->

          View Meeting
        </a>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    meeting: {
      type: Object,
      required: true,
    },
  },

  setup() {
    return {}
  },

  computed: {
    meetingDate() {
      return new Date(this.meeting.StartTime).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
    },
  },
}
</script>
