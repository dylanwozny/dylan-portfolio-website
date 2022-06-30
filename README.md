# May-portfolio-website-Final

Dylan wozny's static portfolio website

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
