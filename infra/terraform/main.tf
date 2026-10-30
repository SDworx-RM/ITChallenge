terraform {
  required_version = ">= 1.6"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "staging" {
  name     = "rg-talent-pipeline-staging"
  location = var.location
}

resource "azurerm_log_analytics_workspace" "staging" {
  name                = "log-talent-pipeline-staging"
  location            = azurerm_resource_group.staging.location
  resource_group_name = azurerm_resource_group.staging.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

resource "azurerm_container_app_environment" "staging" {
  name                       = "cae-talent-pipeline-staging"
  location                   = azurerm_resource_group.staging.location
  resource_group_name        = azurerm_resource_group.staging.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.staging.id
}

resource "azurerm_container_app" "api" {
  name                         = "ca-talent-pipeline-api"
  container_app_environment_id = azurerm_container_app_environment.staging.id
  resource_group_name          = azurerm_resource_group.staging.name
  revision_mode                = "Single"

  template {
    container {
      name   = "api"
      image  = var.image
      cpu    = 0.25
      memory = "0.5Gi"
    }
  }

  ingress {
    external_enabled = true
    target_port      = 3000
    traffic_weight {
      latest_revision = true
      percentage      = 100
    }
  }
}
