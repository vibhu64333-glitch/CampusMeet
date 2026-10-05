#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "🚀 Starting Pehchaan • Lucknow Campus Blind Dating Web App..."
# Start server in background
ruby server.rb &
SERVER_PID=$!

sleep 1
echo "🌐 Opening http://localhost:8080 in your default browser..."
open "http://localhost:8080" 2>/dev/null || open "$DIR/index.html"

# Trap exit to kill server
trap "kill $SERVER_PID 2>/dev/null" EXIT
wait $SERVER_PID
