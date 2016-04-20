FROM iron/ruby

# install missing packages
RUN apk --update add ruby-bigdecimal ruby-bundler tzdata

# create app user
RUN adduser -S -D -H -u 1000 app

WORKDIR /app
COPY . /app

# fix file permissions
RUN chown -R app /app

# use non-root user
USER app

ENV RAILS_ENV=production

CMD ["bin/rails", "server"]
