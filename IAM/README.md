### IAM
`Identity Access Management`

* permite gestionar usuarios y sus niveles de acceso a la consola AWS
* permite un control centralizado de tu cuenta AWS
* permite crear accesos a otros usuarios con tu propia cuenta de AWS
* permite crear permisos especificos a cada usuario o grupo de usuarios
* permite autenticarse mediante el directorio Activo(usuario windows)
* permite tambien autenticarse con tu cuenta de Facebook o Linkedin
* permite la autenticacion multifactor (con clave enviada al movil)
* permite crear tu propia politica de cambio de password ( tipo frecuencia)
* soporta PCI DSS (estandar de seguridad de datos para pagos con tarjetas)

---
### Terminologia de IAM

* ***Usuarios***: son las diferentes personas que van a utilizar la consola de AWS
* ***Grupos***: Son una coleccion de usuario. cada usuarios heredara los permisos del grupo
* ***Politicas***: Las politicas se especifican en documentos, de tipo JSON, donde se otorgan permisos especificos sobre lo que puede hacer un suarios un grupo de usuarios o un rol.
* ***Roles***: los roles se asignan a recursos de AWS para permitir que utilicen otros recursos de AWS. Por ejemplo se crea un rol para que tu servicio de maquina virtual peuda utilizar tu servicio de S3 de almacenamiento de ficheros.



### url de iam

`https://console.aws.amazon.com/iamv2/home?#/home`


### crear grupo

* option Access management ****User groups**** crear grupo
* Crear grupo de administyradores **AdministratorAcess** nombre del grupo ***jdvpl-admin***
* crear grupo de base de datos como ***DatabaseAdministrator*** nombre del grupo ***jdvpl-databases***
* crear grupo de S3 seleccionar ***AmazonS3FullAccess*** nombre del grupo  ***jdvplg-s3***

---

### crear usuario

* Seleccionar user y dar click crear usuario
* nombre de usuario ****juanda****
* **tipo de acceso** es es para habilitar una ID clave de acceso y una clave secreta para el SDK, la cli y la API [Activar]

* ***Acceso a la consola de administracion de AWS***
 * [x] access key
    * [x] contraseña generada automaticamente
        * [x] usuario debe crear una contraseña en el prozimo incio de sesion
* Seleccionar el tipo o tipos de grupo al que va a pertenecer
* añadir etiquetas con el que se va a identificar ese usuario
* Crear usuario para grupo a la DB sin la la activacion de access Key

### crear un rol

* se crea un rol para poder acceder a un servicio imagenes en la carpeta IAM/roles

### crear politicas
* create policy
* buscamos al servicio que necesitamos la politica
* ***read*** seleccionamos los recursos y seleccionamos [x] ***cualquiera***
* ***revisar politica***

    * ### utilizar politica

        * Crear grupo ***grupoS3ReadOnly***
---
### contraseñas

* **configuracion de cuenta** y seleccionar cambiar politica de contraseña 
* [x] seleccionar todas las convengan 

---
### activar acceso mediante doble factor

* seleccionar addMFA
* Activar MFA
* seleccionar virtual MFA
* descargar app ***autenticador de google***


### entrar en la consola con otro usuario y asignar MFA

* iniciar sesion con un usuario diferente del root
* ir a usuarios y seleccionar el usario que corresponda
* seleccionar credenciales de seguridad y sino tiene MFA asignado darle administrar
* seleccioanr virtual MFA y abrir google authenticator y seguir los pasos del qr
* cerrar sesion y abrir de nuevo y colocar el codigo de MFA que dice la app

