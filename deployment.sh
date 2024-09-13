git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages

find . -mindepth 1 -maxdepth 1 ! -name 'dist' ! -name '.git' -exec git rm --cached -r {} +
find . -mindepth 1 -maxdepth 1 ! -name 'dist' ! -name '.git' -exec rm -rf {} +
# shellcheck disable=SC2035
git add *
git commit -m 'update gh-pages'
git push origin gh-pages
