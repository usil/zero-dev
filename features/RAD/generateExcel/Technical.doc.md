# Generate excel: Technical document

| app      | feature id | feature type | feature name   | business unit | process   | department |
| :------- | :--------- | :----------- | :------------- | :------------ | :-------- | :--------- |
| ZERO DEV | feature-05 | web          | Generate excel | division x    | process y | finance    |

---

Clicking in the `Generate Excel` button will download an excel file with the data.

<img src="https://i.ibb.co/rt0Hf3q/video.png" width="100">

---

## Architecture

Specify the architecture type of the application this feature(form) belongs to

- SPA : Microservice : Database
- SSR : Microservice : Database
- Mobil : Microservice : Database
- Monolithic
- Scheduler

Example:

<!--
@startuml
rectangle api
storage web_spa
database database
web_spa -right-> api
api -right-> database
@enduml
-->

![img](http://www.plantuml.com/plantuml/png/SoWkIImgAStDuIfAJIv9p4lFILL8BCZaAYx9BqfCJrKeJqsABov8v4f9B4bCIYnELO0nkA0o2hf5cUaP9RfsO6r031T0A7L8pKi1MW40)

If the application exist on the developer center, just show the url of architecture section

---

## Direct Dependencies

Dependencies that have direct impact on the operation of the service. First level should be in the table and second level just in the diagram.

<!--
@startmindmap
* spa-web (search employee form)
** erp-api.com/v1/validation
*** database-mysql-acme
** student-api/v1/export
*** ftp-erp
** report-api/v2/xls
*** azure-face-recognition
*** zoom-service
*** google-drive-service
@endmindmap
-->

![](https://www.plantuml.com/plantuml/png/FOz1RiCm30JlUOMEhG7MQ5-Ghp3IsXKWYIofk4bUtyWDV2DsPq3isJjRhxcbodgQWYlJBoxXpS4MlmEg5ha3OH6hxwTf2Z0brlmHfSxRvxnnoObxblOif_0y-S8EgdV_ASInOaZUhmcj3t58kAbOtuMbAy5qG8QH_ZDVywtu3l3ZQg258yWGPMtvUFOGgUImBKVimIgo5b2olE4epcZfDV0F)

| App Id      | Api Endpoint code | Api Endpoint url          |
| :---------- | :---------------- | :------------------------ |
| erp-api     | api_1001          | erp-api.com/v1/validation |
| student-api | api_1002          | student-api/v1/export     |
| report-api  | api_1003          | report-api/v2/xls         |

Usually an option of a web SPA, it only depends on the endpoints of certain rest apis and nothing else.

- Deep level dependencies of each endpoint must be in the developer center of that api.
- In case of monolithic applications, add all the dependencies of this feature (form).

---

## Sequence Diagram

This diagram represents the interaction between objects, components, artifact, etc over a specific period of time. In other words, it represents the sequence of messages flowing from one object to another. Starts with user and ends with a submit or any interaction with the backend.

<!--
@startuml
actor       Actor       as user
participant search_form as search_form
participant "erp-api.com/v1/validation" as validation
participant "student-api/v1/export" as export
participant "report-api/v2/xls" as report_xls

user -> search_form : user access
search_form -> validation : validate role
search_form -> export : get student data
search_form -> report_xls : generate excel
@enduml
-->

![](https://www.plantuml.com/plantuml/png/NOv1RWCX34NtdCBAFXsroowgz2IHnRWj4WF8Db6ENmEHPXXM_E_tfNSJHTQwHOTUCyDutuS_2bGXTiMuu4F1f224xF_kFvatkn_ZX5s8onLBUFDvMnxlomDZM553JfSss-Ey4gqh9MtBjg9doQnzCRuppTIw0NyipoYT7EtTedDD7wvVa_Kdz1Qz9n5tl1YuYndt2WIS8vt98MJKBocylC5eF8ExJuSJCIhPt5DqDqfhtU8_)

In this diagram the **participants** are the apis or microservices endpoints, listed on the **Direct Dependencies** section.

If a more deep view is required, go to any dependency in developer center. There you will find even in which table is persisted the data.

---

## Data model

Only if it is a monolithic application. If it is a modern spa web, this information should be found on the developer center section of each direct dependency

---

## Configurations

Only if it is a monolithic application. If it is a modern spa web, this information should be found on the developer center section of each direct dependency.

---

## Editors

| name         | last updated |
| :----------- | ------------ |
| Luis Huertas | 30 May 2022  |
