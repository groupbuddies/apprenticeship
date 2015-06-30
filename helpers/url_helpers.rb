module UrlHelpers
  def image_url(source)
    data.site.url + '/apprenticeship/' + image_path(source)
  end
end
