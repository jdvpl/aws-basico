# AWS Kinesis
* Amazon Kinesis facilita la recopilacion, procesamiento y analisis de datos de streaming en tiempo real para obtener datos de manera oportuna y reaccionar rapidamente ante informacion nueva.
* Permite incorporar datos en tiempo real, como videos, audios, registros de aplicaciones, secuencia de clics de sistios web de telemetria de IoT para aprendizaje automatico, analisis y otras aplicaciones.
* Permite procesar y analizar datos a medida que se reciben y responder instantaneamente en vez de tener que esperar a que los datos se recopilen antes de que el procesamiento pueda comenzar.
* Permite incorporar, guardar y procesar datos de streaming en tiempo real para que pueda obtener informacion en segundos o minutos, en lugar de horas o dias.
* Esta completamente administrado y se ejecuta en sus aplicaciones de streaming sin que usted tenga que administrar la infraestructura.
* Puede gestionar cualquier volumen de datos de streaming y procesar datos de cientos de miles de origenes con latencias muy bajas.

---

### AWS Kinesis Video Streams
* Amazon Kinesis video stream facilita la transmision segura de videos desde dispositivos conectados a AWS para realizar analisis, aprendizaje automatico y otros procesos.

### AWS Kinesis Data Streams
* Amazon Kinesis data streams es un servicio de streaming de datos en tiempo real que puede registrar de manera continua gigabytes de datos por segundo de cientos de miles de origenes.

### AWS Kinesis Data Firehose
* AMAZON Kinesis data firehose es la manera mas facil de registrar, transformar y cargar transmisiones de datos en almacenes de datos de AWS para realizar analisis casi en tiempo real con herramienta de inteligencia empresarial.

### AWS Kinesis Data Analytics
* Amazon Kinesis data analytics ofrece la manera mas sencilla de procesar transmisiones de datos en tiempo real con SQL o Java sin tener que aprender a usar lenguajes de programacion ni marcos de procesamientos nuevos.

### Comandos

## `https://www.udemy.com/course/curso-amazon-aws-desarrollo/learn/lecture/17988213#overview`
* `aws configure` usario\
* `aws kinesis list-streams`
* `aws kinesis describe --stream-name mi-primer-stream`
* `aws kinesis put-record --stream-name -mi-primer-stream --data "mi primer mensaje" --partition-key usuario1`
* `aws kinesis get-shard-iterator --stream-name mi-primer-stream -shard-id -shardId-000000000000 --shard-iterator-type TRIM-HORIZON`
* `aws kinesis get-recors --shard-iterator is`
