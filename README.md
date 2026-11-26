# Docker_Class4

## Run with Docker

Build the image and start the static site:

```sh
docker build -t docker-class4 .
docker run --rm -p 8080:80 docker-class4
```

Open [http://localhost:8080](http://localhost:8080).
