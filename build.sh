#!/usr/bin/env bash

# extract table from UltraStar Manager - Song Report
yq -p=xml -o=xml '.html.body' index.html > src/content.html

# create clean output directory
rm -rf output
mkdir -p output

# concat html parts
cat src/header.html src/content.html src/footer.html > output/index.html

# copy additional files to output
cp src/search.js output/
cp src/style.css output/
