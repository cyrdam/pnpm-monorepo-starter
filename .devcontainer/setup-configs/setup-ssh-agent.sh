#!/bin/sh

# make sure you have a ~/.ssh folder with the keys added to the agent: ssh-add ./.ssh/<your-key>

SOCKET=${SSH_AUTH_SOCK:-/tmp/ssh-agent.sock}
echo socket: $SOCKET
echo sock: $SSH_AUTH_SOCK

# Remove existing socket file if it exists
if [ -e $SOCKET ]; then
  rm -f $SOCKET
fi

# Start the agent
eval $(ssh-agent -a $SOCKET)

# Start socat to forward the SSH agent
socat UNIX-LISTEN:$SOCKET,fork EXEC:'ssh-agent -a $SOCKET' &

# ssh-add -l

# add ssh key
eval $(ssh-agent)
ssh-add ~/.ssh/id_ed25519
