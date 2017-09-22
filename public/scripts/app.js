/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  // renderTweets function that clears tweets-container and adds new tweets
  const renderTweets = tweets => {
    $('#tweets-container').empty();
    tweets.forEach(i => {
      $(() => {
        $(createTweetElement(i)).prependTo('#tweets-container');
      });
    });
  };

  // createTweetElement function returns HTML string
  const createTweetElement = tweet => {
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
  };

  // use ajax to GET /tweets
  // on success, invoke renderTweets to add new tweet
  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: data => {
        renderTweets(data);
      }
    });
  };

  // when tweet is submitted, issue error msgs if invalid character count
  // use ajax to POST /tweets data and reset compose box
  // (used function over => to use 'this)
  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    const tweetText = $('.new-tweet textarea').val();
    if (tweetText.length === 0) {
      $('.error-msg').text('Cannot submit empty Tweet!');
      return;
    }
    if (tweetText.length > 140) {
      $('.error-msg').text('Too many characters!');
      return;
    }
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: () => {
        $('.new-tweet textarea').val('');
        $('.counter').text('140');
        loadTweets();
      }
    });
  });

  // when textarea is selected, error msg becomes blank
  $('.new-tweet textarea').on('focus', () => {
    $('.error-msg').text('');
  });

  // when compose button is clicked, slide compose box
  // and auto select textarea
  $('#nav-bar button').on('click', () => {
    $('.new-tweet').slideToggle(300, () => {
      $('.new-tweet textarea').select();
    });
  });

  // invoke to load all tweets
  loadTweets();
});
