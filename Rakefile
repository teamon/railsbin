namespace :build do
  desc "Build railsbin/core docker image"
  task :core do
    sh "docker build -t railsbin/core core"
  end

  desc "Build teamon/railsbin-web docker image"
  task :web do
    Dir.chdir("web") do
      sh <<-SH
        docker run --rm -it -v #{Dir.pwd}:/app -w /app iron/ruby:dev sh -c '\
          bundle config --local build.nokogiri --use-system-libraries && \
          bundle install --path .bundle --clean --deployment \
                         --without development test --jobs 4'
      SH

      sh <<-SH
        docker build -t teamon/railsbin-web .
      SH
    end
  end

  desc "Publish teamon/railsbin-web docker image"
  task :publish do
    sh <<-SH
      docker push teamon/railsbin-web
    SH
  end
end
