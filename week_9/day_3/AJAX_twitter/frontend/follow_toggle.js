function FollowToggle(el) {
  this.userId = el.dataset.userId;
  this.followState = el.dataset.initialFollowState;
  this.$toggle = $(el);
  this.render();
  console.log("Creating toggle button for:");
  console.log(el);
}

FollowToggle.prototype.render = function () {
  if (this.followState === "false") {
    this.$toggle.text("Follow!");
  } else {
    this.$toggle.text("Unfollow!");
  }
}

module.exports = FollowToggle;