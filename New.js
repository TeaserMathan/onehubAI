name: Automate onehubAI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout this repo
        uses: actions/checkout@v3

      - name: Clone onehubAI repo
        run: git clone https://github.com/TeaserMathan/onehubAI.git

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          cd onehubAI
          if [ -f package.json ]; then npm install; fi

      - name: Build project
        run: |
          cd onehubAI
          if grep -q '"build"' package.json; then npm run build; fi

      - name: Run tests
        run: |
          cd onehubAI
          if grep -q '"test"' package.json; then npm test; fi