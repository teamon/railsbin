# setup load paths
$:.unshift File.expand_path("..", __FILE__)

# require gems
require 'rubygems'
require 'bundler/setup'
Bundler.require :default, ENV['RACK_ENV']

# configure environment
ENVied.require

# configure docker client
Docker.url = ENVied.DOCKER_HOST
Docker.validate_version!

# load app
require "api"
