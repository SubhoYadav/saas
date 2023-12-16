#! /bin/bash
container_to_stop=$1
if [ $container_to_stop == "own-sql" ]
then
	container_to_start="mysql"
else
	container_to_start="own-sql"
fi
docker stop $container_to_stop
docker start $container_to_start
docker ps
