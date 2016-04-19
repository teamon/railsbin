module Representer
  def self.included(base)
    base.extend ClassMethods
  end

  module ClassMethods
    def render(*args)
      new.render(*args)
    end

    def render_many(col, *args)
      col.map {|e| new.render(e, *args) }
    end

    def method_missing(name, *args, &block)
      if public_instance_methods.include?(name)
        new.send(name, *args, &block)
      else
        super
      end
    end
  end
end
