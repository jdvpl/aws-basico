# AWS Bases de datos
* Las aplicaciones necesitan bases de datos capaces de almacenar desde terabytes hasta petabytes de nuevos tipos de datos, proporcionar acceso a los datos con una latencia de milisegundos, procesar millones de solicitudes por segundos y escalar para adminitr millones de usuarios en cualquier parte del mundo.
* Para cumplir estos requisitos, se neceistan bases de datos relacionales y no relacionales diseñadas especialmente para gestionar las necesidades especificas de las aplicaciones.
* Amazon AWS ofrece una gran variedad de base3s de datos personalizadas para todos los casos de uso especificos de sus aplicaciones.
---
### Bases de datos relacionales
* Las bases de datos relacionales alamcenan datos cuyas relaciones y esquema esta predefinidos, deseñadas para admitir transacciones ACID y conservar la integridad referencial, asi como la coherencia de los datos

* Se utilizan en aplicaciones tradicionales, ERP, CRM y comercio electronico.

* ***Amazon Aurora:*** Bases de d atos relacional, compatible con MySQL y PostgreSQL creada para la nube y combina rendimiento y la disponibilidad de las bases de datos tradicionales con la simplicidad y la rentabilidad de las bases de datos de codigo abierto.

* ***Amazon RDS (Relational Database Service):*** es un servicio para bases de datos relacionales en la nube, sencillo de configurar, completamente administrado y que proporciona los principales motores de bases de datos conocidos como Amazon Aurora, MySQL, PostgreSQL, MariaDB, Oracle y SQL Server.

* ***Amazon Redshift:*** Es un servicio de almacenamiento de datos agil y escalable, que permite analizar todos los datos de su almacenamiento de datos, de manera dimple y rentable. Ofrece un rendimiento diez veces superior a cualquier otro almacen de datos gracias al uso de aprendizaje automatico, la ejecucion masiva de consultas en paralelo y el almacenamiento en columnas en un disco de alto rendimiento.

---

### Bases de datos de Pares Clave-Valor
* Las bases de datos de pares clave-valor estan optimizadas para almacenar y recuperar pares de clave-valor en grandes volumenes de datos en milisegundos, sin la sobrecarga en el rendimiento y las limitaciones de escala propias de las bases de datos relacionales.
* Se utilizan en aplicaciones a escala de internet, pujas en tiempo real, carros de la compra y en preferencias de clientes.

* ***Amazon DynamoDB*** es un servicio de bases de datos NoSQL rapido y flexible para cualquier escala.

* DynamoDB admite las aplicaciones a escala mas grandes del mundo y proporciona tiempos de respuesta de milisegundos. Replican dus datos en varias regiones AWS para darle acceso rapiudo y local a los datos.
* Con DynamoDB no hay servidores que aprovisonar, ya que aumenta o reduce automaticamente las tablas para ajustar la capacidad y mantener el rendimiento.
* Casos de uso: Aplicaciones web sin servidor, alamcen de datos para microservicios, aplicaciones moviles, tecnologia publicitaria, videojuegos e IOT.

#### Bases de datos documentales
* Las bases de datos cocumentales estan diseñadas para almacenar datos en forma de documentos.
* Se utilizan administracion de contenidos, personalizacion y aplicaciones moviles.
* ***Amazon DocumentDB:*** es un servicio de base de datos de documentos agil, escalable, de alta disponibilidad y completamente administrado que es compatible con cargas de trabajo de MONGODB.

### Bases de datos en memoria
* Las bases de datos en meoria se utilizan en aplicaciones que requieren acceso en tiempo real a los datos. Al almacenar los datos directamente en memoria, estas bases de datos proporcionan una latencia de microsegundos, que es util cuando la latencia de milisegundos no es suficiente.
* Se utilizan en el almacenamiento en cache, marcadores de videojuegos y analisis en tiempo real.
* ***Amazon ElastiCache para Redis*** es un almacen de datos en memoria increiblemente rapido en la nube, compatible con Redis, que ofrece una latencia inferior a un milisegundo para aplicaciones en tiempo real.
* A***mazon ElastiCache para Memcached:*** es un servicio de almacen de clave-valor en meoria, comptable con Memcached, que se puede utilizar como cache o almacen de datos. Es ideal para casos de uso en los que los datos de acceso frecuente deben permanecer en memoria.

### Bases de datos de graficos
* Las bases de datos de graficos se utilizan en aplicaciones que deben permitir a millones de usuarios consultar las relaciones entre conjuntos de datos altamente conectados, asi como navegar por ellas con una latencia de milisegundos.
* Se utilizan en la deteccion de fraudes, redes sociales y motores de recomendaciones.
* Amazon Neptune es un servicio de bases de datos de graficos, de confianza y completamente administrado que permite crear y ejecutar facilmente aplicaciones que funcionan con conjuntos de datos altamente conectados.


### Bases de datos de series temporales
* Las bases de datos de series temporales se utilizan para recopilar, sintetizar y sacar conclusiones de forma eficaz, de enormes cantidad de datos que cambian con el paso del tiempo, denominados datos de series temporales.
* Se utilizan en aplicaciones de IOT, devOps y telemetria industrial.
* Amazon Timestream es un servicio de bases de datos se rie tempral agil, escalable y completamente adminsitrado para aplicaciones operativas con Iot, que facilita el almacenamiento y analisis de billones de eventos diarios.

