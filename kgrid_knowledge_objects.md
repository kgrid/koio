# Kgrid Knowledge Objects
A kgrid Knowledge object (KO) is a collection of files that 
- has a __unique identifier__ (including version identifier). 
- implements __knowledge__ that could be accessed directly or through services
- provides __metadata__ in the form of machine-readable documentation of the administrative, descriptive and technical properties of the KO  
- could implement different ways, in the form of __services__, to access the knowledge
- could include __tests__ for the knowledge and services 

Depending on the kgrid version, the files needed for a KO, their contents and the way they are structured may vary. The following sections represent different versions of kgrid knowledge object model, their required files, their content and how they are structured.

## Kgrid 2.0
In the realm of kgrid 1.0, we established a foundational model, encapsulating knowledge as a cohesive group of files adorned with metadata, housing both artifact implementations and deployment/service specifications. Building upon this foundation, the evolution from kgrid 1.0 to Kgrid 2.0 is focused on significant advancement in the ways knowledge is accessed. Kgrid 2.0 marks a transformative leap by introducing a multi-service architecture within each knowledge object. This innovation empowers knowledge access through diverse channels, including but not limited to 
- API service that is used by a [kgrid activator](https://kgrid.org/specs/activationSpec.html) to provide access to knowledge of a collection of KOs through RESTful APIs 
- Stand-alone Web Service that enables accessing the knowledge, implementd in a KO, through RESTful APIs without a need for an external tool 
- CLI service that provides access to knowledge and its metadata through command line interface

Kgrid 2.0 also supports native ways of using and testing the knowledge and each of the services.

### Knowledge Object Structure 
The following examples show different variations of knowledge objects in terms of file structure.

In kgrid 2.0 knowledge objects could be as simple as the ones created using kgrid 1.0 and include only one service and one implementation of that service. In this case, the knowledge object files could be structured as simple as kgrid 1.0 like 

- KO folder 
    - implementation files and folders
    - service specification
    - deployment file
    - metadata  

If a KO has multiple services, the implementation of each service could be structured in a service folder like 

- KO folder
  - service 1 folder  
      - implementation files and folders            
      - deployment file
      - service specification
  - service 2 folder  
      - implementation files and folders            
      - deployment file
      - service specification
  - metadata

Knowledge objects could be more complicated having multiple implementations for the services. In this case the implementation of services could be structured into service folders that has implementation folders like the following example

- KO folder
  - service 1 folder  
      - implementation 1 folder of service 1
        - implementation files and folders            
        - deployment file      
      - implementation 2 folder of service 1
        - implementation files and folders            
        - deployment file
      - service specification
  - service 2 folder  
      - implementation 1 folder of service 2
        - implementation files and folders            
        - deployment file
      - implementation 2 folder of service 2
        - implementation files and folders            
        - deployment file
      - service specification
  - metadata


 As we see in these examples, kgrid 2.0 has been meticulously designed to offer enhanced flexibility in file structuring, enabling robust support for multiple services and diverse service implementations. This is made possible by restructuring the metadata and using new terminologies, defined in the new version of our koio ontology [Koio 2.0](https://github.com/kgrid/koio). In kgrid 2.0 the metadata includes information about what services each KO has (__hasService__) and what implementations each service has (__implementedBy__).

In kgrid 2.0, metadata is always placed in the root of KO. Service specification files, by default, are placed in the service folders. If no service folder is used because the KO only has one service, the service specification file is placed in the root of KO. The deployment files are placed in the implementation folders of each service. If no implementation folder is used because a service only has one implementation, the deployment file will be placed where the service implementation is located.

### How to create a knowledge object that is compliant with kgrid 2.0
Here are the main steps to follow:
1. __Create KO folder__: Create a folder for your KO (avoid using . in the name of your folder as it could cause issues for services that implement python packages)
2. __Create service folders__: Create a service folder per service in your KO folder. If you do not have more than one service, you can skip this step.
3. __Create implementation folders__: For each implementation of a service, create an implementation folder inside the service folder. If you do not have a service folder then the implementation folder could be created in the root of KO. If you do not have multiple implementations, you can skip this step.
4. __Add service implementations__: Add your implementation files and folders for each service implementation to its corresponding location, created in previous step. If you are implementing a service for a specific activator, check specific requirements for knowledge objects compliant to that activator. For example python activator requires that the service is implemented as a python package. You may decide to separate knowledge implementation from service implementation for reusability.
5. __Add metadata__: Create a metadata in the root of the KO and include the content as listed in the [kgrid 2.0 Metadata](#kgrid2metadata) section below.  
6. __Add service specification per service__: Each service may have a service specification that is used to describe its usage in more detail. For API services it could be an OpenAPI service specification which could be used by an activator to provide an interface to test the service. For a CLI service it could be the help that indicates the available commands. See examples of service specifications for different types of services at the [Service Specification](#service-specification) section below. Service specification file needs to be added inside the service folder. If you do not have a service folder then the service specification file could be created in the root of KO.
7. __Add deployment file for API services__: If you are implementing a service that will be activated by an activator, include a deployment file in the same place that you added the service implemenetation at step 4. The deployment file will include the list of available routes. Each route includes the engine specific information, which is needed by the activator to map the route to a specific function that implements the service. See examples of deployment file for different engines at [Deployment File](#deployment-file) section. 


### Metadata <a name="kgrid2metadata"></a>

A knowledge object must include a metadata file (metadata.json) in the root of KO, which contains machine-readable documentation of the administrative, descriptive and technical properties of the KOs. Metadata refers to the information that describes and represents KOs and provides context for it. 

Metadata structure has been updated in kgrid 2.0 to accommodate the implementation of multiple services and their diverse implementations. As such, new terminologies are added to our koio ontology in its new version 2.0. To support multiple services, each metadata will include a "koio:hasService" key which is an array containing objects representing individual services associated with the knowledge object. Each object within the array includes detail such as service type, service specification and the knowledge that it depends on. It also includes an "implementedBy" key which is an array containing objects that represent individual implementation of the service.  Finally the metadata file contains a "koio:hasKnowledge" section that includes information about the knowledge that is implemented and used in the KO. 

Here is an example of a kgrid 2.0 metadata, followed by a detailed description of each field and how to populate them for a knowledge object you are creating.

```json
{
  "@context": {
    "dc": "http://purl.org/dc/elements/1.1/",
    "koio": "http://kgrid.org/koio#",
    "swo": "http://www.ebi.ac.uk/swo/",    
    "implementedBy": "swo:SWO_0000085",
    "API": "swo:interface/SWO_9000054",
    "cli": "swo:interface/SWO_9000053",
    "python": "swo:SWO_0000118",
    "javascript": "swo:SWO_0000108",
    "dependsOn": "http://purl.obolibrary.org/obo/RO_0002502",
    "batch": "https://spec.pistoiaalliance.org/idmp/ontology/ISO/ISO11615-MedicinalProducts/Batch",
    "function": "http://purl.obolibrary.org/obo/BFO_0000034",
    "hasServiceSpecification": {
      "@id": "koio:hasServiceSpcification",
      "@type": "@id"
    }
  }, 
  "@id":"bmi-ko-2.1.2",
  "koio:kgrid":"2",
  "@type" : "koio:KnowledgeObject",
  "dc:title" : "bmi calculator with 2 services,each with one implementations in its own folder",
  "dc:identifier" : "ark:BMICalculatorMultiServSingleImpFoldered",
  "version" : "v1.0",
  "dc:description" : "calculates bmi value and category using multiple impl",
  "koio:contributors" : "Kgrid Team",
  "koio:keywords" : [ "bmi", "category", "calculate" ],
  "koio:hasService":[      
    {
      "@type":"API",
      "hasServiceSpecification":"bmi-activator-service/service.yaml",
      "dependsOn":"bmiFunction",
      "implementedBy" : [
        {
          "@id": "bmi-activator-service/deno",
          "@type":[
            "https://kgrid.org/specs/activationSpec.html#object",
            "javascript"            
          ]
        }
      ]

    },
    {
      "@type":"cli",
      "hasServiceSpecification":"bmi-cli-service/help.txt",
      "dependsOn":"bmiFunction",
      "implementedBy" : [
        {
          "@id": "bmi-cli-service/basic-cli",
          "@type":"cli"
        }
      ]

    }
  ],
  "koio:hasKnowledge":{
    "@id":"bmiFunction",
    "@type":"function",
    "implementedBy" : ["bmi_calculator.py","bmi_calculator.ts"]
  }
}
```

- __@context__: This field is used to map koio terms to IRIs (along with other terms). Contexts can either be directly embedded into the document (an embedded context) or be referenced using a URL. Please use the kgrid 2.0 koio context url: https://github.com/kgrid/koio/blob/master/2.0/contexts/ko.jsonld

- __@id__: It is a unique identifier for this object that allows it to be resolved within the knowledge grid. It can either be an absolute or relative URL. See [Node Identifiers](https://w3c.github.io/json-ld-syntax/#node-identifiers) section of json-ld syntax.

- __dc:identifier__: The identifier field is an extra globally unique identifier. The Knowledge Grid currently uses [ARK](https://n2t.net/e/ark_ids.html) identifiers natively which interoperate with [EZID](http://ezid.cdlib.org/) and top-level resolvers like [Name2Thing](http://www.n2t.net/). (Support for other identifiers like [DOI](http://www.doi.org/)s is planned).

- __koio:kgrid__: This field is used to version kgrid model. For kgrid 2.0 use "2".

- __@type__: Setting this to "koio:KnowledgeObject" is what declares this as a kgrid Knowledge Object. The Knowledge Grid depends on this when determining whether something is a Knowledge Object.

- __dc:title__: This field represents the name or title of the Knowledge Object (KO). It is a brief and descriptive label that conveys the central topic, focus, or purpose of the KO.

- __version__: It indicates the specific version or release of the KO. It helps to identify and distinguish between different iterations or updates of the KO. Versioning is important for tracking changes and ensuring compatibility.

- __dc:description__: This field provides a comprehensive summary of the KO. It offers users a clear understanding of the KO's content (structure and functionality), purpose, and significance. The description should concisely convey what the KO is about, its intended use, and any unique features or contributions it offers.

- __koio:contributors__: It identifies individuals or entities who have played a meaningful and significant role in the creation, development, or maintenance of this KO. Contributors encompass a wide range of roles and responsibilities related to the KO, and they may include authors, researchers, designers, developers, reviewers, editors, and other relevant parties. It may include authors, developers, reviewers and editors, project managers, data providers and funding resources.

- __koio:keywords__: Keywords field consists of a list of words or phrases that succinctly describe the central topics, themes, and concepts addressed within the Knowledge Object. These keywords help users quickly identify relevant KOs when searching or browsing within a knowledge repository.

- __koio:hasService__: This field is an is an array containing objects representing individual services associated with the knowledge object. For each service add an object within the array of this field and includes the following fiels:
  - __@type__: Defines type of the service. It could get the following values:
    - API: Used to create services that are activated using a [kgrid activator](https://kgrid.org/specs/activationSpec.html)
    - CLI: Used to create services that provide access to run knowledge and the underlying functions that implement them through command line interface. 
    - Web Service: Used to create services that provide access to the knowledge through stand-alone web APIs without the need for an activator.
  - __hasServiceSpecification__: This field represents a relative path from the root of KO to the service specification file of the service it belongs to. If the service specification is placed in the root of KO because there is only one service implemented in the KO, then this field will have a value like "./service.yaml".
  - __dependsOn__: This field contains the id of the knowledge this service depends on.
  - __implementedBy__: This field is an array containing objects that represent individual implementations of the service. Implementations may vary from each other from different aspects like the programming language used to implement them. For each implementation of a service include an object in this array with the following fields:
    - __@id__: This is a relative path from the root of ko to the place where the implementation files are located. If the implementation files are placed in the root of KO this will have the value ".". This field could be resolve based on the location of the root of KO to get the implementation location. 
    - __@type__ Adds detail about the type of implementation. For cli and stand-alone web APIs it simply gets the value "cli" and "Web Service". For activator services it would be an array with two values. One would be the link to the activator specs representing that this implementation is used by an activator and the other field represents which specific activator the service is implemented for. As an example, if you are creating an API service to be activated by JavaScript and python reference implementations of the activator specs, this field will have the following values respectively:
      ```
      "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "javascript"            
            ]
      ```
      ```
      "@type":[
            "https://kgrid.org/specs/activationSpec.html#object",
            "python"            
          ]
      ```    
- __koio:hasKnowledge__: This field has an object that includes information about the knowledge that is implemented and used in the KO. It includes the following fields:
  - __@id__: This field is used earlier in the service to point to the knowledge that service depends on
  - __@type__: Represents the type of the knowledge. We use "function" for the cases when the knowldge is implemented in form of a function.
  - __implementedBy: This field is an array which includes the artifacts that implement the knowledge.

### Deployment File <a name="kgrid2DeploymentFile"></a>

A knowledge object must include a deployment description (deployment.yaml) for each API service in the same location where the implementation files of the service are located. This file includes all the details needed for deploying the KO's API service in an activator. For each endpoint in the KO, this file will include the following:

- __endpoint id__: Endpoint id is used as part of the route to the endpoint.

- __method type__: Method type is 'post' for the deployment, as 'get' is used to expose deployment specifications for endpoints.

- __engine__: Each endpoint should have one engine section in the deployment file which includes the activator name and the specific detail needed for deployment of KO in it. The details needed for activation could be different from one activator to the other and it could be found in each activator's documentation. As an example, engine section of each route in the deployment file for a python and JavaScript activator should include detail on how to locate the function implementing the endpoint. For python activator it includes package name, module name and function name. For JavaScript activator it includes artifact location and function name.

An example of a deployment file for a service created for the kgrid Python Activator:

```yaml
/bmi:
  post:    
    engine:
      name: org.kgrid.python-activator
      package: bmi_calculator
      module: bmi
      function: calculate_bmi   
/category:
  post:    
    engine:
      name: org.kgrid.python-activator
      package: bmi_calculator
      module: bmi
      function: get_bmi_category
```
An example of a deployment file for a service created for the kgrid JavaScript Activator:

```yaml
/bmi_category:
  post:
    engine:
      name: org.kgrid.javascript-activator
      artifact: http_service.ts
      function: bmi_category
```    

### Service Specification <a name="kgrid2ServiceSpec"></a>

An API service of a knowledge object could include a service specification (service.yaml) in the service folder. This file includes additional information about the KO routes and could be used to provide documentation and test interface using swagger and openAPI editors. (See [OpenAPISpecification](https://swagger.io/specification/) for more detail)

Here is an example of a service description file for a BMI Calculator KO:

```yaml
openapi: 3.0.0
info:
  version: '1.0'
  title: 'bmi calculator'
  description: 'A knowledge object to calculate bmi and categories.'
  license:
    name: GNU General Public License v3 (GPL-3)
    url: >-
      https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)#fulltext
  contact:
    name: KGrid Team
    email: kgrid-developers@umich.edu
    url: 'http://kgrid.org'
servers:
  - url: /endpoints/bmi/calculator/v1.0
    description: Calculate bmi
tags:
  - name: KO Endpoints
    description: bmi calculation Endpoints    
paths:
  /bmi:
    post:
      summary: Calculate bmi value.
      description: Calculates bmi value.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:  
                height:
                  type: number
                  format: float
                  description: Height of the person. If using 'imperial' unit_system, use height in inches.
                  example: 175.0              
                weight:
                  type: number
                  format: float
                  description: Weight of the person. If using 'imperial' unit_system, use weight in pounds.
                  example: 70.0                
                unit_system:
                  type: string
                  enum: [metric, imperial]
                  description: Unit system for weight and height ('metric' or 'imperial').
                  example: metric
      responses:
        '200':
          description: Successfully calculated bmi value.
          content:
            application/json:
              schema:
                type: object
                properties:
                  bmi:
                    type: number
                    format: float
                    description: bmi.
                    example: 19.0
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericresponse'
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericerror'
  /category:
    post:
      summary: Calculate category value.
      description: Calculates category value.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:  
                bmi:
                  type: number
                  format: float
                  description: bmi of the person.
                  example: 20.0              
      responses:
        '200':
          description: Successfully calculated bmi category.
          content:
            application/json:
              schema:
                type: object
                properties:
                  category:
                    type: string
                    description: bmi category.
                    example: Normal weight
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericresponse'
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericerror'
```
Note: The server field must contain /endpoint/{ko id}. This will be used by openAPI and swagger editor to send the http POST request for each listed endpoint to /endpoint/{ko id}/{endpoint id}. Please see [KO request / response API in knowledge grid activator specifications](https://kgrid.org/specs/activationSpec.html#postrequest) for more detail. 

A cli service could include a service specification that includes the help that indicates the available commands. Here is an example of a cli service specification:
```
Usage:   Knowledge object
Version: 0.0.1           

Description:

  Calculates BMI information

Options:

  -h, --help     - Show this help.                            
  -V, --version  - Show the version number for this program.  

Commands:

  bmi       - Calculate BMI         
  category  - Calculate BMI Category
```

### Test Files

The KO may include test files that test the KO knowledge and services in a native way with some sample test cases. Knoeledge and service test files could be located in the same location where knowledge and service implementations are placed.

## Kgrid 1.0 

Knowledge object is a collection of metadata and binary files that together have a unique identifier (including version identifier). There are some required and some optional file types in a knowledge object: 

- a file that contains metadata (metadata.json)
- a deployment description (deployment.yaml)
- a service description (service.yaml)
- one or more payload files implementing the service described by the service description, deployable using the information in the deployment description  
- test files (optional)

### Metadata <a name="metadata"></a>

A knowledge object must include a metadata file (metadata.json) in the root of KO, which contains machine-readable documentation of the administrative, descriptive and technical properties of the KOs. Metadata refers to information that describes and represents KOs and provides context for it. The metadata file includes 

- __@id__: It is a unique identifier for this object that allows it to be resolved within the knowledge grid. It can either be an absolute or relative URL. See [Node Identifiers](https://w3c.github.io/json-ld-syntax/#node-identifiers) section of json-ld syntax.

- __@identifier__: The identifier field is an extra globally unique identifier. The Knowledge Grid currently uses [ARK](https://n2t.net/e/ark_ids.html) identifiers natively which interoperate with [EZID](http://ezid.cdlib.org/) and top-level resolvers like [Name2Thing](http://www.n2t.net/). (Support for other identifiers like [DOI](http://www.doi.org/)s is planned).

- __@type__: Setting this to "koio:KnowledgeObject" is what declares this as a Knowledge Object. The Knowledge Grid depends on this when determining whether something is a Knowledge Object.

- __title__: This field represents the name or title of the Knowledge Object (KO). It is a brief and descriptive label that conveys the central topic, focus, or purpose of the KO.

- __version__: It indicates the specific version or release of the KO. It helps to identify and distinguish between different iterations or updates of the KO. Versioning is important for tracking changes and ensuring compatibility.

- __description__: This field provides a comprehensive summary of the KO. It offers users a clear understanding of the KO's content (structure and functionality), purpose, and significance. The description should concisely convey what the KO is about, its intended use, and any unique features or contributions it offers.

- __contributors__: It identifies individuals or entities who have played a meaningful and significant role in the creation, development, or maintenance of this KO. Contributors encompass a wide range of roles and responsibilities related to the KO, and they may include authors, researchers, designers, developers, reviewers, editors, and other relevant parties. It may include authors, developers, reviewers and editors, project managers, data providers and funding resources.

- __keywords__: Keywords field consists of a list of words or phrases that succinctly describe the central topics, themes, and concepts addressed within the Knowledge Object. These keywords help users quickly identify relevant KOs when searching or browsing within a knowledge repository.

- __hasServiceSpecification__: This is the path to the service description file of the KO.

- __hasDeploymentSpecification__: This is the path to the deployment description file of the KO.

- __@context__: This field is used to map koio terms to IRIs (along with other terms). Contexts can either be directly embedded into the document (an embedded context) or be referenced using a URL. Please use the koio context url: http://kgrid.org/koio/contexts/knowledgeobject.jsonld


Here is an example of a metadata file for a BMI calculator KO.

```json
{
  "@id" : "bmi/calculator/v1.0",
  "@type" : "koio:KnowledgeObject",
  "title" : "BMI calculator",
  "identifier" : "ark:/bmi/calculator/v1.0",
  "version" : "v1.0",
  "description" : "A knowledge object to calculate BMI and categories",
  "contributors" : "Kgrid Team",
  "keywords" : [ "BMI", "calculator" ],
  "hasServiceSpecification" : "service.yaml",
  "hasDeploymentSpecification" : "deployment.yaml",
  "hasPayload" : "src/bmi_calculator/bmi.py",
  "@context" : [ "http://kgrid.org/koio/contexts/knowledgeobject.jsonld" ]
}
```

### Deployment Description

A knowledge object must include a deployment description (deployment.yaml) in the root of KO, which includes all the details needed for deploying the KO in an activator. For each endpoint in the KO, this file will include the following:

- __endpoint id__: Endpoint id is used as part of the route to the endpoint.

- __method type__: Method type is 'post' for the deployment, as 'get' is used to expose deployment specifications for endpoints.

- __engine__: We are still exploring the idea of having multiple implementations for multiple activators in the same KO, but at this point each endpoint should have one engine section in the deployment file which includes the activator name and the specific detail needed for deployment of KO in it. In the case of python activator, it includes detail on how to locate the function implementing the endpoint function.

Here is an example of a deployment file for the BMI calculator KO:

```yaml
/bmi:
  post:    
    engine:
      name: org.kgrid.python-activator
      package: bmi_calculator
      module: bmi
      function: calculate_bmi   
/category:
  post:    
    engine:
      name: org.kgrid.python-activator
      package: bmi_calculator
      module: bmi
      function: get_bmi_category
```

### Service Description

A knowledge object must include a service description (service.yaml) in the root of KO, which includes the information needed to provide documentation and test interface using swagger editor. (See [OpenAPISpecification](https://swagger.io/specification/) for more detail)

Here is an example if service description file for BMI Calculator KO:

```yaml
openapi: 3.0.0
info:
  version: '1.0'
  title: 'bmi calculator'
  description: 'A knowledge object to calculate bmi and categories.'
  license:
    name: GNU General Public License v3 (GPL-3)
    url: >-
      https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)#fulltext
  contact:
    name: KGrid Team
    email: kgrid-developers@umich.edu
    url: 'http://kgrid.org'
servers:
  - url: /endpoints/bmi/calculator/v1.0
    description: Calculate bmi
tags:
  - name: KO Endpoints
    description: bmi calculation Endpoints    
paths:
  /bmi:
    post:
      summary: Calculate bmi value.
      description: Calculates bmi value.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:  
                height:
                  type: number
                  format: float
                  description: Height of the person. If using 'imperial' unit_system, use height in inches.
                  example: 175.0              
                weight:
                  type: number
                  format: float
                  description: Weight of the person. If using 'imperial' unit_system, use weight in pounds.
                  example: 70.0                
                unit_system:
                  type: string
                  enum: [metric, imperial]
                  description: Unit system for weight and height ('metric' or 'imperial').
                  example: metric
      responses:
        '200':
          description: Successfully calculated bmi value.
          content:
            application/json:
              schema:
                type: object
                properties:
                  bmi:
                    type: number
                    format: float
                    description: bmi.
                    example: 19.0
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericresponse'
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericerror'
  /category:
    post:
      summary: Calculate category value.
      description: Calculates category value.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:  
                bmi:
                  type: number
                  format: float
                  description: bmi of the person.
                  example: 20.0              
      responses:
        '200':
          description: Successfully calculated bmi category.
          content:
            application/json:
              schema:
                type: object
                properties:
                  category:
                    type: string
                    description: bmi category.
                    example: Normal weight
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericresponse'
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericerror'
```

### Payload Files

Each KO includes one or more payload files which implements the KO service. The implementation and structure of the payload files within the KO folder depend on the specific activator it is implemented for. But what is common between all KO implementations is that there should be a function, implemented in payloads, that would be the point of access for executing the service for each endpoint. Engine specific section of the deployment file will contain information for activators on how to find that function for each endpoint. 

As an example, for KOs implemented for Python activator (org.kgrid.python-activator), the KO payloads must be structured as a python package inside the KO folder. There are a few different ways to create a python package that require different files and structure. Here is an example of Poetry being used to create the BMI calculator KO for python activator:

```
bmi-calculator/
├── deployment.yaml
├── metadata.json
├── pyproject.toml
├── service.yaml
├── src
│      └── bmi_calculator
│               ├── __init__.py
│               └── bmi.py
└── tests
                ├── __init__.py
                └── test_bmi.py

```

### Test Files

The Ko may include some test files that test the KO payloads with some sample test cases.

## Related links
- [Kgrid Website](https://kgrid.org/)
- [Knowledge Grid Activator Specifications](https://kgrid.org/specs/activationSpec.html) 
- [Python Activator](https://github.com/kgrid/python-activator)
- [JavaScrirpt Activator](https://github.com/kgrid/javascript-activator)
- [kgrid Reference Objects](https://github.com/kgrid/reference-objects)
- [Knowledge Object Implementation Ontology (KOIO)](https://github.com/kgrid/koio)
