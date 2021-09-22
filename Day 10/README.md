# To connect to aws instance

## We have to generate a key-value pair while connecting to aws instance.
## In this case it is test.pem

## We have to give read permission to the .pem file generated.
```bash
chmod 400 test.pem
```
## Through ssh we can connect to the ubuntu aws instance through terminal.
```bash
ssh -i "test.pem" ubuntu@ec2-52-14-12-120.us-east-2.compute.amazonaws.com
```
## To install nvm over ubuntu on aws
```bash
sudo apt install curl
```
```bash
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
```
```bash
source ~/.profile
```
```bash
nvm install node 
```
## To install particular version of node
```bash
nvm install 15.14.0
```

## To check the list of nvm installed
```bash
nvm ls
```
```bash 
mkdir Devsnest && cd Devsnest
```
```bash
mkdir express-test
```
```bash
cd express-test/
```
```bash
npx express-generator
```
```bash
npm install && DEBUG=express-test:* npm start
```

### This will start the server on port 3000 by default which we need to open on the aws instance.

### To continuously run the server we need to install the forever package.