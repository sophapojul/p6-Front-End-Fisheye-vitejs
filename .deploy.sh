#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build --base '/p6-vitejs/'

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git checkout -b main
git checkout main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:sophapojul/p6-vitejs.git main:gh-pages

cd -