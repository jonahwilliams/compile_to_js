elm-make Main.elm --output=index.js
uglifyjs --compress --mangle -- index.js > index.min.js
