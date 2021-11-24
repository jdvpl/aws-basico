## AWS- SQS
### Simple Queue Service => Servicios de colas de mensajes

* ***Amazon SQS*** es un servicio de colas de mensahes, completamente admnistrado, que permire desacoplar aplicaciones, y ajustar la escala de microservicios, sistemas distribuidos y aplicaciones sin servidor.
* SQS elimina la complejidad y los gastos generales asociados a la gestion y el funcionamiento del moddleware orientado a mensjae , y permite a los desarrolladores centrarse en la diferenciacion del trabajo.
* Con ***SQS*** se puede enviar, almacenar y recibir mensajes entre componentes de software de cualquier volumen, sin perdida de mensajes y sin la necesidad que otros servicios esten disponibles.
* SQS ofrece dos e colas de mensajes:
    * Las ***colas estandar*** ofrecen una capacidad de procesamiento maxima, una entreaga garantizada aunque no siempre en el mismo orden en el que fueron enviados.
    * Las colas FIFO (First Input)(Primero entrada, primero en salir) estan diseñadas para garantizar que los mensajes se procesan exactamente una vez y en el orden exacto en el que se enviaron.

---

### Beneficios

* SQS es un servicio escalable y de alta disponibilidad
* Las colas SQS se crean d3e manera dinamica y se escalan automaticamente
* SQS puede enviar cualquier volumen de datos, con cualquier capacidad de proceso, sin perder mensajes y sin la necesidad de que otros servicios tengan que estar disponibles.
* SQS permite desacoplar componentes de aplicaciones para que puedan ejecutarse y puedan fallar de manera independiente, lo que aumenta el nivel de tolerancia a errores general del sistema.
* Puede usar Amazon SQS para intercambiar informacion confidencial entre aplicaciones mediante cifrado del lado servidor (SSE), para cifrar todos los cuerpos de mensajes.
* SQS utiliza la nube de AWS para escalar de manera dinamica en funcion de la demanda.
* Puede utilizar un numero ilimitado de mensajes por cola, y las colas estandar proporcionan una capacidad de procesamiento casa ilimitada.
---
## SNS
### Simple Notification Service => Servicio de notificacion SImple

* **Amazon SNS es un servicio de mensajeria de publicacion/suscripcion, completamente administrada, de alta disponibilidad, completamente segura, que permite desacoplar microservicios, sistemas distribuidos y aplicaciones sin servidor.**
1. **Mensajeria entre sistemas** permitiendo desacoplar publicadores de los suscriptores. Se utiliza para micrisoervicios, arquitectura distribuidas y aplicaciones sin servidor. Los suscriptores pueden ser funciones lambda, colas SQS y puntos de enlace HTTP(S).
2. **Comunicacion a usuarios** mediante notificaciones a aplicaciones moviles, mensajes de texto a telefonos moviles y para realizar envios de correos electronicos.