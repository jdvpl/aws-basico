### IAM
`Identity Access Management`

--- permite gestionar usuarios y sus niveles de acceso a la consola AWS
---  permitre un control centralizado de tu cuenta AWS
--- permite crear accesos a otros usuarios con tu propia cuenta de AWS
--- permite crear permisos especificos a cada usuario o grupo de usuarios
--- permite autenticarse mediante el directorio Activo(usuario windows)
--- permite tambien autenticarse con tu cuenta de Facebook o Linkedin
--- permite la autenticacion multifactor (con clave enviada al movil)
--- permite crear tu propia politica de cambio de password ( tipo frecuencia)
--- soporta PCI DSS (estandar de seguridad de datos para pagos con tarjetas)


### Terminologia de IAM

--- Usuarios: son las diferentes personas que van a utilizar la consola de AWS
--- Grupos: Son una coleccion de usuario. cada usuarios heredara los permisos del grupo
--- Politicas: Las politicas se especifican en documentos, de tipo JSON, donde se otorgan permisos especificos sobre lo que puede hacer un suarios un grupo de usuarios o un rol.
--- Roles: los roles se asignan a recursos de AWS para permitir que utilicen otros recursos de AWS. Por ejemplo se crea un rol para que tu servicio de maquina virtual peuda utilizar tu servicio de S3 de almacenamiento de ficheros.



### url de iam

`https://console.aws.amazon.com/iamv2/home?#/home`


### crear grupo

--- option Access management -User groups- crear grupo
