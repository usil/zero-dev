# Database

| app      | app type | app id   | depends_on    |
| :------- | :------- | :------- | :------------ |
| ZERO DEV | api      | zero-dev | zero-code api |

---

Data base scheme for the configuration of ZERO DEV. This schema will be used to create a new system in a RAD way.

<img src="https://i.ibb.co/rt0Hf3q/video.png" width="100">

## Diagram

![schema](https://i.ibb.co/wwZHxt0/schema-Image.png)

## Editable file

Editable schema file for MySql Workbench. [download](https://drive.google.com/file/d/1fPxnR_a1MA79gV-KpKpUcf-lSZzLbMsi/view?usp=sharing)

## Data Dictionary

### How to generate

This was generated using the following repository, [MySql Plugin](https://github.com/letrunghieu/mysql-workbench-plugin-doc-generating).

Download the [zip file](https://github.com/letrunghieu/mysql-workbench-plugin-doc-generating/releases) extract and you will have a `mysql-workbench-plugin-doc-generating.py` file, go to mysql Workbench and install the plugin `Scripting > Install Plugin`, select the .py file. Finally go to the ERR and go to `Tools > Utilities > Generate Documentation`.

If you do not have a ERR diagram a new one can be reverser engeniered by workbench just go to `Database > Reverse Engineer`

## Schema documentation

## Table: `entity`

### Description:

### Columns:

| Column               | Data type   | Attributes                         | Default      | Description                                                |
| -------------------- | ----------- | ---------------------------------- | ------------ | ---------------------------------------------------------- |
| `id`                 | INT         | PRIMARY, Auto increments, Not null |              | An entity represents one form, it can be CRUD.             |
| `applicationId`      | INT         | Not null                           |              | **foreign key** to column `id` on table `application`.     |
| `webHookId`          | INT         | Unique                             |              | **foreign key** to column `id` on table `web_hook`.        |
| `name`               | VARCHAR(75) | Not null                           |              | The name of the form                                       |
| `overallDataOrigin`  | VARCHAR(45) | Not null                           | `'database'` | The primary data origin source                             |
| `icon`               | VARCHAR(45) |                                    |              | The icons that represents the form                         |
| `visible`            | TINYINT     |                                    | `1`          | Is this entity visible                                     |
| `useSteps`           | TINYINT     |                                    | `0`          | Use the turorial steps                                     |
| `disableReport`      | TINYINT     |                                    | `0`          | Do not show report                                         |
| `disableExcelExport` | TINYINT     |                                    | `0`          | Disable the export to excel value                          |
| `viewListType`       | VARCHAR(20) |                                    | `'table'`    | Either view the data as a table, a list or a list of cards |

### Indices:

| Name                       | Columns         | Type    | Description |
| -------------------------- | --------------- | ------- | ----------- |
| PRIMARY                    | `id`            | PRIMARY |             |
| fk_Entity_WebHook1_idx     | `webHookId`     | INDEX   |             |
| fk_Entity_Application1_idx | `applicationId` | INDEX   |             |
| webHookId_UNIQUE           | `webHookId`     | UNIQUE  |             |

## Table: `field`

### Description:

### Columns:

| Column           | Data type   | Attributes                         | Default | Description                                            |
| ---------------- | ----------- | ---------------------------------- | ------- | ------------------------------------------------------ |
| `id`             | INT         | PRIMARY, Auto increments, Not null |         | An attribute of an entity                              |
| `entityId`       | INT         | Not null                           |         | **foreign key** to column `id` on table `entity`.      |
| `dataOriginId`   | INT         | Not null, Unique                   |         | **foreign key** to column `id` on table `data_origin`. |
| `name`           | VARCHAR(65) | Not null                           |         | The field name                                         |
| `alias`          | VARCHAR(65) | Not null                           |         | An alias for the field                                 |
| `visibleOnList`  | TINYINT     |                                    | `1`     | Is visible on the list                                 |
| `useAsFilter`    | TINYINT     |                                    | `0`     | Use this field as a filter                             |
| `viewStereotype` | VARCHAR(45) |                                    |         | What stereotype use to show in the list                |

### Indices:

| Name                     | Columns        | Type    | Description |
| ------------------------ | -------------- | ------- | ----------- |
| PRIMARY                  | `id`           | PRIMARY |             |
| fk_Field_DataOrigin1_idx | `dataOriginId` | INDEX   |             |
| dataOriginId_UNIQUE      | `dataOriginId` | UNIQUE  |             |
| fk_field_entity1_idx     | `entityId`     | INDEX   |             |

## Table: `foreign_relation`

### Description:

### Columns:

| Column                   | Data type   | Attributes                         | Default      | Description                                                   |
| ------------------------ | ----------- | ---------------------------------- | ------------ | ------------------------------------------------------------- |
| `id`                     | INT         | PRIMARY, Auto increments, Not null |              | The foreign relation of a table in base of a column           |
| `foreignTableName`       | VARCHAR(75) | Not null                           |              | Form table name<br />                                         |
| `foreignFieldToShow`     | VARCHAR(45) | Not null                           |              | Field to show of the foreign column                           |
| `foreignPrimaryKey`      | VARCHAR(45) | Not null                           |              | The PK on the foreign data                                    |
| `intermediateTable`      | VARCHAR(75) |                                    |              | The link table if the relationship is many to many            |
| `showForeignForm`        | TINYINT     |                                    | `0`          | Show the foreign form                                         |
| `intermediatePrimaryKey` | VARCHAR(45) |                                    |              | The PK of the union table in the mtm relation                 |
| `relationshipType`       | VARCHAR(45) |                                    | `'onetoone'` | The type of relation, many to many, one to many or one to one |

### Indices:

| Name    | Columns | Type    | Description |
| ------- | ------- | ------- | ----------- |
| PRIMARY | `id`    | PRIMARY |             |

## Table: `input_type`

### Description:

### Columns:

| Column     | Data type   | Attributes                         | Default | Description           |
| ---------- | ----------- | ---------------------------------- | ------- | --------------------- |
| `id`       | INT         | PRIMARY, Auto increments, Not null |         | The types of inputs   |
| `typeName` | VARCHAR(75) | Not null                           |         | The name of the input |

### Indices:

| Name    | Columns | Type    | Description |
| ------- | ------- | ------- | ----------- |
| PRIMARY | `id`    | PRIMARY |             |

## Table: `field_input_visual_configuration`

### Description:

### Columns:

| Column                          | Data type   | Attributes                         | Default | Description                                                                             |
| ------------------------------- | ----------- | ---------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `id`                            | INT         | PRIMARY, Auto increments, Not null |         | The visual and functional configuration for the input representation of field in a form |
| `fieldId`                       | INT         | Not null, Unique                   |         | **foreign key** to column `id` on table `field`.                                        |
| `label`                         | VARCHAR(45) | Not null                           |         | What to show in the label tag in html                                                   |
| `usePossibleValuesFromDatabase` | TINYINT     |                                    | `1`     | If it is a select or auto comple use values from database                               |
| `disabled`                      | TINYINT     |                                    | `0`     | Disable the input in the form                                                           |
| `advancedConfiguration`         | JSON        |                                    |         |                                                                                         |
| `cssConfiguration`              | JSON        |                                    |         | Visual configuration by css of the input                                                |
| `validatorsConfiguration`       | JSON        |                                    | `'{}'`  | The validators configurations for the input                                             |
| `tooltip`                       | VARCHAR(45) |                                    |         | How to use this input                                                                   |
| `stereotype`                    | VARCHAR(45) |                                    |         | Use for example the dollar stereotype will show a number like $ 40.00                   |
| `visible`                       | TINYINT     |                                    | `0`     | Disable the input in the form                                                           |
| `editable`                      | TINYINT     |                                    |         | is this input editable in the update menu                                               |
| `useInnerForm`                  | VARCHAR(45) |                                    |         |                                                                                         |

### Indices:

| Name                                  | Columns   | Type    | Description |
| ------------------------------------- | --------- | ------- | ----------- |
| PRIMARY                               | `id`      | PRIMARY |             |
| fk_FieldInputConfiguration_Field1_idx | `fieldId` | INDEX   |             |
| fieldId_UNIQUE                        | `fieldId` | UNIQUE  |             |

## Table: `tutorial_step`

### Description:

### Columns:

| Column     | Data type    | Attributes                         | Default | Description                                       |
| ---------- | ------------ | ---------------------------------- | ------- | ------------------------------------------------- |
| `id`       | INT          | PRIMARY, Auto increments, Not null |         | A tutorial on how to use an entity form           |
| `entityId` | INT          | Not null                           |         | **foreign key** to column `id` on table `entity`. |
| `fieldId`  | INT          |                                    |         | **foreign key** to column `id` on table `field`.  |
| `order`    | SMALLINT     | Not null                           |         | The order to show the turorial                    |
| `message`  | VARCHAR(255) | Not null                           |         | The message to show in the tutorial steps         |

### Indices:

| Name                       | Columns    | Type    | Description |
| -------------------------- | ---------- | ------- | ----------- |
| PRIMARY                    | `id`       | PRIMARY |             |
| fk_TutorialStep_Field1_idx | `fieldId`  | INDEX   |             |
| fk_TutorialStep_Form1_idx  | `entityId` | INDEX   |             |

## Table: `composed_origin`

### Description:

### Columns:

| Column         | Data type | Attributes                         | Default | Description                                                         |
| -------------- | --------- | ---------------------------------- | ------- | ------------------------------------------------------------------- |
| `id`           | INT       | PRIMARY, Auto increments, Not null |         | Composed origin for a field, union by an oprator of multiple fields |
| `dataOriginId` | INT       | Not null, Unique                   |         | **foreign key** to column `id` on table `data_origin`.              |

### Indices:

| Name                              | Columns        | Type    | Description |
| --------------------------------- | -------------- | ------- | ----------- |
| PRIMARY                           | `id`           | PRIMARY |             |
| fk_ComposedOrigin_DataOrigin1_idx | `dataOriginId` | INDEX   |             |
| DataOrigin_dataOriginId_UNIQUE    | `dataOriginId` | UNIQUE  |             |

## Table: `data_origin`

### Description:

### Columns:

| Column       | Data type   | Attributes                         | Default | Description                             |
| ------------ | ----------- | ---------------------------------- | ------- | --------------------------------------- |
| `id`         | INT         | PRIMARY, Auto increments, Not null |         | The data origin for a field             |
| `identifier` | VARCHAR(65) | Not null                           |         | A identifier for the origin of the data |
| `type`       | VARCHAR(35) |                                    |         | What type of data the origin has        |

### Indices:

| Name    | Columns | Type    | Description |
| ------- | ------- | ------- | ----------- |
| PRIMARY | `id`    | PRIMARY |             |

## Table: `data_base_origin`

### Description:

### Columns:

| Column              | Data type    | Attributes                         | Default | Description                                                                                  |
| ------------------- | ------------ | ---------------------------------- | ------- | -------------------------------------------------------------------------------------------- |
| `id`                | INT          | PRIMARY, Auto increments, Not null |         |                                                                                              |
| `dataOriginId`      | INT          | Not null, Unique                   |         | The database origin column<br /><br />**foreign key** to column `id` on table `data_origin`. |
| `foreignRelationId` | INT          | Unique                             |         | **foreign key** to column `id` on table `foreign_relation`.                                  |
| `variableType`      | VARCHAR(45)  | Not null                           |         | The database type                                                                            |
| `isNullable`        | TINYINT      |                                    | `0`     | Is the column nulleable                                                                      |
| `isPrimaryKey`      | TINYINT      |                                    | `0`     | Is this column a primat                                                                      |
| `isUnsigned`        | TINYINT      |                                    | `0`     | Is the column unsigned                                                                       |
| `isUnique`          | TINYINT      |                                    | `0`     | Is the column unique                                                                         |
| `comment`           | VARCHAR(155) |                                    |         | The comment of the column                                                                    |
| `defaultValue`      | VARCHAR(155) |                                    |         | What is this field default value                                                             |
| `variableLength`    | SMALLINT     |                                    |         | The variable lenght in the database                                                          |

### Indices:

| Name                                   | Columns             | Type    | Description |
| -------------------------------------- | ------------------- | ------- | ----------- |
| PRIMARY                                | `id`                | PRIMARY |             |
| fk_DataBaseOrigin_DataOrigin1_idx      | `dataOriginId`      | INDEX   |             |
| fk_DataBaseOrigin_ForeignRelation1_idx | `foreignRelationId` | INDEX   |             |
| dataOriginId_UNIQUE                    | `dataOriginId`      | UNIQUE  |             |
| foreignRelationId_UNIQUE               | `foreignRelationId` | UNIQUE  |             |

## Table: `application`

### Description:

### Columns:

| Column                       | Data type   | Attributes                         | Default | Description                                                          |
| ---------------------------- | ----------- | ---------------------------------- | ------- | -------------------------------------------------------------------- |
| `id`                         | INT         | PRIMARY, Auto increments, Not null |         | The application that "goverments" the app                            |
| `version`                    | VARCHAR(8)  | Not null                           |         | For the application version control                                  |
| `name`                       | VARCHAR(75) | Not null                           |         | The name of the application                                          |
| `port`                       | VARCHAR(4)  | Not null                           |         | The where the app will be used                                       |
| `cpu`                        | TINYINT     |                                    |         | How many cpus the app should use                                     |
| `memory`                     | INT         |                                    |         | How many memoy should the app use                                    |
| `generalVisualConfiguration` | JSON        |                                    |         | A set of properties to set the visual style of the application<br /> |

### Indices:

| Name    | Columns | Type    | Description |
| ------- | ------- | ------- | ----------- |
| PRIMARY | `id`    | PRIMARY |             |

## Table: `rest_origin`

### Description:

### Columns:

| Column              | Data type    | Attributes                         | Default | Description                                            |
| ------------------- | ------------ | ---------------------------------- | ------- | ------------------------------------------------------ |
| `id`                | INT          | PRIMARY, Auto increments, Not null |         | The rest configuration for a REST origin               |
| `dataOriginId`      | INT          | Not null, Unique                   |         | **foreign key** to column `id` on table `data_origin`. |
| `endpoint`          | VARCHAR(75)  | Not null                           |         | The endpoint to get the data                           |
| `httpConfiguration` | JSON         |                                    |         | The http configuration to use the endpoint             |
| `jsonPath`          | VARCHAR(155) |                                    |         | Json path to get the exact value                       |
| `variableType`      | VARCHAR(45)  |                                    |         | The type of the variable                               |

### Indices:

| Name                          | Columns        | Type    | Description |
| ----------------------------- | -------------- | ------- | ----------- |
| PRIMARY                       | `id`           | PRIMARY |             |
| fk_RestOrigin_DataOrigin1_idx | `dataOriginId` | INDEX   |             |
| dataOriginId_UNIQUE           | `dataOriginId` | UNIQUE  |             |

## Table: `web_hook`

### Description:

### Columns:

| Column     | Data type   | Attributes                         | Default | Description                      |
| ---------- | ----------- | ---------------------------------- | ------- | -------------------------------- |
| `id`       | INT         | PRIMARY, Auto increments, Not null |         | The webhook to use after a CUD   |
| `name`     | VARCHAR(45) | Not null                           |         | The name of the webhook          |
| `endpoint` | VARCHAR(45) | Not null                           |         | the endpoint to call the webhook |

### Indices:

| Name    | Columns | Type    | Description |
| ------- | ------- | ------- | ----------- |
| PRIMARY | `id`    | PRIMARY |             |

## Table: `step_by_step`

### Description:

### Columns:

| Column | Data type   | Attributes                         | Default | Description                                        |
| ------ | ----------- | ---------------------------------- | ------- | -------------------------------------------------- |
| `id`   | INT         | PRIMARY, Auto increments, Not null |         | A secuential form to display in a step by step way |
| `name` | VARCHAR(45) | Not null                           |         | The name of this step by step form                 |

### Indices:

| Name    | Columns | Type    | Description |
| ------- | ------- | ------- | ----------- |
| PRIMARY | `id`    | PRIMARY |             |

## Table: `step_by_step_configuration`

### Description:

### Columns:

| Column              | Data type | Attributes                         | Default | Description                                             |
| ------------------- | --------- | ---------------------------------- | ------- | ------------------------------------------------------- |
| `id`                | INT       | PRIMARY, Auto increments, Not null |         | Joins many to many in steps and entities                |
| `entityId`          | INT       | Not null                           |         | **foreign key** to column `id` on table `entity`.       |
| `stepByStepId`      | INT       | Not null                           |         | **foreign key** to column `id` on table `step_by_step`. |
| `order`             | SMALLINT  | Not null                           |         | In witch order the steps goes on                        |
| `previusIsRequired` | TINYINT   |                                    | `1`     | If the previous form is required                        |

### Indices:

| Name                                       | Columns        | Type    | Description |
| ------------------------------------------ | -------------- | ------- | ----------- |
| PRIMARY                                    | `id`           | PRIMARY |             |
| fk_StepByStepConfiguration_StepByStep1_idx | `stepByStepId` | INDEX   |             |
| fk_StepByStepConfiguration_Form1_idx       | `entityId`     | INDEX   |             |

## Table: `composed_origin_field`

### Description:

### Columns:

| Column             | Data type  | Attributes                         | Default | Description                                                |
| ------------------ | ---------- | ---------------------------------- | ------- | ---------------------------------------------------------- |
| `id`               | INT        | PRIMARY, Auto increments, Not null |         | Configuration for each composed origin field               |
| `composedOriginId` | INT        | Not null                           |         | **foreign key** to column `id` on table `composed_origin`. |
| `fieldId`          | INT        | Not null                           |         | **foreign key** to column `id` on table `field`.           |
| `operation`        | VARCHAR(5) | Not null                           |         | The union operation                                        |

### Indices:

| Name                                          | Columns            | Type    | Description |
| --------------------------------------------- | ------------------ | ------- | ----------- |
| PRIMARY                                       | `id`               | PRIMARY |             |
| fk_composed_origin_field_composed_origin1_idx | `composedOriginId` | INDEX   |             |
| fk_composed_origin_field_field1_idx           | `fieldId`          | INDEX   |             |

## Table: `possible_value`

### Description:

### Columns:

| Column                            | Data type   | Attributes                         | Default | Description                                                                 |
| --------------------------------- | ----------- | ---------------------------------- | ------- | --------------------------------------------------------------------------- |
| `id`                              | INT         | PRIMARY, Auto increments, Not null |         | The possible values for a select or autocomplete                            |
| `fieldInputVisualConfigurationId` | INT         | Not null                           |         | **foreign key** to column `id` on table `field_input_visual_configuration`. |
| `value`                           | VARCHAR(45) | Not null                           |         | The real value on a select or autocomple                                    |
| `displayValue`                    | VARCHAR(45) | Not null                           |         | The value shown on a select or auto complete                                |

### Indices:

| Name                                                  | Columns                           | Type    | Description |
| ----------------------------------------------------- | --------------------------------- | ------- | ----------- |
| PRIMARY                                               | `id`                              | PRIMARY |             |
| fk_select_value_field_input_visual_configuration1_idx | `fieldInputVisualConfigurationId` | INDEX   |             |
