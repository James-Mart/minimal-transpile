#!/bin/bash

cargo component new --lib --name wasm ./wasm
sed -i 's/"Hello, World!".to_string()/println!("hello world"); "hello world".to_string()/' ./wasm/src/lib.rs
