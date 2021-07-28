#!/bin/bash

red=$(tput setaf 1)
green=$(tput setaf 2)
reset=$(tput sgr0)
# echo "${red}red text ${green}green text${reset}"

echo "${green}===> checking keyword <===${reset}"

for FILE in $(git diff --name-only --cached); do

  if [[ $FILE == *".js"* ]] || [[ $FILE == *".sh"* ]] || [[ $FILE == *".md"* ]] || [[ $FILE == *"iconfont.js"* || $FILE == *"ExamplePage"* || 　$FILE == *"min.js"* || 　$FILE == *"vendor/*"* ]]; then
    echo $FILE
    continue
  fi
  # if [[ $FILE =~ /(sf[[:alpha:]]+) ]]; then
  #     echo $FILE '组件' ${BASH_REMATCH[1]} '名称首字母须大写'
  #     exit 1
  # fi
  grep 'debugger\|console.log\|alert(' $FILE 2>&1 >/dev/null
  if [ $? -eq 0 ]; then
    echo $FILE "${red}包含：debugger|console.log|alert，请删除后再提交${reset}"
    exit 1
  fi

done
