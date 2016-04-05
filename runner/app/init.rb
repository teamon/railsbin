# configure environment
ENVied.require

# configure docker client
Docker.url = ENVied.DOCKER_HOST
Docker.validate_version!
