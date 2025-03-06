#!/bin/bash

# Set your GitLab username and email
GIT_USERNAME="your-username"
GIT_EMAIL="your_email@example.com"
GITLAB_REPO_NAME="your-repository"
GITLAB_URL="git@gitlab.com:$GIT_USERNAME/$GITLAB_REPO_NAME.git"

# Check if Git is installed
git --version &>/dev/null
if [ $? -ne 0 ]; then
  echo "Git is not installed. Installing Git..."
  sudo apt update && sudo apt install -y git
fi

# Configure Git
git config --global user.name "$GIT_USERNAME"
git config --global user.email "$GIT_EMAIL"

# Generate SSH key if not exists
SSH_KEY="$HOME/.ssh/id_rsa"
if [ ! -f "$SSH_KEY" ]; then
  echo "Generating SSH Key..."
  ssh-keygen -t rsa -b 4096 -C "$GIT_EMAIL" -N "" -f "$SSH_KEY"
  echo "SSH Key generated. Add the following key to GitLab:"
  cat "$SSH_KEY.pub"
  echo "Go to GitLab -> Settings -> SSH Keys and add this key."
fi

# Clone the repository
if [ ! -d "$GITLAB_REPO_NAME" ]; then
  echo "Cloning repository..."
  git clone "$GITLAB_URL"
  cd "$GITLAB_REPO_NAME"
else
  cd "$GITLAB_REPO_NAME"
  echo "Repository already exists. Pulling latest changes..."
  git pull origin main
fi

# Create a new file and commit changes
echo "Hello GitLab" > file.txt
git add file.txt
git commit -m "Initial commit"
git push origin main

echo "GitLab setup completed successfully!"
