class StartContainer
  include UseCase

  def call(user, gist_uid)
    gist = user.gists.find_by!(uid: gist_uid)

    host    = select_best_host
    client  = Client.new(host.address)

    data = client.run(files_for(gist))

    gist.update!(
      host: host,
      container_id:   data["id"],
      container_port: data["ports"]["5000"]
    )

    gist
  end

  protected

  def files_for(gist)
    {"main" => gist.content} # TODO: Add support for multiple files
  end

  def select_best_host
    Host.first # TODO: Make it real
  end
end
