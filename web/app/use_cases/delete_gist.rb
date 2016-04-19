class DeleteGist
  include UseCase

  def call(user, uid)
    gist = user.gists.find_by!(uid: uid)
    gist.destroy!
    # TODO: Use paranoia and keep it in database
    #       This will also prevent uid's being reused

    # TODO: Stop & remove all containers
  end
end
