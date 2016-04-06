# setup load paths
$:.unshift File.expand_path("../app", __FILE__)

# require application code
require "api"

# finally start the app
run Runner::API
