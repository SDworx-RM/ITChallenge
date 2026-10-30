variable "location" {
  type    = string
  default = "westeurope"
}

variable "image" {
  type        = string
  description = "Container image to deploy, e.g. ghcr.io/org/talent-pipeline:sha"
}
