
/*  Es necesario el SDK de AWSXRay */
const AWSXRay = require('aws-xray-sdk-core')

/*  Es necesario el SDK de AWS */
const AWS = AWSXRay.captureAWS(require('aws-sdk'))

/*  Usaremos los servicios de S3 */
const S3 = new AWS.S3()

/*  Mostraremos por pantalla la lista de nuestros buckets */
exports.handler = async function(evente) {
    return S3.listBuckets().promise()
}

