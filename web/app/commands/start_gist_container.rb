class StartGistContainer
  def call(gist, user)
    host    = choose_host
    client  = Client.new(host.address)

    container = Container.new(gist: gist, user: user, host: host)

    data = client.run(files_for(gist))

    container.update!(
      cid:    data["id"],
      port:   data["ports"]["5000"],
      state:  "running"
    )

    container
  end

  protected

  def files_for(gist)
    {"main" => gist.content} # TODO: Add support for multiple files
  end

  def choose_host
    Host.first # TODO: Make it real
  end
end
