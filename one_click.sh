workspaces_path=$(pwd)

function delete_image_if_exist {
  image=$(docker images "$1" -a -q)
  if [ ! "$image" == "" ]; then
    echo "deleting image: $image"
    docker rmi -f "$image"
  fi
}

for ARGUMENT in "$@"
do
   KEY=$(echo $ARGUMENT | cut -f1 -d=)
   KEY_LENGTH=${#KEY}
   VALUE="${ARGUMENT:$KEY_LENGTH+1}"
   export "$KEY"="$VALUE"
done

echo "#################"
echo "Updating source code"
echo "#################"

git submodule update --init

cd $workspaces_path/zero-code-api
git fetch
latest_branch=$(git for-each-ref --sort=-committerdate | head -n 1 | awk -F '/' '{ print $NF }')
git checkout $latest_branch
git pull origin $latest_branch

cd $workspaces_path/zero-dev-js-starter
git fetch
latest_branch=$(git for-each-ref --sort=-committerdate | head -n 1 | awk -F '/' '{ print $NF }')
git checkout $latest_branch
git pull origin $latest_branch


echo "#################"
echo "Launching"
echo "#################"
cd $workspaces_path

export JWT_SECRET=$(uuidgen)
export CRYPTO_KEY=$(uuidgen)
export MYSQL_PASSWORD=$(uuidgen)

if [ ! -f .env ]; then
  echo "" > .env
else
  if [ -s .env ]; then
    export $(cat .env | xargs)
  else
    echo ".env is empty"
  fi
fi

if [[ -z "$ZERO_CODE_API" ]]
then
  echo "Enter ZERO_CODE_API: http://localhost:2111, http://10.20.30.40:2111 or https://eventhos.foo.com"
  read _ZERO_CODE_API
  export ZERO_CODE_API=$_ZERO_CODE_API
  echo "ZERO_CODE_API=$ZERO_CODE_API" >> .env
fi

if [[ -z "$SECURITY_OAUTH2_BASE_URL" ]]
then
  echo "Enter SECURITY_OAUTH2_BASE_URL: (Horus) "
  read _SECURITY_OAUTH2_BASE_URL
  export SECURITY_OAUTH2_BASE_URL=$_SECURITY_OAUTH2_BASE_URL
  echo "SECURITY_OAUTH2_BASE_URL=$SECURITY_OAUTH2_BASE_URL" >> .env
fi

if [[ -z "$CUSTOM_SECURITY_BASE_URL" ]]
then
  echo "Enter CUSTOM_SECURITY_BASE_URL: (Horus)"
  read _CUSTOM_SECURITY_BASE_URL
  export CUSTOM_SECURITY_BASE_URL=$_CUSTOM_SECURITY_BASE_URL
  echo "CUSTOM_SECURITY_BASE_URL=$CUSTOM_SECURITY_BASE_URL" >> .env
fi

if [[ -z "$REDIRECT_FRONT_BASE_URL" ]]
then
  echo "Enter REDIRECT_FRONT_BASE_URL: (The url to the front end of the rad (2900)) "
  read _REDIRECT_FRONT_BASE_URL
  export REDIRECT_FRONT_BASE_URL=$_REDIRECT_FRONT_BASE_URL
  echo "REDIRECT_FRONT_BASE_URL=$REDIRECT_FRONT_BASE_URL" >> .env
fi

if [[ -z "$OWN_BASE_URL" ]]
then
  echo "Enter OWN_BASE_URL: (The comple base url to the horus mock itself) "
  read _OWN_BASE_URL
  export OWN_BASE_URL=$_OWN_BASE_URL
  echo "OWN_BASE_URL=$OWN_BASE_URL" >> .env
fi

# https://stackoverflow.com/a/50850881

if [ "$build" == "true" ]; then
  docker-compose down -v
  delete_image_if_exist "zero-dev"
  delete_image_if_exist "zero-code-api"
  delete_image_if_exist "mock-horus"
  docker-compose up -d --build
else
  docker-compose down && docker-compose up -d
fi
