GIT_HASH := $(shell git rev-parse --short HEAD)
IMAGE_NAME = shopify-app
CONTAINER_NAME = shopify-app-c

build:
	docker build -t eu.gcr.io/chefclub-158403/$(IMAGE_NAME):dev --build-arg GIT_HASH=$(GIT_HASH) .
	docker tag eu.gcr.io/chefclub-158403/$(IMAGE_NAME):dev eu.gcr.io/chefclub-158403/$(IMAGE_NAME):$(GIT_HASH)

prod-build:
	docker build -t eu.gcr.io/chefclub-158403/$(IMAGE_NAME):prod -f prod.Dockerfile .
	docker tag eu.gcr.io/chefclub-158403/$(IMAGE_NAME):prod eu.gcr.io/chefclub-158403/$(IMAGE_NAME):$(GIT_HASH)

shell:
	docker exec -it $(CONTAINER_NAME) /bin/bash

run:
	docker-compose up -d

prod-run:
	docker-compose -f prod.docker-compose.yml up -d

prod-stop:
	docker-compose -f prod.docker-compose.yml stop

prod-shell:
	docker exec -it shopify-app-pc /bin/sh

stop:
	docker-compose stop
