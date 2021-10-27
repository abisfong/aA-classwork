function FollowToggle(el) {
  this.userId = el.dataset.userId;
  this.followState = el.dataset.initialFollowState;
  this.$toggle = $(el);
}

module.exports = FollowToggle;