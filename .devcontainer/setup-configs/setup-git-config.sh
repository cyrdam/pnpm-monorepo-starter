#!/bin/sh

# Function to check and set Git configuration
check_and_set_git_config() {
  local key=$1
  local value=$2

  if git config --global --get "$key" > /dev/null; then
    echo "$key is already set."
  else
    echo "Setting $key to $value."
    git config --global "$key" "$value"
  fi
}

# Check and set Git configuration options
check_and_set_git_config "user.signingkey" "/home/node/.ssh/id_ed25519"
# check_and_set_git_config "core.editor" "code" # optional, not working in dev container, try open directly
check_and_set_git_config "commit.gpgsign" "false" # using ssh, not gpg!
check_and_set_git_config "gpg.format" "ssh" # using ssh, not gpg!
check_and_set_git_config "gpg.ssh.allowedSignersFile" "/home/node/.ssh/allowed_signers"

echo "Git configuration check and update complete."
