#!/bin/bash

stamp=`date -u +%Y%m%d%H%M%S`
release="whoownsmyavailability.com-$stamp"
release_dir="whoownsmyavailability.com_releases"
path=$release_dir/$release
relink_cmd="rm ~/whoownsmyavailability.com && ln -s ~/$path ~/whoownsmyavailability.com"

rsync -rl _site/* deploy@somethingsimilar.com:~/$path
ssh deploy@somethingsimilar.com $relink_cmd
