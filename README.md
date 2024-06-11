# Svelte + Typescript + Webpack + Tao + Wry template

## How to build
1. Install [Node.js](https://nodejs.org/)
2. Install [Rust](https://rustup.rs/)
3. Clone this repository
4. Run `npm i` in the repository directory
5. Run `npm run build` to build the webpack bundle
6. `cd` into the src/rs directory and run `cargo build --release` to build the Rust binary in release mode OR `cargo run` to build and run the binary in debug mode

## What is `tao` and `wry`?
`tao` and `wry` are the backbone of the much bigger Tauri library for building native applications with web technologies. Think of Electron or Cordova, but written in Rust and wayyy faster. `tao` is a library for windowing and `wry` is a library for webviewing. This template uses `tao` and `wry` to create a native application with a Svelte frontend. You can easily swap out `tao` and `wry` for Tauri if you want easier access to more features but this example only focuses on getting a barebones application up and running.

## How it works
We use `webpack` with `svelte-preprocess`, `svelte-loader`, `typescript` to bundle the Svelte components (which have typescript support) into a single bundle. Using `html-webpack-plugin` and `html-inline-script-webpack-plugin` we can inline the bundle into a single HTML file. We then use the `include_str!` macro to include the HTML file in the Rust binary. The Rust binary is then built using `cargo` and the `tao` library is used for windowing while `wry` is used for the webview. The Rust binary is then run and the HTML file is loaded into the webview (without having your source code exposed to the user). 

You can also easily used the generated `index.html` directly in a browser or with Electron, Tauri, etc. if you want to test your application in a different environment.