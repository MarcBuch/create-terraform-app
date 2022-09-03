terraform {
  backend "remote" {
    // Backend config will be stored in seperate files
  }
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">=3.21.0"
    }
  }
  required_version = ">=1.2.7"
}

provider "azurerm" {
  features {

  }
}
