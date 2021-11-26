# ElactiCache
* Amazon ElastiCache es un amachen de datos en memoria, administrado y comptaible con memCached o Redis.
* Amazon ElastiCache ofrece Redis y Memcached de forma completamente administrada.
* Sirve para implementar, ejecutar y ajustar la escala de almacenes de datos en memoria, compatibles y de codigo abiero, y sin conocimientos previos.
* Crea aplicaciones de uso intensivo de datos o mejore el rendimiento de sus aplicaciones existente, mediante la recuperacion de datos a partir de almacenes de datos en memoria de baja latencia y alto grado de procesamiento.
* Es una excelente opcion para videojuegos, tecnologia publicitaria, servicios financieros, snaidad y aplicaciones de IOT.
---
### Beneficios
* Funciona como almacen y cache de datos en memoria, para abastecer a las aplicaciones mas exigente, que requiere tiempos de respuesta inferiores a un milisegundo.
* No es necesario realizar tareas administratyivas, como el aprovisionamiento de hardware, parches de software, configuracion, ajustes, monitorizacion, recuperacion de fallo o copias de seguridad.
* ElastiCache monitoriza constantemente los clusters de  datos para mantener las cargas de trabajo operativas, por lo que solo sera necesario concentrarse en el desarrollo de aplicaciones.
* ElastiCache permite ajustar la escala para satisfacer las cambiantes de las aplicaciones.

---

### ElastiCache para Redis
* Es un almacen de datos en memoria increiblemente rapido que ofrece una latencia inferios a un milisegundo para aplicaciones en tiempo real a escala internet.
* Esta creado sobre Redis, de codigo abierto y compatible cons las API de Redis.
* Se puede usar con clientes de Redis y utiliza el formato de datos de Redis abierto para el almacenamiento.

---

### ElastiCache para Memcached
* Es un servicio de almacen de clave-valor en memoria, compatible con Memcaches, que se puede utilizar como cache o almacen de datos.
* Ideal para casos de uso en los que los datos de acceso frecuente deben permanecer en memoria
* Excelente opcion para web, aplicaciones moviles, videojuegos, publicidad y comercio electronico

---

### Crear cache redis
* Seleccionar iniciar
* Seleccionar redis
* Nombre, tipo
* Crear grupo de subnet
---
### Estrategias de implementacion
* ElastiCache es recomendable para aplicaciones con mucha carga de trabajo de lecturas a una base de datos, como redes sociales, juegos, portales de pregunta-respuesta.
* ElastiCache tambien utiliza aplicaciones con una carga de trabajo muy intensa en computacion, como por ejemplo, los motores de recomendacion de prodcutos.
* Hay dos estrategias para implementar una cache.
* Lazy Loading. => solo la actualiza cuando es necesario
* Write Through  => actualiza la cache cada vez que actualiza la BD