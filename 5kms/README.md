## AWS KMS
### Key Management Service (KMS) ==> Servicio de gestion de claves

* KMS permite crear u administrar con facilidad las claves y controlar el uso del cifrado de una gran variedad de servicios de AWS y de sus aplicaciones.
* KMS es un servicio completamente administrado y de pago por uso.
* KMS es un servicio seguro que utiliza modulos de seguridad de hardware, que sirven para proteger sus claves.
* KMS esta integrado con muchos servicios de AWS como S3, EBS, Redshift, para que sea sencillo de encriptar los datos que se manejan.
* KMS esta integrado con AWS CloudTrail para ofrecer los registros de uso de todas las claves, para temas de auditoria y control de accesos.
* KMS esta integrado con AWS Encryption SDK ara permitir utilizas las claves de cifrado de datos protegidos de KMS, para cifrar localmente sus aplicaciones.

### Crear usuario administrador

* Se crea un nuevo grupo de tipo admin full access
* Se crea dos usuarios para este grupo
* Luego ir al servicio de KMS, para crear una clave de encriptacion
* Colocar usuario para administrar las claves