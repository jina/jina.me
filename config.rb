require "builder"
require 'active_support/core_ext/integer/inflections'

Time.zone = "US/Pacific"

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
  config.remove   = false
  config.cascade = false
  config.inline  = true
end
activate :blog do |blog|
  blog.permalink = "journal/{year}/{month}/{day}/{title}.html"
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.layout = "posts"
  blog.summary_separator = /(READMORE)/
  blog.summary_length = 250
  blog.year_link = "journal/{year}.html"
  blog.month_link = "journal/{year}/{month}.html"
  blog.day_link = "journal/{year}/{month}/{day}.html"
  blog.default_extension = ".haml"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
end
activate :blog_page do |page|
  # page.prefix = "page"
  # page.permalink = ":title.html"
  # page.sources = "pages/:title.html"
  # page.layout = "layout"
  # page.default_extension = ".markdown"
end
activate :deploy do |deploy|
  deploy.method = :git
  deploy.remote   = 'git@github.com:jina/jina.me.git'
  deploy.branch   = 'gh-pages'
end
activate :directory_indexes
activate :drafts do |drafts|
  drafts.build = true if ENV["SHOW_DRAFTS"]
end
activate :livereload

compass_config do |config|
  config.output_style = :expanded
end

Sass::Script::Number.precision = 8

page "/feed.xml",   layout: false
page "/humans.txt", layout: false
with_layout :slides do
  page "/speaking/living-design-systems/developers"
end

set :css_dir,    'assets/css'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/img'
set :js_dir,     'assets/js'
set :markdown, :tables => true,
               :autolink => true,
               :gh_blockcode => true,
               :fenced_code_blocks => true,
               :with_toc_data => true
set :markdown_engine, :redcarpet

configure :build do
  activate :asset_hash, ignore: "/assets/img/"
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
  activate :relative_assets

  compass_config do |config|
    config.output_style = :compressed
  end

  set :relative_links, true
end

ready do
  sprockets.import_asset 'vendor/reveal-js/lib/classList.js'
  sprockets.import_asset 'vendor/reveal-js/plugin/markdown/markdown.js'
  sprockets.import_asset 'vendor/reveal-js/plugin/markdown/marked.js'
  sprockets.import_asset 'vendor/reveal-js/plugin/highlight/highlight.js'
  sprockets.import_asset 'vendor/reveal-js/plugin/zoom-js/zoom.js'
  sprockets.import_asset 'vendor/reveal-js/plugin/notes/notes.js'
end
