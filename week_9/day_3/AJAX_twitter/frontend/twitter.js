const FollowToggle = require('./follow_toggle');

$(() => {
  $('.follow-toggle').each(function () {
    let followToggle = new FollowToggle(this);
  });
});