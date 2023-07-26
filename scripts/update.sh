#!/bin/bash

docker pull arocode/ugodelire:main

docker rm -f marcel

docker run -d -p 8888:8888 --name marcel arocode/ugodelire:main

exit 0