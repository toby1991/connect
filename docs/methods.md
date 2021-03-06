## Methods

API call return a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Resolve is guaranteed to get called
with a `result` object, even if user closes the window, network connection times
out, etc. In case of failure `result.success` is set to false and `result.payload.error` is
the error message. It is recommended to log the error message and let user
restart the action.

Every method require an [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) with combination of [`common`](methods/commonParams.md) fields and method specific fields.

* [TrezorConnect.getPublicKey](methods/getPublicKey.md)
* [TrezorConnect.requestLogin](methods/requestLogin.md)
* [TrezorConnect.cipherKeyValue](methods/cipherKeyValue.md)

### Bitcoin, Bitcoin Cash, Bitcoin Gold, Litecoin, Dash, ZCash, Testnet 

* [TrezorConnect.getAddress](methods/getAddress.md)
* [TrezorConnect.getAccountInfo](methods/getAccountInfo.md)
* [TrezorConnect.composeTransaction](methods/composeTransaction.md)
* [TrezorConnect.signTransaction](methods/signTransaction.md)
* [TrezorConnect.pushTransaction](methods/pushTransaction.md)
* [TrezorConnect.signMessage](methods/signMessage.md)
* [TrezorConnect.verifyMessage](methods/verifyMessage.md)

### Ethereum
* [TrezorConnect.ethereumGetAddress](methods/ethereumGetAddress.md)
* [TrezorConnect.ethereumSignTransaction](methods/ethereumSignTransaction.md)
* [TrezorConnect.ethereumSignMessage](methods/ethereumSignMessage.md)
* [TrezorConnect.ethereumVerifyMessage](methods/ethereumVerifyMessage.md)

### NEM
* [TrezorConnect.nemGetAddress](methods/nemGetAddress.md)
* [TrezorConnect.nemSignTransaction](methods/nemSignTransaction.md)

### Stellar
* [TrezorConnect.stellarGetAddress](methods/stellarGetAddress.md)
* [TrezorConnect.stellarSignTransaction](methods/stellarSignTransaction.md)
