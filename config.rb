require "builder"
require "active_support/inflector"

Time.zone = "US/Pacific"

activate :automatic_image_sizes
activate :autoprefixer do |config|
  config.cascade = true
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
activate :deploy do |deploy|
  deploy.method = :git
  deploy.remote   = 'git@github.com:jina/jina.me.git'
  deploy.branch   = 'gh-pages'
end
activate :directory_indexes
activate :livereload
activate :syntax

compass_config do |config|
  config.output_style = :expanded
end

page "/feed.xml",   layout: false
page "/humans.txt", layout: false

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
set :partials_dir, 'layouts/partials'

configure :development do
  set :debug_assets, true
end

configure :build do
  activate :asset_hash, ignore: "/assets/img/"
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :minify_javascript

  compass_config do |config|
    config.output_style = :compressed
  end

  set :relative_links, true
end
