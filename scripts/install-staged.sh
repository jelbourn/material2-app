#!/usr/bin/env bash
set -ex

rm -rf ./node_modules/@angular/material
mkdir -p ./node_modules/@angular/material
cp -r ~/material2/dist/@angular/material ./node_modules/@angular
