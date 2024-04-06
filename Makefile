# Variables
DOCKER = docker
DOCKER_COMPOSE = docker compose
PRISMA = prisma

# Colors
GREEN = echo "\x1b[32m\#\# $1\x1b[0m"
RED = echo "\x1b[31m\#\# $1\x1b[0m"

## ———— 🔥 App ————
init:
	npm install
	$(MAKE) docker-start
	$(MAKE) db-init


## ———— 🐳 Docker ————
docker-start:
	$(DOCKER_COMPOSE) up -d
	@$(call GREEN,"The containers are now running.")


## ———— 📊 Database ————
db-init: ## Init database
	$(PRISMA) generate
	$(MAKE) db-seed

db-studio: ## Open Prisma Studio
	$(PRISMA) studio

db-reset: ## Reset database
	$(PRISMA) migrate reset --force

db-migration: ## Create migration with name (ex: make db-migration name="my first migration")
	$(PRISMA) migrate dev --name "$(name)"

db-seed: ## Load seed data
	$(PRISMA) db seed

db-push: ## Push database (without migration)
	$(PRISMA) db push


## ———— 🛠️  Others ————
help: ## List of commands
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'


