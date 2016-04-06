class Client
  attr_reader :address

  def initialize(address)
    @address = address
  end

  def info
    connection.get("info").body
  end

  def get(cid)
    connection.get("containers/#{cid}").body
  end

  def run(files)
    connection.post("containers", files).body
  end

  def stop(cid)
    connection.post("containers/#{cid}/stop").body
  end

  protected

  def connection
    @connection ||= Faraday.new(url: api_url) do |c|
      c.request :json

      c.response :raise_error
      c.response :logger
      c.response :json, :content_type => /\bjson$/

      c.adapter Faraday.default_adapter
    end
  end

  def api_url
    "http://#{address}:2000/api/v1"
  end
end
