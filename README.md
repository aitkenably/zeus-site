# Zeus | World's #1 Web Site #
A silly little static website used for demos. 

## Docker ##

The Dockerfile spins up an NGINX web server and copies the site folder to 
the NGINX html folder.

### Usage ###

```bash
docker build -t zeus-site .
docker run -d -p 8080:80 zeus-site
```
