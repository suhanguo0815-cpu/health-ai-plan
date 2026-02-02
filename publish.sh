#!/bin/bash
echo "Starting deployment to Surge.sh..."
# Suggest a domain but allow surge to prompt if taken/changeable, 
# or force it if we want to be opinionated. 
# Let's force a random one to generate a link directly if they are logged in.
random_id=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 6)
domain="health-plan-${random_id}.surge.sh"

echo "Deploying to: https://$domain"
npx -y surge ./ --domain $domain
