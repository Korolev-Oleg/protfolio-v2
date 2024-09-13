#!/usr/bin/env bash
if git show-ref --quiet refs/heads/gh-pages; then
  git branch -D gh-pages
  echo "deleted branch gh-pages"
fi

git push origin --delete gh-pages
echo "deleted remote branch gh-pages"

git checkout -b gh-pages
echo "created branch gh-pages"
wait 5

echo "start building"

npm install
npm run build
echo "build completed"
wait 5

echo "start deploying"
find . -mindepth 1 -maxdepth 1 ! -name 'dist' ! -name '.git' ! -name 'node_modules' ! -name '.idea' ! -name '.gitignore' -exec git rm --cached -r {} +
find . -mindepth 1 -maxdepth 1 ! -name 'dist' ! -name '.git' ! -name 'node_modules' ! -name '.idea' ! -name '.gitignore' -exec rm -rf {} +
cp -r ./dist/* .

# shellcheck disable=SC2035
git add *
git commit -m 'update gh-pages'
git push origin gh-pages
git checkout main
git reset --hard
echo "deployed finished"
