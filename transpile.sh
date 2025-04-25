#!/bin/bash

if [ -d "./wasm" ]; then
    echo "Removing existing wasm project..."
    rm -rf ./wasm
fi

echo "Creating wasm project..."
./create-wasm-proj.sh

echo "Building wasm component..."
cd wasm
cargo component build -r
cd ..

echo "Transpiling wasm to JavaScript..."
yarn jco transpile ./wasm/target/wasm32-wasip1/release/wasm.wasm --minify --no-nodejs-compat --base64-cutoff=4096 --valid-lifting-optimization -o ./wasm-transpiled
