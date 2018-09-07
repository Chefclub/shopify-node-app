GIT_HASH := $(shell git rev-parse --short HEAD)
CONTAINER_NAME = shopify-app

REGISTRY = eu.gcr.io/chefclub-158403
IMAGE_NAME = $(REGISTRY)/shopify-app


# Build docker image.
build:
	docker build -t $(IMAGE_NAME):dev .
	docker tag $(IMAGE_NAME):dev $(IMAGE_NAME):$(GIT_HASH)

# Publish docker image to repository.
publish:
	docker push $(IMAGE_NAME):$(GIT_HASH)
	docker push $(IMAGE_NAME):dev

shell:
	docker exec -it $(CONTAINER_NAME) /bin/sh

run:
	docker-compose up -d

stop:
	docker-compose stop
