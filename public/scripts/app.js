/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var data = [
  {
    user: {
      name: 'Newton',
      avatars: {
        small: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
        regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
        large: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png'
      },
      handle: '@SirIsaac'
    },
    content: {
      text:
        'If I have seen further it is by standing on the shoulders of giants'
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: 'Descartes',
      avatars: {
        small: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
        regular: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
        large: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png'
      },
      handle: '@rd'
    },
    content: {
      text: 'Je pense , donc je suis'
    },
    created_at: 1461113959088
  },
  {
    user: {
      name: 'Johann von Goethe',
      avatars: {
        small: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
        regular: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
        large: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png'
      },
      handle: '@johann49'
    },
    content: {
      text: 'Es ist nichts schrecklicher als eine tätige Unwissenheit.'
    },
    created_at: 1461113796368
  }
];

function renderTweets(tweets) {
  tweets.forEach(i => {
    var tweet = createTweetElement(i);
    console.log(tweet);
    $(function() {
      $(tweet).appendTo('#tweets-container');
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
    <div class="timestamp">${tweet.created_at} days ago</div>
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

renderTweets(data);
