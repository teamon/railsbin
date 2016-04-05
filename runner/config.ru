# setup load paths
$:.unshift File.expand_path("../app", __FILE__)

# require gems
require 'rubygems'
require 'bundler/setup'
Bundler.require :default, ENV['RACK_ENV']

# require application code
require "api"

# finally start the app
run Runner::API
