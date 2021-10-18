require 'rack'
require 'byebug'

# [status code, headers, content]
first_app = Proc.new do
  ['200', {'Content-Type' => 'text.html'}, ['This is our first app']]
end

redirect_app = Proc.new do
  ['302', {'Content-Type' => 'text.html', 'Location' => 'https://www.google.com'}, []]
end

less_basic_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res.write('Hello World')
  res.finish
end

# server in rack namespace
# Rack::Server.start({
#   app: less_basic_app,
#   Port: 3000
# })

# class MyController
#   def self.call(env)
#     req = Rack::Request.new(env)
#     res = Rack::Response.new

#     # giving to check req path
#     if req.path == '/cats'
#       res.write('This is our cats page! :3')
#     elsif req.path == '/dogs'
#       res.status = 302
#       res.location = '/cats'
#     elsif req.path == '/html'
#       res.write("<h1>HTML is really just a string </h1>")
#     else
#       res.write("Hello World")
#     end
#     res.finish
#   end
# end

class MyController
  def self.call(env)
    self.new(env).execute
  end

  attr_reader :req, :res
  
  def initialize(env)
    @req = Rack::Request.new(env)
    @res = Rack::Response.new
  end

  def execute
    # giving to check req path
    if req.path == '/cats'
      res.write('This is our cats page! :3')
    elsif req.path == '/dogs'
      res.status = 302
      res.location = '/cats'
    elsif req.path == '/html'
      res.write("<h1>HTML is really just a string </h1>")
    else
      res.write("Hello World")
    end
    res.finish
  end
end

Rack::Server.start({
  app: MyController,
  Port: 3000
})