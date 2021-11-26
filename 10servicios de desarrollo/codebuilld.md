# CodeBuild
### Poryecto a compilar
* Seleccionar CodeBuild
* Crear proyecto
* Seleccionar de CodeCommit
* Seleccionar repo, la rama master
* Seleccionar entorno
* Dejar por defecto y crear proyecto
* Iniciar compilacion
* Saldra error si no esta el archivo de builspec.yaml
`
version: 0.2
phases:
  install:
    runtime-versions:
        php: 7.3
    commands:
      - echo "Empezamos la instalacion"
  pre_build:
    commands:
      - echo "Empezamos la fase de compilacion"
  build:
    commands:
      - echo "Vamos a realizar una prueba"
      - grep -Fq "Google" index.php
  post_build:
    commands:
      - echo "Empezamos la fase de post-compilacion"
`
* Crear archivo buil para test
* subir al repositorio
* Reiniciar compilacion
---
### integracion de codeBuild con CodePipeline
* ir a pipeline ( canalizacion ) y seleccionar
* Editar
* Seleccionar source y crear capa
* Crear grupo de accion para integrar codeBuild