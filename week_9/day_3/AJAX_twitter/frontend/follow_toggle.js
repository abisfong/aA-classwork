function FollowToggle(el) {
  this.userId = el.dataset.userId;
  this.followState = el.dataset.initialFollowState;
  this.$toggle = $(el);
  this.render();
  this.handleClick();
  console.log("Creating toggle button for:");
  console.log(el);
}

FollowToggle.prototype.render = function () {
  if (this.followState === "false") {
    this.$toggle.text("Follow!");
  } else {
    this.$toggle.text("Unfollow!");
  }
  console.log(this.followState)
}

FollowToggle.prototype.handleClick = function (){
  let ogToggle = this
  this.$toggle.on('click', function(event) {
    event.preventDefault();
    function success() {
      ogToggle.followState = (ogToggle.followState === 'false' ? 'true':'false');
      ogToggle.render();
    }
    $.ajax({
      method: ogToggle.followState === 'false' ? 'POST' : 'DELETE',
      url: `/users/${ogToggle.userId}/follow`,
    }).then(success)
  })
  
}



module.exports = FollowToggle;