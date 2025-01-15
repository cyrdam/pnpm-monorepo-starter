#!/bin/sh
cd ./.devcontainer/setup-configs

chmod +x ./setup-ssh-agent.sh
chmod +x ./setup-ssh-key.sh
./setup-ssh-agent.sh

chmod +x ./setup-git-config.sh
./setup-git-config.sh

pnpm install --offline && pnpm run build
