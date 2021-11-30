# Lambda
* Es un servicio de informatica sin servidor que ejecuta codigo en respuesta a eventos y adminsitra automaticamente sus recuros informaticos.
* Ejecuta codigo automaticamente en respuesta a varios tipos de eventos como solicitudes HTTP a traves de API Gateway, modificaciones realizadas en objetos de buckets de S, actualizaciones de tablas en DynamoDB, etc .
* Lambda ejecuta el codigo en una infraestructura informatica de alta disponibilidad y se encarga de la adminsitracion integral de los recursos informaticos, incluyendo el mantenimiento del servidor, el sistema operativo, el aprovisionamitno de capacidad, el escalado automatico, implementacion de parches de seguridad y la monitorizacion.
* Lo unico que tenemos que hacer es subir nuestro codigo.
* Las funciones Lambda no tienen estado, asi que se puede copiar (escalar) para atender al numero de eventos recibidos en cada momento.

### Caracteristicas
* Permite añadir logica personalizadas a los revursos de AWS, como buckets Sy tablas DynamoDB.
* Permite crear nuevos servicios Backend para aplicaciones que se activan bajo demanda.
* Adminite actualmente codigo Java, Node.js, C# y python
* AWS Lambda administra toda la infraestructura para ejecutar codigo en una infraestructura de alta disponibilidad y tolerante a fallos.
* AWS Lambda invoca en codigo solo cuando resulta necesario y escala automaticamente para atender las solicitudes entrante sin que sea necesario que el usuario realice ninguna configuracion.
* El precio se basa en el numero d3e solicitues que se presente y en la cantidad de tiempo de informatica que se necesita para ejecuta el codigo.
* Con Lambda@Edge se puede ejecutar su codigo en ubicaciones globales en respuesta a eventos de CloudFront.
* Se pueden coordinar varias funciones Lambda para tareas complejas o largas, mediante la creacion flujos de trabajo con AWS Step Functions.
* AWS Lambda permite que el codigo obtenga acceso de forma segura a otros servicios de AWS a traves de su SDK de aes integrada y mediante la integracion con IAM.

### Limites

##### Ejecucion
* Memoria disponible: 128MB -3008MB (incrementos de 64MB)
* Tiempo maximo de ejecucion: 15 minutos (900 segundos)
* Capacidad del disco temporal (/tmp) para las ejecuciones: 51MB
* Limite de funciones lambda concurrente: 1000
##### Desarrollo
* Tamaño del codigo de la funcion lambda (comprimido .zip) 50MB
* Tamaño de la funcion sin comprimir (codigo + dependencia): 250 MB
* Puedes usar el directorio /tmp para cargar otros ficheros al arrancar
* Tamaño de las variables de entorno: 4KB

### Buenas practicas
* El trabajo pesado de la funcion Lambda sacarlo fuera de la funcion del manejador (handler)
    * Conexiones con las bases de datos, inicializacion del SDK de AWS
* Usar variabvles de entorno para las ocnexiones de base de datos, bucket S, evitando asi poner esos vallores en el codigo.
* Las contraseñas y valoress sensibles deben ser encriptador usando KMS.
* Minimizar el paquete de ejecucion de la funcion lambda al minimo necesario
    * Dividir la funcion lambda en dos funciones lambda si es necesario
    * Recordar los limintes de las funciones lambda
* Evitarutilizar codigo recursivo, evitar que una funcion lambda se llame a si misma
* No poner una funcion lambda en una red privada virtual (VPC) si no es necesario.

#### Laboratorio
* Crear funcion
* Utilizar un proyecto de node
* Crear prueba
### tiemout
* es para controlar el codigo si dura mas de lo establecido dara un error

### monitoreo xray y cloudwatch
* `https://us-east-2.console.aws.amazon.com/xray/home?region=us-east-2#/service-map`

### version y alias
* versiones no se pueden modificar
* Alias apunta a una version o a mas
