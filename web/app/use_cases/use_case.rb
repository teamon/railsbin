module UseCase
  def self.included(base)
    base.extend ClassMethods
  end

  module ClassMethods
    def call(*args, &block)
      new.call(*args, &block)
    end
  end
end
