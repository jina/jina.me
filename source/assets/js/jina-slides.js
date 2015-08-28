//= require ./vendor/jquery
//= require ./vendor/plugins
//= require ./vendor/jquery.balancetext
//= require ./vendor/reveal-js/lib/head.min
//= require ./vendor/reveal-js/reveal

Reveal.initialize({
  width: "90%",
  height: "100%",
  controls: true,
  progress: true,
  history: true,
  center: true,
  theme: Reveal.getQueryHash().theme,
  transition: Reveal.getQueryHash().transition || "fade",
  dependencies: [
    {
      src: '/assets/js/vendor/reveal-js/lib/classList.js',
      condition: function() {
        return !document.body.classList;
      }
    },
    {
      src: '/assets/js/vendor/reveal-js/plugin/markdown/marked.js',
      condition: function() {
        return !!document.querySelector( '[data-markdown]' );
      }
    },
    {
      src: '/assets/js/vendor/reveal-js/plugin/markdown/markdown.js',
      condition: function() {
        return !!document.querySelector( '[data-markdown]' );
      }
    },
    {
      src: '/assets/js/vendor/reveal-js/plugin/highlight/highlight.js',
      async: true,
      condition: function() {
        return !!document.querySelector( 'pre code' );
      },
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    },
    {
      src: '/assets/js/vendor/reveal-js/plugin/zoom-js/zoom.js',
      async: true
    },
    {
      src: '/assets/js/vendor/reveal-js/plugin/notes/notes.js',
      async: true
    }
  ]
});
