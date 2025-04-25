FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# Install Rust and Cargo
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install Rust using rustup (as non-root user)
USER node
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/home/node/.cargo/bin:${PATH}"

# Install wasm32-wasip1 target
RUN rustup target add wasm32-wasip1

# Install cargo-component
RUN cargo install cargo-component@0.21.0 --locked

# Switch back to root for compatibility with dev container
USER root 