# S3

` Simple Storage Service (S3)`
`Servicio de almacenamiento simple`

* Es un servicio de almacenamiento de objetos (ficheros de cualquier tipo)
* Ofrece escalabilidad, disponibilidad de datos, seguridad y gran rendimiento
* Los ficheros pueden tener un tamaño maximos de 5TB
* Si lo ficherons tienen un tamaño mayor a 5TB, para subirlos a S3, hay que utilizar la opcion "Multi-part upload" (subida por partes)
* Hay un almacenamiento ilimitado en el numero de ficheros
* Los ficheros se alamcenan en Buckets (Carpetas)
* Los nombres de los Buckets deben ser unicos a nivel global
* HTTP 200 es el codigo que recibirar al subir un fichero S3 correctamente
* Una vez subido un fichero, estara disponible para consultarlo inmediatamente
* Si se modifica o se borra un fichero, tardara un rato en propagar los cambios
* Permite gestionar el ciclo de vida de un fichero y realizar versionados
* Permite la encriptacion de los ficheros
* Permite crear un control de acceso por fichero y por bucket (Carpeta)

---

### Informacion sobre cada fichero

* ***clave***: Es el nombre del fichero
* ***Valor:*** Son los datos del fichero
* ***Version ID:*** es el numero de version
* ***Metadatos:*** Informacion extra sobre el fichero
* ***Control de acceso:*** Permite especificar quienes lo pueden utilizar y como.

---

### Tipos de almacenamiento 

* ***S3 Estandar:*** 99.99% de disponibilidad, 99.999999999 de durabilidad, y se almacena de forma redundante en multiples dispositivos y en multiples instancias.

* ***S3 IA(Infrequent Access)(Acceso infrecuente):***Para los datos que no son accedidos de forma frecuente, pero que necesitan un rapido acceso cuando son necesarios. Es mas barato que S3 Estandar pero te cobran cuando los necesitas.

* ***S3 One Zone -AI:*** Para los ficheros que se acceden con poca frecuencia y que solo se almacenaran en una zona geografica. Es mas barato que S3 IA.

* ***S3 Glacier:*** Es el almacenamiento mas barato y se utiliza para archivar datos de larga duracion, donde no nos preocupa el tiempo para acceder a los datos.

---

### Tipos de gastos

* Gastos por almacenaje de ficheros
* Gastos por peticiones de acceso (en S3 IA, S3 One Zonr IA y S3 Glacier)
* Gastos por transferencias de datos entre regiones (replicacion de datos)
* Gastos por transferencia aceleradas (Datos en localizaciones locales)

  *S3 permite gfestionar el precio de cada fichero por separado, gracias al uso de etiquetas, que permiten disglosar los gastos por fichero, por ejemplo, para asignarlos a los  departamentos que lo usan. 


---

### Crear bucket

* Se crea bucket jdvpl.bucket.imagenes
* Se deja publico para toda la web
* acceder al bucket
* subir archivos y [x] conceder  acceso de lectura publico [x] entiendo riesgo

---

### versionamiento buckets

* cargar archivo 
* hacer publico
* para tener las versiones se carga de nuevo el archivo con el mismo nombre

---
### eliminar un bucket

* primero se vacia el bucket
* se procede a eliminar