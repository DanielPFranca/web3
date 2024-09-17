terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.0.1"
    }
  }
}

provider "azurerm" {  
  resource_provider_registrations = "none"
  subscription_id = "481c1d25-e4df-4209-9f20-6d3c0c28a214"
  features {}
}

resource "azurerm_resource_group" "daniel_bot_group" {
  name = "daniel_bot_group"
  location = "eastus2"
}

resource "azurerm_service_plan" "daniel_bot_sp" {
  name = "daniel_bot_sp"
  resource_group_name = azurerm_resource_group.daniel_bot_group.name
  location = azurerm_resource_group.daniel_bot_group.location
  sku_name = "S1"
  os_type = "Windows"
}

resource "azurerm_windows_web_app" "daniel_bot_app" {
  name = "daniel-botapp"
  resource_group_name = azurerm_resource_group.daniel_bot_group.name
  location = azurerm_resource_group.daniel_bot_group.location
  service_plan_id = azurerm_service_plan.daniel_bot_sp.id
  site_config {
    always_on = false
  }
}

resource "azurerm_windows_web_app_slot" "daniel_bot_slot_qa" {
  name = "daniel-bot-slot-qa"
  app_service_id = azurerm_windows_web_app.daniel_bot_app.id
  site_config {

  }  
}
