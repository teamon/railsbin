class GistRepresenter
  include Representer

  def render(gist)
    render_state(gist).merge(
      uid:      gist.uid,
      name:     gist.name.to_s,
      content:  gist.content.to_s,
    )
  end

  def render_new
    render(Gist.new)
  end

  def render_state(gist)
    {
      state:    gist.state,
      endpoint: endpoint(gist)
    }
  end

  def endpoint(gist)
    if gist.host.present? && gist.container_port.present?
      "#{"192.168.99.100" || gist.host.address}:#{gist.container_port}"
    end
  end
end
