require 'breakpoint'
require "builder"
require 'middleman-syntax'
require 'susy'
require 'typogruby'

activate :directory_indexes
activate :syntax

set :markdown, :fenced_code_blocks => true,
               :autolink => true,
               :smartypants => true
set :markdown_engine, :redcarpet
set :css_dir,    'assets/css'
set :js_dir,     'assets/js'
set :images_dir, 'assets/img'

page "/humans.txt", :layout => false
page "/index.html", :layout => :layout_2_column

with_layout :styleguide do
  page "/styleguide/*"
end



configure :development do
  activate :livereload

  compass_config do |config|
    config.output_style = :expanded
  end
end



configure :build do
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
  activate :relative_assets

  set :relative_links, true

  compass_config do |config|
    config.output_style = :compressed
  end
end
