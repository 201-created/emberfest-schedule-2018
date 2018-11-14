import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Schedule from 'emberfest/src/libs/cascadiajs-schedule';
import SmoothScroll from 'emberfest/src/libs/smoothscroll';
import moment from 'emberfest/src/libs/moment';

export default Route.extend({
  fastboot: service(),
  scheduler: service(),

  model() {
    return format(Schedule);
  },

  afterModel() {
    if (this.get('fastboot.isFastBoot')) {
      return;
    }

    // Scroll to current/upcoming sessions
    this.scheduler.scheduleWork('afterContentPaint', () => {
      SmoothScroll.polyfill();
      let header = document.querySelector('header');
      let pastSessions = document.getElementsByClassName('is-past');
      if (pastSessions.length) {
        let pastSession = pastSessions[pastSessions.length - 1];
        let topScrollSession =
          header.offsetHeight > pastSession.offsetHeight
            ? pastSessions[pastSessions.length - 2]
            : pastSession;
        topScrollSession.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    });
  },
});

const next = (list, index) => index + 1 < list.length && list[index + 1];

function format(schedule) {
  // Add end times based on the next session's start time
  schedule.forEach(day => {
    const date = day.date;
    day.sessions.forEach((session, index) => {
      // Convert start time to a date
      if (session.start.length === 4) session.start = '0' + session.start;
      session.start = moment(`${date}T${session.start}:00-08:00`).toDate();

      // End time is the next session's start time or the end of the day
      const nextSession = next(day.sessions, index);
      session.end = nextSession ? nextSession.start : '23:59';

      // Convert end time to a date
      if (session.end.length === 4) session.end = '0' + session.end;
      session.end = moment(`${date}T${session.end}:00-08:00`).toDate();
    });
  });

  return schedule;
}
