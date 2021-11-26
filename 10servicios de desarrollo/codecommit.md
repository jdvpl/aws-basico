# AWS CodeCommit
* AWS CodeCOmmit es un servicio completamente administrado, de control de codigo fuente, que aloja repositorios basados en GIT.
* AWS CodeCommit simplifica la colaboracion en el codigo por parte de los equipos, en un ecosistema seguro y con alta escalabilidad.
* Con CodeCommit no necesita utilizar su propio sistema de control de codigo fuente ni preocuparse por el escalonado de la infraestructura de dicho sistema.
* CodeCommit funciona perfectamente con las herramientas de Git existentes.
* CodeCommit se puede utlizar para almacenar de forma segura cualquier element, ya sea codigo fuente, archivos binarios, imagenes y Scripts.
---
### Beneficios
* Elimina la necesidad de tener servidores de control de codigo fuente propios.
* El servicio se escala automaticamente segun las necesidades del proyecto.
* Cifra automaticamente los archivos en transito y en reposo.
* Esta integrado con IAM, lo que permite asignar permisos especificos de usuario a los repositorios.
* Tiene una arquitectua de alta escalabilidad, redundancia y durabilidad.
* Ayuda a colaborar con el codigo con sus compañeros de quipo mediante solicitudes de extraccion, creacion de ramificacion y combinaciones.
* Puede implementar flujes de trabajo que incluyan de forma predeterminada revisiones de codigo y comentaios, y controlar quien puede modificar ramificaciones especificas.
* Mantiene los repositorios cerca de los entorno de compilacion, pruebas y produccion de la nube de AWS.
* Admite todos los comando Git y funciona con las herramientas de Git Existentes
---
### Crear repositorio
* Crear repo
* Nombre repo
* Subir archivos 
---
### habilitar usuario por ssh y https para clonar repositorio
* buscar usuario en IAM
* Seleccionar usuario
* Credenciales de seguridad
* Si al clonar repositorio sale error primero configurar usuario con las credenciales `aws configure`
* generar credenciales
* `git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/enjed` credenciales: `juanda-at-723687938033 ====> 5ZrkapeosD560IE7W3JIzCiYOK5KomG1LKZPfI9u+mU=`
