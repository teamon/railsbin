class GistsDashboard
  include UseCase

  Result = Struct.new(:stopped)

  def call(user)
    Result.new(stopped_gists(user))
  end

  def stopped_gists(user)
    user
      .gists
      .order("updated_at DESC")
      .limit(25)
  end
end
