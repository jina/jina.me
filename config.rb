require 'breakpoint'
require "builder"
require 'susy'
require 'typogruby'

activate :automatic_image_sizes
activate :directory_indexes
activate :livereload
activate :relative_assets

set :css_dir,    'assets/css'
set :js_dir,     'assets/js'
set :images_dir, 'assets/img'
set :relative_links, true

compass_config do |config|
  config.output_style = :expanded
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  #activate :asset_hash
  activate :gzip

  compass_config do |config|
    config.output_style = :compressed
  end
end
