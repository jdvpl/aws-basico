# AWS API Gateway
* AWS API Gateway es un servicio completamente adminsitrado, que facilita a los desarrolladores, la creacion, publicacion, mantenimiento, monitoreo y proteccion de lla API a cualquier escala.
* Las API's actuan como la puerta de entrada para que las aplicaciones accedan a los datos, a la logica empresarial o a la funcionalidad de sus servicios de backend.
* Con API Gatway puede crear API REST y API WebSocket, que permiten aplicaciones de comunicacion bidireccional en tiempo real.
* API Gateway gestiona todas las tareas implicadas en la aceptacion y el procesamiento de hasta cientos de miles de llamdas a la API simultaneas, entre ellas, la administracion del trarfico, compatibilidad con CORS, el control de autorizaciones y acceso, la limitacion controlada, el monitoreo y la admninistracion de versiones de la API.
* No requiere pagos minimos ni costos iniciales.
* Se paga por las llamadas que se reciben a la API y por la cantidad de datos slaientes transferidos.

### Opciones
* ### API HTTP
    - utilice API HTTP para crear API RESTful de alto rendimeinto que requieran funcionalidad de proxy de API sin caracteristicas de administracion de API.
* ### API REST
    - Utilice las API REST para cargas de trabajo que requieran la funcionalidad de proxy y las caracteristicas de administracion de API en una unica solucion.
    - Las caracteristicas de administracion de API incluye el seguimeinto y la aplicacion de cuotas de uso por claves de API, la publicacion de api y la monetizacion de API,
* ### API WEBSOCKET
    - utilice API WebSocket para crear aplicaciones de comunicacion bidereccional en tiempo real, como aplicaciones de chat y paneles de streaming.
    - API Gateway mantiene una conexion persistente para manejar la transferencia de mensajes entre su servicio de backend y sus clientes.

### beneficios
* AWS Api Gateway permite ejecutar varias versiones de las misma API simultaneamente, lo que facilita la iteraccion, puesta a prueba y publicacion de nuevas versiones con rapidez.
* Proporciona a los usuario finales la latencia mas baja posible para las solicitudes y las respues de API sacando partido de nuestra red global de ubicaciones de vorde a traves de Amazon CloudFront.
* Se puede limitar el trfico de forma controlada y autorizar las llamadas a la API a fin de garantizar que las opertaciones de backen soporten picos de trafico y no se llame a los sistemas backend de forma innecesaria.
* Se ofrece un modelo de precios por niveles para las solicites API en Gateway.
* Por ejemplo, el precio por cada millon de solicitues costaria sobre 0.90 USD.
* Monitorice informacion y metricas de rendimientos sobre las llamadas a la API, la latencia de los datos y las tasas de error, desde el panel de API Gateway que permite monitorizar visualmente las llamadas a sus servicio mediante CloudWatch.
* Autorice el acceso a sus APIs con AWS identidi, AWS Iam y amazon cognito.
* API Gateway ofrece comptatibilidad con OIDC y OAuth2.

### laboratorio
* crear apo rest publica
* crear metodo get
* crear funcion lambda

### deploy
* crear estapa
* `https://tmlsmu4r07.execute-api.us-east-2.amazonaws.com/desarrollo` <=== api
* `https://tmlsmu4r07.execute-api.us-east-2.amazonaws.com/desarrollo/jdvpl` <= recurso
* `https://tmlsmu4r07.execute-api.us-east-2.amazonaws.com/produccion` <== prodccion