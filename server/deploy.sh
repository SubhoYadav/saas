#!/bin/bash
docker build --build-arg NODE_ENV=development -t server .
docker run -v $(pwd):/app:ro -p 6066:6066 -p 8089:8089 -d --name server server 