set :application, 'apprenticeship.subvisual.co'
set :repo_url, 'git@github.com:groupbuddies/apprenticeship.github.io.git'
set :stage, :production
set :branch, (ENV['DEPLOY_BRANCH'] || :master)

set :linked_dirs, %w(log)

set :scm, :middleman
set :format, :pretty
set :log_level, :debug
set :pty, true
