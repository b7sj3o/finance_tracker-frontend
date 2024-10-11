#!/bin/bash

# TODO: run all tests

clear

echo "Starting bot tests..."

pytest --maxfail=5 --disable-warnings -v bot/tests/

if [ $? -eq 0 ]; then
    echo "Test passed correctly"
else
    echo "Something tests went wrong. Check logs above"
fi