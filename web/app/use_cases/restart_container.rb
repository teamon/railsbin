class RestartContainer
  include UseCase

  def call(user, gist_uid)
    # TODO: Refactor this to stop in the background for faster response
    #       Also no need to make so much db queries here, but fixing this will
    #       require refactoring of Stop/Start Container use cases
    StopContainer.call(user, gist_uid)
    StartContainer.call(user, gist_uid)
  end
end
