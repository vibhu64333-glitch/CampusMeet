require 'webrick'

root = File.expand_path(File.dirname(__FILE__))
port = 8080

server = WEBrick::HTTPServer.new(
  Port: port,
  DocumentRoot: root,
  AccessLog: [],
  Logger: WEBrick::Log.new(nil, WEBrick::BasicLog::WARN)
)

trap('INT') { server.shutdown }

puts "=========================================================="
puts "  PEHCHAAN (पहचान) • LUCKNOW CAMPUS BLIND DATING APP"
puts "  Serving at: http://localhost:#{port}"
puts "  Exclusively for Lucknow College Students"
puts "=========================================================="

server.start
