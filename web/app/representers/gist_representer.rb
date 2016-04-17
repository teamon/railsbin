class GistRepresenter
  include Representer

  def render(gist)
    {
      id:       gist.id,
      name:     gist.name,
      content:  gist.content
    }
  end
end
