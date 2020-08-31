#!/bin/sh

cd scripts
cd ../

while read line; do export "$line";
done < .env

echo "get.db.info.sh"
echo $DB_URL
