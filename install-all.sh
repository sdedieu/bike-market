#!/bin/bash

# Get the list of child directories
child_directories=$(find . -maxdepth 1 -type d -not -path "./node_modules" -not -path ".")

echo "Installing dependencies in root..."
npm install
echo "Done installing in root."
echo "------------------------"

# Iterate over each child directory and run npm install
for dir in $child_directories; do
  if [ -e "$dir/package.json" ]; then
    echo "Installing dependencies in $dir..."
    (cd "$dir" && npm install)
    echo "Done installing in $dir."
    echo "------------------------"
  fi
done
