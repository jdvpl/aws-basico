# DynamoDb
* AWS DynamoDb es un base de datos de clave-valor y documento, que ofrece un rendimiento en milisegundos de un solo digito a cualquier escala.
* Es una base de datos completamente adminsitrada, que cuenta con copia de seguridad, restauracion y seguridad integradas y amacenamiento en cache en memoria para aplicaciones a escala de internet.
* DynamoDB puede gestionar mas de 10 billones de solicitues al dia y puede admitir picos de mas de 20 millones de solicitues al segundo.
* Muchos de los negocis del mundo con un crecimiento mas rapido, utilizan la escala y el rendimiento de DynamoDB para ofrecer soporte a sus cargas de trabajo fundamentales.
* Cientos de mieles de cliente de AWS han elegido DynamoDB como su base de datos de clave-valor y documentos, para alicaciones moviles, web, juegos, tecnologia publicitaria e IoT, que necesitan acceso a datos con baja latencia a cualquier escala.
* Cree una tabla nueva para su aplicacion y deje que dynamoDB se encargue del resto. 

### Beneficios
* AWS DynamoDB admite algunas de las aplicaciiones de escal mas grandes del mundo y proporciona tiempos de respuesta en milisegundos de un solo digito a cualquierescala.
* Puede crear aplicaciones con capacidad de almacenamiento y procesamiento practicamente ilimitada.
* Las tablas globales de DynamoDB replican sus datos en varias regios de AWS para darle acceso rapido y local a los datos para sus aplicaciones distribuidad globalmente.
* Para casos de uso que requieran un acceso mas rapido, con latencia de microsegundos, DynamnoDB Accelerator (DAX) proporciona una cache en memoria completamente administrada.
* Con DynamoDB, no hay servidores ni software que mantener o adminsitrar.
* DynamoDB aumenta o reduce automaticamente las tablas para ajustar la capacidad y mantener el rendimeinto.
* La dispoonibilidad y la tolerancia a erroes estna integradas.
* DynamoDB admite las transaciones ACID para que pueda crear aplicaciones de vital importanci para el negoci a escala.
* DynamoDB cifra todos los datos de forma predetermida y proporciona un control de acceso e identidad detallado en todas las tabllas.
* Puede crear copias de seguridad completas de cientos de terabytes de datos al instante sin que el rendimiento afecte a sus tabla, y recuperarla en cualquier momentos en los 35 dias anteriores sin tiempo de inactividad.

#### Aplicaciones web sin servidor
* Cree aplicaciones web eficiente que ajusten su escala automaticamente.
* No necesita mantener servidores y las aplicaciones cuenta con alta disponibilidad automatizada.

#### Back-ends moviles
* Usa DynamoDB y AppsSync para crear aplicaciones web y moviles interactivas con actualizaciones en tiemp real, acceso a datos sin conexion y sincornizacion de datos con resolucion de conflictos integrada. 

### Microservicios
* Cree microservicos flexible y reutilizables mediante el uso de DynamoDB como un almacen de datos sin servidor para lograr un rendimiento estable y agil.

### Conceptos Basicos

* DynamoDB es compuesto por tablas
* Cada tabla tiene una clave principal
* Cada tabla puede tener un numero infinito de elementos (Filas)
* Cada elemento tiene atributos ( que pueden ser añadidos en cualquier moento)
* El tamaño maxio de un elmento es de 400KB
* Admite los sigueintes tipos de datos ( String, Boolen, Byte, Date, Calendar, Long, Integer, Double, Float, BigDecimal, BigInteger)
* Tambien admite los tipos de colecciones Set, List, Map
* La clave principal puede estar formado por solo 1 columna ( Clave de particion), o puede estar formada por 2 columnas (Clave de particion y la clave de ordenacion)

### DynamoDB- Rendimiento
* En las tablas en DynamoDB hay que indicar las unidades de capacidad de lectura y escritura.
- ###### Unidades de capacidad de escritura (WCU)
    - 1 WCU equivale a 1 escritura por segundo para un elemento de hasta 1KB
    - Ejemplo: Si escribimos 10 objetos de 2KB por segundos. Entonces WCU=2*10=20
- ###### Unidades de capacidad de lectura (RCU)
    - Equivale a 1 lectura altamente consistente por segundos (Lectura correcta justo despues de grabar) o 2 lecturas con consistente final por segunso ( la lectura justo despues de grabacion, puede no ser consistente)
    - Ejemplo: 10 lecturas altamente consistentes de 4 KB por segundo, RCU = 10*4=40
- ###### Autoescalado
    - Permite aumentar el nuemro de unidades de capacidad de escritura y de lectura de forma dinamica.
* Si no usamos autoescalado y sobrepasamos nuestras capacidades de lectura o escritura, obtendremos este error "PorvisionedThroughputExceededExceptions", que significa "Excepcion al exceder el rendimeinto prvosionado"


### Capacidad
* es la capicidad de lectura y escritura
*  ##### Aprovisionado
    - Se configura deacuerdo a los costos que se configuran
* #### Bajo demanda:
    - cobrara deacuerdo por lo que utilicemos AWS se encarga de gestionar la capacidad <=== forma eficiente