
# Installing PostgreSQL on Ubuntu


## Create the file repository configuration:
```bash
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```

## Import the repository signing key:
```bash
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```
## Update the package lists:
```bash
sudo apt-get update
```
## Install the latest version of PostgreSQL.
```bash
sudo apt-get -y install postgresql
```
### If we want a specific version, we can use 'postgresql-12' or similar instead of 'postgresql':
## To start postgresql
```bash 
sudo -u postgres psql
```