# AWS CodeDeploy
* AWS CodeDeploy es un servicio de implementacion completamente administrado, que automatiza las implementaciones de software en diferentes servicios informaticos, como Amazon EC2, AWS Fargate, AWS Lambda y sus servidores locales.
* Facilita el lanzamiento rapido de nuevas caracteristicas, ayuda a evitar tiempos de inactividad durante la implementacion de una aplicacion y amdinistra la compleja actualizacion de las aplicaciones.
* Puedes usar CodeDeploy para automatizar implementaciones de software, lo que elimina la necesidad de realizar operaciones manuales propensas a errores.
* El servicio de Code   Deplo se adapta a sus necesidades de implementacion.
---
### Beneficios
* Automatiza integramente las implementacions de software, lo que permite realizarlas con fiabilidad y rapidez.
* Puede implementar aplicaciones en sus entornos de desarrollo, pruebas y produccion, independientemente de si lo realiza en AWS ( EC2, Fargate, Lambda) o en sus servidores locales.
* Ayuda a maximizar la disponibilidad de la aplicacion durante el proceso de implementacion del software.
* Introduce cambios progresivamente y monitoriea el estado de las aplicaciones.
* Si hay errores, se puede detener y revertir con facilidad los cambios realizados.
* Permite lanzar y supervisar el estados de las implementaciones de las aplicaciones con facilidad a traves de la consola de administracion de AWS o mendiante CLI ( terminal de comandos).
* Ofrece un informe detallado de cuando y donde se implemento cada revision.
* Permite crear notificaciones push para recibir actualziaciones en tiempo real sobre sus implementaciones.
* Funciona con cualquier plataforma y lenguaje.
* Se puede integrar con el proceso de lanzmiento de software existente o con las herramientas de entrega continua, como AWS CodePipeline , GitHub o Jenkins.
---

## Laboratorio
* Crear role
* seleccionar caso CodeDeploy
* Politica CodeDeploy
* Crear otro rol con EC2
* caso EC2
* Politica S3 full access
* crear instancia de EC2
* en detalles de instancia seleccionar el rol creado
* conectar instancia
* instalar ruby `sudo yum install ruby`
* instalar wget `sudo yum install wget`
* descargar agente de codeDeploy `wget https://aws-codedeploy-eu-west-1.s3.amazonaws.com/latest/install`
* `chmod +x ./install`
* Ejecutar `sudo ./isntall auto`
* agregar tag key:Entorno; value:desarrollo
* ir a CodeDeploy => crear aplicacion
* Crear grupo de implementacion
* Crear implementacion
* Crar bucket codeDeploy 
* Copiar ruta del zip del bucket s3://jdvpl-codedeploy/deploy.zip
* pegar en la ubicacion de revision
* Se deja las demas cosas por defecto
* ir a verificar la instancia
* copiar Ip