## EC2
#### Elastic Compute cloud (EC2) Computacion en la nube flexible
* Es un servicio que proporciona capacidad informatica en la nube de forma segura y flexible
* Esta diseñada para simplificar el uso de la informatica en la nube
* Permite obtener y configurar la capacidad informatica de forma rapida.
* Proporciona un control completo sobre los recursos informaticos
* Permite escalar (aumentar/disminuir) rapidamente la capacidad informatica.
* Permite crear aplicaciones escalables, resistentes a errores y empresariales
* Se pafa por uso y solo por la capacidad que realmente se utriliza
* Permite elegir el tipo de instancia, sistema operativo y paquetes de software
* Permite la configuracion de memoria, CPU y almacenamiento de la instancia
* Ofrece una disponibilidad del 99.99%
* Satisface los requisitos de seguridad mas exigentes
---
### Modelos de compra de instancias de EC2
* ***Capa gratuita:*** Es una capa gratuita que actualmente incluye750 hora de instancias t2.micro durante un año
* ***Instancias bajo demanda:*** Se pada por los segundos de uso de la capacidad informatica utilizada. Puede aumentar o disminuir la capacidad informatica en funcion de tus necesidad en cada momento.
* I***nstancias de Spot:*** Permiten solicitar la capacidad informatica sobrante de EC2 con descuentos hasta el 90% en comparacion con el precio de las instancias bajo demanda.
* ***Instancias reservadas:*** Proporcionan una reserva de capacidad durante un periodo de tiempo (de 1 a 3 años) y ofrecen un descuento de hasta 70% en comparacion de los precion de las instancias bajo demanda.
* ***Instancias de Host dedicados:*** Es un servidor Fisico de EC2 exclusivo para su uso y que le permite usar sus licencia existentes de software

---
### Tipos de instancias en Amazon Ec2
* Ec2 proporciona una amplia seleccion de tipos de instancias optimizados para adaptarse a los diferente casos de uso.
* Los tipos de instancias abarcan varias combinaciones de capacidad de CPU, memoria, almacenamiento y redes.
* Proporciona flexibidad para elegir los recursos adecuados a tus aplicaciones
* Cada tipo de instancia incluye uno o varios tamaños de instancia, lo que le permite escalar (aumentar o disminuir) los recuros informatico segun los requisitos de la carga de trabajo.

##### Uso General:
* Para servidores web, microservicio, almacenes de datos distribuidos, entornos de desarrollo, base de datos pequeñas y mediana, escritorio virtuales, repositorios de codigo, servidores de pruebas, servidores de versiones, aplicaciones empresariales.

##### Optimizada para informatica:
* Servidores de alto rendimiento, modelado cientifico, procesamiento de lotes, analisis distribuido, inferencia de aprendizaje profundo/ automatico, entrega de anuncion, juegos multijugador altamente escalables, codificacion de video.

##### Optimizadas para memoria:
* Base de datos de alto rendimiento, las caches de memoria distribuidad de escala web, bases de datos en memoria de tamaño media, analisis de big data en tiempo real, aplicaciones empresariales, extraccion y analisis de datos, clusters Hadoop/Spark, procesamiento en tiempo real de big data sin estructura, base de datos en memoria como SAP HANA.

##### Informatica acelerada:
* Aprendizaje profundo/ automatica, informatica de alto rendimiento, dinamica de fluidos computacional,finanza computacionales, analisis sismico, reconocimeinto de voz, vehicuos autonomos, descubirmientos farmacos, machine learning, modelado molecular, renderizado, visualizacion 3D, codificacion de video, trabajo de graficos en el servidor, analisis financiero, seguridad.

##### Optimizadas para almacenamiento:
* MapReduce, sistemas de archivos distribuidos como HDFS, sistemas de archios de red, aplicaciones de procesamiento de datos, clusters de big datam bases de datos NoSQL, (Cassandra, MongoDb, Redis), aplicaciones de registro, etc.

---

## Crear servidor WEB com EC2

* Lanzar instancias
* filtrar capa gratuita !!**importante**
* Seleccionar capa linux
* Seleccionar t2 micro
* reglas
* clave de la instancia
* conectar instancia
* ver consola
* acceder a usuario root `sudo su`
* INstalar apache `yum install httpd -y`
* Iniciar apache `systemctl start httpd`
* Verificar estado `systemctl status httpd`
* Habilitar apache cuando reiniciemos la instancia `systemctl enable httpd`
* Ir al directorio donde se guardan las paginas `cd /var/www/html`
* Crear archivo html `nano index.html`
* `Control X` para guardar y dar `Y` y enter
* Luego de crear y guardar el archivo se copia la ip publica 
* crear carpeta `mkdir php` luego crear archivo index.html `echo "<html>
<body>
<h1>Ola esta es otra pagina html </h1>
</body>
</html>" >> index.html`

* Ip publica `http://34.207.66.27/`
