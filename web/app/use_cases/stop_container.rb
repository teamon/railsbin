class StopContainer
  include UseCase

  def call(user, gist_uid)
    gist = user.gists.find_by!(uid: gist_uid)

    host    = gist.host
    client  = Client.new(host.address)

    client.stop(gist.container_id)

    gist.update!(
      container_id: nil,
      container_port: nil
    )

    gist
  end
end
