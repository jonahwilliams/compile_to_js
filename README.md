# Compile-to-js 

A comparison of the file size and performance of different compile to js languages under different example applications.

## Hello World
Appends the text 'hello, world' to the document body.

| Language                  | Size (Min) |
| ------------------------- | ---------- |
| Dart (1.25.0-dev.11.0)    | 35K        |
| Elm (0.18.0)              | 65K        |
| Clojurescript (1.9.946)   | 4.6K       |
| Scala 2.12 (ScalaJS 0.6.2)| 9.9 K      |

## Methodology

### Dart
Used dart2js with --trust-type-anotations and -trust-primitives and minify: true.

### Elm
UglifyJS2 used with flags --compress and --mangle, since I couldn't find a minified/optimizied build in elm-make.

### Clojurescript
Advanced optimizations build using `lein`

### Scala.js
Built with `fullOptJS` sbt command.
