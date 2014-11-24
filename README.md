# Apprenticeship

[Live version](http://groupbuddies.github.io/apprenticeship)

---

## Development Setup

### Pre-requisites

* [node.js](http://nodejs.org/)


### Setup the repo

  git clone git@github.com:groupbuddies/apprenticeship
  cd apprenticeship


### Install dependencies

  npm install
  bower install

### Get a local server running

  grunt serve

### Deploying changes to `gh-pages`

  You first have to initialize your copy of the `gh-pages` branch, to make
  deploying easier:

    # inside the apprenticeship project directory

    git clone git@github.com:groupbuddies/apprenticeship dist
    cd dist
    git checkout gh-pages

Now any changes you make to the `dist` directory can go live with:

  git add .
  git commit -m "Deploy: description of changes"
  git push origin gh-pages
