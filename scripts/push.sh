#!/bin/bash

echo push start $(date +%Y-%m-%dT%H:%M:%S)

yarn config set registry https://registry.npm.taobao.org

yarn && yarn build

yarn scp 77


