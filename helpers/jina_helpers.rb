require "pathname"

module JinaHelpers
  def page_title
    title = "jina: "
    if current_page.data.title
      title << current_page.data.title
    else
      title << t("index.sub_title")
    end
    title
  end

  def ordinal_date(date)
    number = date.day.ordinalize
    ordinal = number.slice!(-2,2)

    "#{date.strftime('%A')}, #{date.strftime('%B')} #{number}<sup>#{ordinal}</sup>, #{date.strftime('%Y')}"
  end

  def button_tag(text, options={})
    content_tag(:button, {:type => "submit"}.merge(options)) { text }
  end
end
