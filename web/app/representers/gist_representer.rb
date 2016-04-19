class GistRepresenter
  include Representer

  def render(gist)
    {
      uid:      gist.uid,
      name:     gist.name.to_s,
      content:  gist.content.to_s,
      state:    "stopped"
    }
  end

  def render_new
    {
      uid:      nil,
      name:     "",
      content:  "",
      state:    "new"
    }
  end
end
