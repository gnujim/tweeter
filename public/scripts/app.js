/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {
  function renderTweets(tweets) {
    $('#tweets-container').empty();
    tweets.forEach(i => {
      $(function() {
        $(createTweetElement(i)).prependTo('#tweets-container');
      });
    });
  }

  function createTweetElement(tweet) {
    return `
          <article class="tweet">
          <header>
            <a href="#">
              <img class="user-avatar" src="${tweet.user.avatars.small}"/>
            </a>
            <h2 class="user-name">${tweet.user.name}</h2>
            <a class="user-handle" href="#">${tweet.user.handle}</a>
          </header>
          <p class="tweet-content">${tweet.content.text}</p>
          <footer>
            <div class="timestamp">${moment(tweet.created_at).fromNow()}</div>
            <div class="icons">
              <a href="#">
                <i class="fa fa-flag" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fa fa-retweet" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </a>
            </div>
          </footer>
          </article>`;
  }

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(data) {
        renderTweets(data);
      }
    });
  }

  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    var tweetText = $('.new-tweet textarea').val();
    if (tweetText.length === 0) {
      alert('Empty content.');
      //append
      return;
    }
    if (tweetText.length > 140) {
      alert('Tweet must be under 140 characters.');
      //append
      return;
    }
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: function() {
        $('.new-tweet textarea').val('');
        $('.counter').text('140');
        loadTweets();
      }
    });
  });

  $('#nav-bar button').on('click', function() {
    $('.new-tweet').slideToggle(300, function() {
      $('.new-tweet textarea').select();
    });
  });

  loadTweets();
});
