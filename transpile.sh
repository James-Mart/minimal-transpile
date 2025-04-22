#!/bin/bash

cd wasm
cargo component build -r
cd ..
yarn jco transpile ./wasm/target/wasm32-wasip1/release/wasm.wasm --minify --no-nodejs-compat --base64-cutoff=4096 --valid-lifting-optimization -o ./wasm-transpiled
