import JsEncrypt from 'jsencrypt'

function rsaEncrypt(password) {
  let jsEncrypt = new JsEncrypt();
  jsEncrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----
                                MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0bjkBRfF23NbHWy9GeGO
                                dC0HxPulQQ59OuLhcZLpw8etcdz6CbmtWrP/r+0W0Ff4vOr70bd0jaocrCe1dHoL
                                K6+oK8Et4nEsBo/8wtv1ALNxpXJpBytkmrOo4S0OId2wSRukuqqH+m+KehxJmSen
                                zKK5YGZHmCwWaha2NLkhIDPZM7/Wek5k89U1qOiGCZwFsL4AkofeI+5g50P4ujD+
                                Or2lGa9vpwiBFG6PiiWjC+fu+p8CppofspzfUzJff+J0utQrVQp8157dyT7CklQm
                                kGpenF9WI0BeqTKoQWMxQN0FQORMQp4kDgHgBukbyY3Lp9OBV8C5Nhv0uEpgQ+/Y
                                DQIDAQAB
                                -----END PUBLIC KEY-----
                                `);

  return jsEncrypt.encrypt(password);
}

export default rsaEncrypt
