GIT_HASH := $(shell git rev-parse --short HEAD)
IMAGE_NAME = shopify-app
CONTAINER_NAME = shopify-app

build:
	docker build -t eu.gcr.io/chefclub-158403/$(IMAGE_NAME):dev --build-arg GIT_HASH=$(GIT_HASH) .
	docker tag eu.gcr.io/chefclub-158403/$(IMAGE_NAME):dev eu.gcr.io/chefclub-158403/$(IMAGE_NAME):$(GIT_HASH)

shell:
	docker exec -it $(CONTAINER_NAME) /bin/sh

run:
	docker-compose up -d

stop:
	docker-compose stop
