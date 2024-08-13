IMAGE = "user-api"
TAG = "latest"

.DEFAULT_GOAL := run

.PHONY: build
build:
	@echo "Installing dependencies..."
	@npm install

.PHONY: run
run: build
	@echo "Starting the application..."
	@node app.js

.PHONY: docker-build
docker-build:
	@echo "Building Docker image: $(IMAGE):$(TAG)..."
	@docker build -t "$(IMAGE):$(TAG)" .

.PHONY: docker-run
docker-run: docker-build
	@echo "Starting Docker containers..."
	@docker-compose up

.PHONY: docker-stop
docker-stop:
	@echo "Stopping Docker containers..."
	@docker-compose down

.PHONY: clean
clean:
	@echo "Removing Docker containers and images..."
	@docker-compose down --volumes

.PHONY: docker-run-check
docker-run-check: 
	@echo "Starting Docker containers..."
	@docker-compose up --dry-run
