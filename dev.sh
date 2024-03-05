#!/bin/bash

SESS='code-cracker-dev'
CMD1='cd client && npm run dev'
CMD2='cd server && npm run dev'

# Create a new session named "$SESS" and run the first command
tmux new-session -d -s $SESS "$CMD1"

# Split the window vertically and run the second command
tmux split-window -v -t $SESS "$CMD2"

# Attach to the session
tmux attach -t $SESS
