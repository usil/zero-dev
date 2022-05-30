# Create User's Account

Create an Account for the authenticated User if an Account for that User does
not already exist. Each User can only have one Account.

**Base Url** : `http://acme.com`

**Endpoint** : `/api/accounts/`

**Method** : `POST`

**Auth required** : Yes

| header key | header value | description |
|------------|--------------|-------------|
| Authorization  | Bearer AKfycbyF7II | security token with 3600 ml of duration|

**Permissions required** : None

## Request

**type: body/query param/path param**

```json
{
    "name": "Jane",
    "lastname": "Doe",
    "cod_tr_acme": "787-aeq11"
}
```

**Request Fields Description**

| key | value | description |
|------------|--------------|-------------|
| name  |  Jane | user name |
| lastname  |  Doe | user lastname |
| cod_tr_acme  |  787-aeq11 | user code in acme system |

**Request Headers Description**

| header key | header value | description |
|------------|--------------|-------------|
| x-usil-request-id  |  4512451 | random alphanumeric value which identify this event |
| x-usil-consumer-id | loney_tones_server | string value which identifies who is consuming this endpoint |
|            |              |             |


## Response

```json
{
    "code": 200000,
    "message": "success",
    "content": {
      "id": 123
    }
}
```

**Response Fields Description**

| key | value | description |
|------------|--------------|-------------|
| id  |  123 | id of created person  |

**Response Headers Description**

| header key | header value | description |
|------------|--------------|-------------|
| x-usil-request-id  |  4512451 | random alphanumeric value which identify this event |


- If response is success, http status will be **200**
- If response has an error in backend, http status will be the standard: 401, 403, 500, 502, etc
- Related to the http status, will be a code in http body:
  - 400xyz
  - 500xyz
  - 600xyz

**Response codes**

- If response is success, http **status** will be **200** and **code** in body will be **200XYZ**
- If the invocation ends with error, http status will have the standard status: 401, 403, 500, 502, etc and the code in body will contain an extra numeric values to classify the error:
  - 400xyz
  - 401xyz
  - 403xyz
  - 500xyz
  - etcxyz


| code | description |
|------------|-------------|
| 400001  | Sed ut perspiciatis unde omnis iste natus erro  |
| 400002  | Nemo enim ipsam voluptatem quia voluptas  |
| 200001  | entity was created  |
