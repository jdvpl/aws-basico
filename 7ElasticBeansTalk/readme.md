## Aws BeansTalk

* AWS Elastics Beanstalk es un servicio para implementar servicios y aplicaciones web, desarrollados con JAVA, .NET, PHP, Python, Node.js, Ruby, Go y Docker.
* Los desarrolladores solo tendran que cargar su codigo en AWS y Elastic BeansTalk administrara de manera automatica la implementracion ( desde el aprovisionamiento de la capacidad, el equilibrio de carga y el escalado automatico hasta la monitorizacion del estado de la aplicacion).
* Al mismo tiempo, el usuario del servicio, tendra el control absoluto de los recursos de AWS que utiliza la aplicacion.
* No se cargan tarifas por Elastic Beanstalk, solo se paga por los recursos de AWS que necesite para almacenar y ejecutar las aplicaciones.
---
* Elastic Beanstalk es la forma mas rapida y sencilla de implementar aplicaciones en AWS.
* Solo es necesario cargar la aplicacion con la consola de administracion de AWS y un repositorio GIT o un entorno de desarrollo integrado (IDE, como Eclipse o Visual Studio).
* Elastic Beanstalk administrara de manera automatica los detalles de la implementacion de aprovisionamiento de capacidad, equilibrio de carga, escalado automatico y la monitorizacion del estado de la aplicacion.
* En cuestio de minutos, la aplicacion estara lista para utilizarse sin que tenga que realizar ninguna tarea de configuracion de la infraestructura o de los recursos.
* Los desarrolladores pueden centrarse en escribir codigo en lugar de perder tiempo en administrar y configurar los servidores, las base de datos, los balanceadores de carga, firewalls y las redes.
* Elastic Beanstalk ajusta el escalados de sus aplicacion de manera automatica en funcion de las necesidades especifica de su aplicacion, utilizando una configurtacion de Auto Scaling.
* Su aplicacion puede gestionar picos de carga de trabajo o de trafico y minimizar los costos.
* Tambien tiene el control para seleccionar los recursos de AWS que considere optimos, como el tipo de instancia de EC2.

---
### Formas de despliegue de una nueva version
1. Todo a la vez:
    - Despliega la nueva version en todas las instancias a la vez.
    - Todas las instancias quedan fuera de servicio mientas tiene lugar el despliegue del codigo nuevo.
    - Si falla la actualizacion, se debe volver a desplegar la version original.
2. Continua:
    - Despliega la nueva version en grupos.
    - Cada grupo que se esta desplegando estara fuera de servicio mientras dure el despliegue.
    - La capacidad de procesamiento de la aplicacion actual se vera reducida durante el despliegue.
    - No es adecuado para sistemas muy sensibles al rendimiento.
    - Si falla, necesitar volver a desplegar la version original.
3. Continua con un grupo adicional:
    - Lanza un grupo adicional de instancia y despliega la nueva version en este nuevo grupo.
    - Mantiene la capacidad de procesamiento completa mientras duran los despliegues.
    - Si falla la actualizacion, debes volver a desplegar la version original.
4 Inmutable:
    - Despliega la nueva version en un nuevo grupo de instancia con su propio grupo de autoescalado.
    - Cuando las nuevas instancias ya estan funcionando, se mueven a los grupos de autoescalado actuales.
    - Mantiene la capacidad de procesamiento completa mientas dura todo el proceso.
    - El impacto en caso de fallo ees menor, ya que solo requiere finalizar los grupos dee autoescalado nuevo.
    - Es la opcion mas adecuada para los sistemas en produccion criticos.
    
