# Portfolio-Website

Dylan wozny's static portfolio website

SRC COMPILES INTO PUBLIC. DEV ON SRC THEN UPLOAD PUBLIC TO SERVER

## SASS

Using cmd line for sass compiling. No extension.

compile command: 'npm start'

PUBLIC FOLDER NOTE: Js seems to be copying over now...

Json dependencies from https://thinkdobecreate.com/articles/minimum-static-site-sass-setup/

STYLE GUIDE USED: Airbnb + BEM

https://google.github.io/styleguide/htmlcssguide.html

AIRBNB: https://github.com/airbnb/css

## GITHUB

step 1: git add .

step 2: git commit -m ""

step 2: git push -u origin main

## DEV Dependencies

SVGO - cleaning up inline svg code. Like removing xmlns

https://github.com/svg/svgo

svgo -f ./src/assets/svgs -o ./src/assets/img

## Squoosh CLI

command

// compress all images in the directory

squoosh-cli --mozjpeg '{quality:50}' -d out ./

## BEM Main Rules

### .ListingCard

is the “block” and represents the higher-level component

### .ListingCard\_\_title

is an “element” and represents a descendant of .ListingCard that helps compose the block as a whole.

### .ListingCard--featured

is a “modifier” and represents a different state or variation on the .ListingCard block.

### Js Hooks

We recommend creating JavaScript-specific classes to bind to, prefixed with .js-:

<button class="btn btn-primary js-request-to-book">Request to Book</button>

### Border

Use 0 instead of none to specify that a style has no border

### Nested selectors

Do not nest selectors more than three levels deep!

### Variables

Prefer dash-cased variable names (e.g. $my-variable)

### Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity
