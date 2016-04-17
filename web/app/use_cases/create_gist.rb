class CreateGist
  include UseCase

  MAX_RETRIES = 3
  DEFAULT_GENERATOR = ->(){ SecureRandom.hex(5) }

  def initialize(generator = DEFAULT_GENERATOR)
    @generator = generator
  end

  def call(user, name:, content:)
    gist = user.gists.new(name: name, content: content)
    generate_uid_and_save(gist)
    gist
  end

  def generate_uid_and_save(gist, retries = 1)
    gist.uid = @generator.call
    gist.save!
  rescue ActiveRecord::RecordNotUnique => ex
    if retries < MAX_RETRIES
      generate_uid_and_save(gist, retries + 1)
    else
      raise ex, "Retries exhausted (tried #{retries} times)"
    end
  end
end
