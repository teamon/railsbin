namespace :build do
  desc "Build railsbin/core docker image"
  task :core do
    sh "docker build -t railsbin/core core"
  end

  desc "Build teamon/railsbin-web docker image"
  task :web do
    Rake::Task["build:build_with_ruby"].invoke
    Rake::Task["build:build_with_node"].invoke

    Dir.chdir("web") do
      sh <<-SH
        sudo chown -R $USER .bundle
        docker build -t teamon/railsbin-web .
      SH
    end
  end

  task :build_with_ruby do
    Dir.chdir("web") do
      sh <<-SH
        docker run -it -v #{Dir.pwd}:/app -w /app iron/ruby:dev sh -c '\
          bundle config --local build.nokogiri --use-system-libraries && \
          bundle install --path .bundle --clean --deployment \
                         --without development test --jobs 4'
      SH
    end
  end

  task :build_with_node do
    Dir.chdir("web") do
      sh <<-SH
        docker run -it -v #{Dir.pwd}:/app -w /app -e NODE_ENV=production iron/node:dev sh -c '\
          npm install && \
          ./node_modules/.bin/webpack -p'
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
