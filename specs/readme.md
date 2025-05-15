---
layout: default
title: KOIO Specification
permalink: /specs/
---

The Knowledge Object Implementation Ontology
Draft Specification as of May 31, 2025

Current version:
2.1
This version: 
https://github.com/kgrid/koio/tree/master/2.1 tsk
Latest release:
https://github.com/kgrid/koio/releases/tag/2.1
Corresponding JSON-LD Context: 
https://kgrid.org/koio/2.1/context
Cite as:
Knowledge Systems Lab, Department of Learning Health Sciences, University of Michigan Medical School (2025), Knowledge Object Implementation Ontology (KOIO), https://github.com/kgrid/koio/blob/master/2.1/koio.owl
Publication (release) date:
February 19, 2025
Current Editors and Contributors:
Allen Flynn, Charles P. Friedman, Farid Seifi, Marisa Conte, Peter Boisvert, Zach Landis-Lewis. Niranjan Kumar
Past Contributors:
Namita Bahulekar, Andrew Beck, Greg Farris, Nate Gittlen, Carl Lagoze, George Meng


Abstract
Knowledge Objects are structured, formal computer processable and machine readable packages of knowledge with additional resources that facilitate knowledge use and management.

The Knowledge Object Implementation Ontology (KOIO) is a domain ontology that tells us precisely what a Knowledge Object is as an artifact. KOIO provides a systematic way to describe Knowledge Objects and their key parts as they are implemented in practice. For this reason, KOIO generally serves as an evolving formal model of Knowledge Objects. KOIO can also be used to describe the parts of existing computable biomedical knowledge (CBK) artifacts found in the wild. In a practical way, KOIO functions as a formal specification for linked metadata relevant for describing, annotating, packaging, and handling CBK artifacts.

The development of KOIO began in a medical school and continues to focus on helping people prepare CBK artifacts for use by a wide variety of developers, researchers, analysts, clinicians, and others. The "B" in CBK stands for "biomedical", a general term indicating any knowledge related to biomedical science and/or clinical medicine and/or human health. While KOIO's origin involved biomedical knowledge, there is nothing specific to biomedicine in the ontology. Rather, the work to develop and improve KOIO is focused on helping people adapt to a world where much more knowledge than ever before is formally and intentionally represented in computer processable ways. KOIO is a specification that focuses intently on computable knowledge. That is not expected to change. Biomedicine offers many use cases for computable knowledge, making it a suitable domain to keep exploring and advancing computable knowledge use.

By design, only a very small number of new terms describing key parts known to be valuable to CBK stakeholders are included in KOIO. Along with Knowledge Objects, three more core terms defined in KOIO are “Knowledge”, “Service”, and “Test”. As a model of Knowledge Objects, KOIO supports multiplicity of these parts. This means that a Knowledge Object may have one or more elements of knowledge with multiple corresponding services and tests. By design, KOIO enables the lifecycles and provenance of these key parts of Knowledge Objects to be tracked and documented independently.

The key parts of Knowledge Objects defined in KOIO are logically connected to terms from the upper-level Basic Formal Ontology (BFO). In addition, KOIO adopts relevant terms from the Information Artifact Ontology (IAO) and the Software Ontology (SWO) wherever possible.

Finally, KOIO tries to leave all software and practice implementation details out so that it can serve as a common ontology for describing nearly all CBK artifacts, regardless of the platforms or applications that support and incorporate them, and agnostic as to how people ultimately use CBK artifacts.

Status of this Document and Compliance
This document is a draft of a potential specification for KOIO. It has no official standing of any kind and does not represent the support or consensus of any standards organization. There is NO normative content in this document. Instead, all content is informational and serves to explain what KOIO is and how it might be used. For that reason, all compliance is informal and provisional. We show and link to actual examples of KOIO use in Section 4 below.

Contact Information
The Knowledge Systems Lab (KSL) at the University of Michigan began work on KOIO in 2016 and continues to evolve KOIO over time. KSL is based in the Department of Learning Health Sciences at the University of Michigan Medical School.

To contact KSL, use the following email address:
knowledgesystemslab@umich.edu


Table of Contents
	1. Introduction
Problem
Purpose
Commitments
Conventions
Imported Ontologies
Prefixes and Namespaces
Who KOIO Is For
Our Ongoing Work to Model Computable Biomedical Knowledge (CBK)
The MCBK Community
	2. Definitions
KOIO Classes
KOIO Object Properties
Classes and Properties Under Development
	3. The Knowledge Object Implementation Ontology
	4. Examples of Knowledge Objects with Metadata generated using KOIO
Computable Guideline Knowledge Object
Clinical Calculator Knowledge Object
Computable Phenotype Knowledge Object
      	5. Adding KOIO-based Metadata to the Metadata for an Existing Artifact 
6. Tools and Tests

	A. References
	
1. Introduction
This introduction discusses what motivated KOIO and then covers the purpose of KOIO, KOIO's commitments and other background information.

THE PROBLEM MOTIVATING WORK ON KOIO
The knowledge management and organization problem motivating KOIO is that it is difficult to find, access, interoperate with (or integrate), and reuse units of content created to convey computer actionable and evidence-based representations of knowledge.

In this context, to be "computer actionable" means either that knowledge is itself represented in the form of explicit machine instructions known as software OR that knowledge is represented in structured, predictable forms anticipated by and intentionally processed using explicit machine instructions. Other forms of computable actionable knowledge besides software include lookup tables and formalized data structures for representing concepts and relationships (e.g., RDF triples) and production rules.  

To be "evidence-based" means that the computer actionable knowledge of interest arises from studies involving empirical quantitative and qualitative methods of observation and inquiry.  

Finally, a "unit of content" is any file or group of files. KOIO specifies how to describe units of content called Knowledge Objects in a formal way.  

THE PURPOSE OF KOIO
The purpose of KOIO is to make it easier for many people in different roles to find, access, and use CBK artifacts in their everyday professional work. Relevant roles include a variety of technical, clinical, research, and administrative roles, among others.  

KOIO provides a way of describing CBK artifacts, hopefully moving the world one step closer to realizing better infrastructure for computable actionable knowledge. Ideally, such infrastructure would make CBK artifacts openly and widely available, enabling more utilization of shared CBK and avoiding duplication of effort.

COMMITMENTS
The content of KOIO reflects the following six commitments:

		FOUR GENERAL COMPUTABLE KNOWLEDGE COMMITMENTS
Computer actionable representations of knowledge have unique properties
Infrastructure helps widely share computer actionable representations of knowledge 
Formalized and standardized digital Knowledge Objects reflect and enable infrastructure
Trust in computer actionable biomedical knowledge is increased by sharing metadata

TWO ADDED COMMITMENTS SPECIFIC TO COMPUTABLE BIOMEDICAL KNOWLEDGE
For human health, open computer actionable representations of biomedical knowledge should remain open not precluding proprietary refinements, extensions or enhancements
Metadata describing computer actionable representations of biomedical knowledge should be open even when the representations themselves are proprietary


CONVENTIONS
KSL’s general approach is to keep KOIO concise, connected (to other ontologies and vocabularies), and common (to all Knowledge Objects). 

IMPORTED ONTOLOGIES
KOIO imports two ontologies: the Information Artifact Ontology (IAO) and the Software Ontology (SWO). Links to these two ontologies are here:
http://purl.obolibrary.org/obo/iao/2022-11-07/iao.owl
https://raw.githubusercontent.com/allysonlister/swo/master/swo-full.owl

PREFIXES AND NAMESPACES
The Knowledge Object Implementation Ontology's namespace is here:
https://kgrid.org/koio# 

The preferred prefix is koio:

WHO KOIO IS FOR
KOIO is for people who want to describe instances of computer actionable representations of knowledge and corresponding software, software tests and documentation in a systematic way.

OUR ONGOING WORK TO MODEL COMPUTABLE BIOMEDICAL KNOWLEDGE AND ADVANCE INFRASTRUCTURE 
Developing and working with KOIO is part of a larger effort to model computable biomedical knowledge (CBK) - what it is, what it does, who uses it, how it is used, etc. We are pursuing this work as a means of informing the development of better knowledge infrastructure for CBK. 

RECOGNIZING THE MOBILIZING COMPUTABLE BIOMEDICAL KNOWLEDGE (MCBK) COMMUNITY
The work to develop and improve KOIO has been inspired and guided by the members of the MCBK community. More information about this community is available at: https://mobilizecbk.med.umich.edu/ 


2. Definitions
The following classes and properties have been defined in the latest version of KOIO. The following lists include only the unique classes and properties that KOIO stipulates.  

KOIO CLASSES
The following list starts with the Knowledge Object class, then lists four possible parts of any Knowledge Object.  

KnowledgeObject, def., an Information Artifact capable of serving a role as the atomic unit of computable knowledge and therefore comprised of at least one Knowledge Object Implementation

Knowledge, def., information or understanding about a subject, obtained through experience or study.

Service, def., a defined function or capability provided by a software system. Each Service provides a way to use or interact with a Knowledge Object, facilitating access and utilization of the Knowledge encapsulated within the Knowledge Object. A Service is a specification of what a self-contained piece of software does.

Test, def., an information content entity conveying a systematic procedure to assess specific aspects of software performance, functionality, or security. Tests are created to ensure that the software meets specified requirements or to identify any defects.

Implementation, def., a computer or machine processable file that is or informs a series of instructions that can be directly interpreted or executed.

KOIO OBJECT PROPERTIES 
The following lists of properties starts with two properties that relate disparate parts of Knowledge Objects followed by five properties that indicate the parts a Knowledge Object has. 

dependsOn, def., indicates that a Service uses specific Knowledge

isImplementedBy*, def. is the relationship between Knowledge, Service, and Test and a piece of software which includes an implementation of that software for use when the software is executed 

hasInterface*, def., provides a method of asserting what type of interactions are possible for any instance of Service. These methods may include APIs, command line interfaces, user interfaces, webservices interfaces, or other interfaces.


hasDocumentation*, def., a property that indicates an association between a knowledge object, knowledge, service, test, and documentation that describes, relates to, or provides information about each of these things.

hasKnowledge, def., indicates that a Knowledge Object contains or is associated with specific Knowledge.

hasService , def., a relation that holds between a whole Knowledge Object and its Service part(s). Denotes that a Knowledge Object includes or provides a specific Service.

hasTest, def., a property that links a Knowledge Object, Service, or Knowledge to a specific Test designed to evaluate its functionality, performance, or reliability. This property signifies that the component has an associated test to verify or validate its behavior.

* Definitions with an asterisk have been revised after KOIO 2.1 was released and will appear in future releases of KOIO. 


CLASSES AND PROPERTIES UNDER DEVELOPMENT FOR FUTURE VERSIONS OF KOIO
The following classes and properties are not included in KOIO 2.1 but may be included in future versions of KOIO. The items below and their definitions arise from work to model collections of Knowledge Objects. These classes and properties are a work in progress. Their utility is currently being explored. Question marks in brackets like this [?] indicate unsettled issues.

KnowledgeSet, def., is a type of Knowledge that is a non-empty [?] collection (unordered set [?]) or specification of a non-empty [?] collection (unordered set [?]) of Knowledge Objects and related files represented as an RDF Container [?], associated with some organizing principle [?]. Knowledge Sets can have metadata, examples, and documentation.


KnowledgeBase, def., a type of Knowledge Object that has one or more Knowledge Sets and has one or more Purposes 

Purpose [? source?], def., a statement indicating why something exists spanning its audience [?], its intended platform for use [?], its use case(s) [?], its stakeholders [?], … 

hasKnowledgeSet [? need?], def., is a sub-property of hasKnowledge that links of Knowledge Object of type Knowledge Base to a specific KnowledgeSet 


hasKnowledgeObject, def., a property that links of Knowledge Set to a Knowledge Object

3. The Knowledge Object Implementation Ontology

THE CORE OF KOIO
The figure below depicts six core classes from KOIO related by six object properties (Not shown is a seventh hasDocumentation object property to associate documentation with instances of the six core classes). 

The 'Knowledge', 'Service', and 'Test' classes  in grey represent a key set of three distinct parts of Knowledge Objects. These key parts may all have one or more instances of 'Implementation'. Each instance of 'Implementation' is a concrete, computer-actionable representation of some 'Knowledge', 'Service', or 'Test'. An instance of 'Service' may also depend on one or more instances of 'Knowledge'.  

In addition, KOIO recognizes that essentially all instances of 'Service' have one or more instances of 'Software Interface', which is a specification of an interface enabling a machine or client application to access content in a Knowledge Object. Typically clients use software interfaces to access the knowledge exposed by services. 



KOIO was developed with linked (meta)data in mind. KOIO comes with a general underlying commitment to linked data and the technologies of the semantic web. KOIO is intended to be used in various Resource Description Framework (RDF) technical environments. For this reason, KOIO is provided in OWL format and the metadata examples shown below are all provided in JSON-LD format. JSON-LD is one format for RDF triples. It is possible to convert the JSON-LD formatted examples to any other RDF serializations using tools like the Easy RDF Converter. 

JSON-LD CONTEXT FILE FOR LINKING TO KOIO TERMS
The following examples of KOIO use all rely on the same JSON-LD context file for implementing KOIO terms inside linked RDF metadata. This JSON-LD context file helps establish links to KOIO terms and also to terms from three other common RDF vocabularies. The initial lines of the context file are below and the whole context file can be found at: https://kgrid.org/koio/2.1/context. The examples that follow all include the @Context keyword from JSON-LD to invoke this context file. 

Snippet of Context File for Linking to KOIO 2.1 Terms
```json
  "@id": "https://kgrid.org/koio/2.1/context",
  "@context" : {
    "koio": "http://kgrid.org/koio#",
    "dc": "http://purl.org/dc/elements/1.1/",
    "dcterms": "http://purl.org/dc/terms/",
    "schema":"http://schema.org/",


    "KnowledgeObject" : {
      "@id" : "https://kgrid.org/koio#KnowledgeObject"
    },
    "versionInfo" : {
      "@id" : "http://www.w3.org/2002/07/owl#versionInfo"
    },
…
```

EXAMPLE 1
In the example below, an Information Artifact of type 'Knowledge Object' is declared using KOIO. This Knowledge Object is then associated with a variety of common administrative and descriptive metadata using the Dublin Core Elements vocabulary.  

EX 1:  Knowledge Object declaration
```json
{
    "@context": "https://kgrid.org/koio/2.1/context",
    "@id": "bmiKO",
    "KOIOVersion": "2.1",
    "@type": "KnowledgeObject",
    "dc:identifier": "ark:calculate_bmi",
    "dc:version": "3.0.0",
    "dc:date": "2025-02-06",
    "dc:title": "BMI Calculator",
    "dc:description": "Calculates BMI",
    "dc:contributor": "KSL Team",
    "schema:creator": {
        "@id": "https://kgrid.org",
        "@type": "team",
        "schema:name": "Knowledge Systems Lab",
        "schema:affiliation": "Knowledge Systems Lab, University of Michigan Medical School",
        "schema:email": "kgrid-developers@umich.edu"
    },
    "dc:publisher": "Knowledge Systems Lab",
    "dc:bibliographicCitation": "https://pubmed.ncbi.nlm.nih.gov/t34-349/",
    "dc:license": {
        "@id": "license.md"
    }
}
```

EXAMPLE 2
In the second example below, for the Knowledge Object declared in Example 1, an instance of 'Knowledge' is related to the Knowledge Object via the 'hasKnowledge' object property. In Example 2, the 'Knowledge' instance has id=bmiKnowledge. In addition, it 'isImplementedBy' a function stored inside a JavaScript file called bmi.js.

EX 2:  Showing an instance of Knowledge as part of a Knowledge Object
```json
{
    ~EX 1 FITS HERE~
    "hasKnowledge": [
        {
            "@id": "bmiKnowledge",
            "@type": "Knowledge",
            "implementedBy": {
                "@id": "Knowledge/bmi.js",
                "@type": [
                    "Implementation",
                    "JavaScript",
                    "function"
                ]
            },
            "schema:creator": {
                "@type": "team",
                "schema:name": "DISPLAY Lab"
            }
        }
    ]
}
```

EXAMPLE 3
In the third example below, for the Knowledge Object declared in Example 1, with the instance of Knowledge linked in Example 2, two instances of 'Service' are related via the 'hasService' object property. The first instance of 'Service' is an API service which has an implementation and is related to a service.yaml interface specification via the 'hasInterface' object property. The second instance of 'Service' is a command line interface (CLI) service which is implemented in a TypeScript file called bmi_cli.ts.  

EX 3:  Knowledge Object with Knowledge and Service(s)
```json
{    
    ~EX 1 FITS HERE~
    ~EX 2 FITS HERE~
    "hasService": [
        {
            "@id": "APIService",
            "@type": [
                "Service",
                "API"
            ],
            "dc:description": "This service is used through JavaScript Activator",
            "dependsOn": "bmiKnowledge",
            "implementedBy": {
                "@id": "APIService",
                "@type": [
                    "Implementation",
                    "https://kgrid.org/specs/activationSpec.html#object",
                    "javascript"
                ]
            },
             "hasInterface": "APIService/service.yaml"	     	
        },
        {
            "@id": "CLIService",
            "@type": [
                "Service"
            ],
            "dependsOn": "bmiKnowledge",
            "implementedBy": {
                "@id": "CLIService/bmi_cli.ts",
                "@type": [
                    "Implementation",
                    "cli"
                ]
            },
            "hasInterface": "CLIService/readme.md"
           }   
        }
    ]
}
```

EXAMPLE 4
In the fourth example below, for the Knowledge Object declared in Example 1, the Knowledge Object itself and its instances of 'Knowledge' and 'Service' have been extended to include corresponding software tests using the 'hasTest' object property.  

EX 4:  Knowledge Object with Knowledge and Service(s) and Test(s):
```json
{ 
  ~EX 1 FITS HERE~
    "hasKnowledge": [
        {
            "@id": "bmiKnowledge",
            "@type": "Knowledge",
            "implementedBy": {
                "@id": "Knowledge/bmi.js",
                "@type": [
                    "Implementation",
                    "JavaScript",
                    "function"
                ]
            },
            "schema:creator": {
                "@type": "team",
                "schema:name": "DISPLAY Lab"
            },
            "hasTest": [
                {
                    "@id": "tests/bmiKnowledgeTest.ts",
                    "dc:title": "knowledge test",
                    "@type": "Test",
                    "dc:description": "These tests are written to test the implementation of the bmi formula."
                }
            ]
        }
    ],
    "hasService": [
        {
            "@id": "APIService",
            "@type": [
                "Service",
                "API"
            ],
            "dc:description": "This service is used through JavaScript Activator",
            "hasServiceSpecification": "APIService/service.yaml",
            "dependsOn": "bmiKnowledge",
            "implementedBy": {
                "@id": "APIService",
                "@type": [
                    "Implementation",
                    "https://kgrid.org/specs/activationSpec.html#object",
                    "javascript"
                ]
            },
            "hasTest": [
                {
                    "@id": "tests/bmiTestAPIService.ts",
                    "dc:title": "API service test",
                    "@type": "Test",
                    "dc:description": "These tests are written to test the implementation of API service and its usage."
                }
            ]
        },
        {
            "@id": "CLIService",
            "@type": [
                "Service"
            ],
            "dependsOn": "bmiKnowledge",
            "implementedBy": {
                "@id": "CLIService/bmi_cli.ts",
                "@type": [
                    "Implementation",
                    "cli"
                ]
            }
        }
    ],
    "hasTest": [
        {
            "@id": "tests/bmiKOTest.ts",
            "dc:title": "KO test",
            "@type": "Test",
            "dc:description": "These tests are written to test the usage of the knowledge object and provide examples on how to use it."
        }
    ]
}
```

EXAMPLE 5
In the fifth example below, for the Knowledge Object declared in Example 1, the Knowledge Object itself and its instances of 'Knowledge' and 'Service' have been further described with documentation linked using the 'hasDocumentation' object property. In KOIO, instances documentation are always of type 'Information Artifact' and can take any relevant form and have any file format.

EX 5:  Knowledge Object with Knowledge and Service(s) and Test(s) and Information Artifacts that serve as documentation for these things
```json
{
    ~EX 1 FITS HERE~
    "hasKnowledge": [
        {
            "@id": "bmiKnowledge",
            "@type": "Knowledge",
            "implementedBy": {
                "@id": "Knowledge/bmi.js",
                "@type": [
                    "Implementation",			
                    "JavaScript",
                    "function"
                ]
            },
            "schema:creator": {
                "@type": "team",
                "schema:name": "DISPLAY Lab"
            },
            "hasDocumentation": [
                {
                    "@id": "bmiKnowledgeDocumentation.md",
                    "@type": "InformationArtifact",
                    "dc:title": "BMI Knowledge documentation",
                    "dc:description": "Documentation for bmi formula and how it is implemented as a function."
                }
            ],
            "hasTest": [
                {
                    "@id": "tests/bmiKnowledgeTest.ts",
                    "dc:title": "knowledge test",
                    "@type": "Test",
                    "dc:description": "These tests are written to test the implementation of the bmi formula."
                }
            ]
        }
    ],
    "hasService": [
        {
            "@id": "APIService",
            "@type": [
                "Service",
                "API"
            ],
            "dc:description": "This service is used through JavaScript Activator",
            "hasServiceSpecification": "APIService/service.yaml",
            "dependsOn": "bmiKnowledge",
            "implementedBy": {
                "@id": "APIService",
                "@type": [
                    "Implementation",
                    "https://kgrid.org/specs/activationSpec.html#object",
                    "javascript"
                ]
            },
            "hasDocumentation": [
                {
                    "@id": "bmiKOAPIDocumentation.md",
                    "@type": "InformationArtifact",
                    "dc:title": "Knowledge object's API service documentation",
                    "dc:description": "Instruction on how to use an activator to use API service"
                }
            ],
            "hasTest": [
                {
                    "@id": "tests/bmiTestAPIService.ts",
                    "dc:title": "API service test",
                    "@type": "Test",
                    "dc:description": "These tests are written to test the implementation of API service and its usage."
                }
            ]
        },
        {
            "@id": "CLIService",
            "@type": [
                "Service"
            ],
            "dependsOn": "bmiKnowledge",
            "implementedBy": {
                "@id": "CLIService/bmi_cli.ts",
                "@type": [
                    "Implementation",
                    "cli"
                ]
            }
        }
    ],
    "hasDocumentation": [
        {
            "@id": "bmiKODocumentation.md",
            "@type": "InformationArtifact",
            "dc:title": "Knowledge object documentation",
            "dc:description": "Knowledge object read me file."
        },
        {
            "@id": "bmiJupiterNotebookTutorial.ipynb",
            "@type": "InformationArtifact",
            "dc:title": "BMI Calculation",
            "dc:description": "An interactive jupyter notebook tutorial for BMI calculation."
        }
    ],
    "hasTest": [
        {
            "@id": "tests/bmiKOTest.ts",
            "dc:title": "KO test",
            "@type": "Test",
            "dc:description": "These tests are written to test the usage of the knowledge object and provide examples on how to use it."
        }
    ]
}
```

4. More Examples of Knowledge Objects described using KOIO

The examples of Knowledge Objects described using KOIO that follow are representative of the kinds of Knowledge Objects that enable clinical decision support and health data analysis. The following examples show metadata arising from applying KOIO 2.1. The initial one (Example 6) shows how a computable guideline and related resources can be described. The next example (Example 7) shows how a health risk score calculator and related resources can be described. The final example (Example 8) shows how a computable phenotype and related resources can be described. 

AN EXAMPLE OF A KNOWLEDGE OBJECT WITH A COMPUTABLE GUIDELINE
Here is a link to a Knowledge Object with a computable guideline which contains an executable representation of the inclusion and exclusion criteria for the United States Preventive Services Task Force (USPSTF) guideline on statin medication use. More information about this statin use guideline can be found here. 


The metadata in Example 6 below begin with a description of the Knowledge Object as a whole. It has a simulated identifier (ark:StatinUse) and its own version (1.9). At the end of the metadata, the Knowledge Object is associated with documentation in two forms, a readme file and an interactive Google Collab notebook.  

The rest of the metadata in Example 6 describe and provide links to the Knowledge Object's instances of 'Knowledge', 'Service', and 'Test'. In this example, there is one instance of 'Knowledge', three instances of 'Service', and two instances of 'Test'. These are described next. 

The Knowledge Object in Example 6 has one 'knowledge' element pointing to a representation of guideline's inclusion and exclusion criteria in a Python file called cardiovascular_prevention_statin_use.py. This knowledge representation is associated with its own software test called test_knowledge.py. The knowledge is also associated with documentation, including a link to the relevant content from the guideline.

Additional software tests for testing this Knowledge Object's metadata using the KGrid SDK are linked in the section of these metadata with @id = "test_resources".

The metadata in Example 6 also associate and describe three services with this Knowledge Object. Recall from the definition above that Services provide ways to utilize the Knowledge encapsulated within the Knowledge Object. The three services included in this Knowledge Object are ActivatorService, CLIService, and APIService. The ActivatorService provides a special API interface to the computable guideline arising from running the KGrid Activator tool as a software gateway. The CLIService provides an application with an interface to the computable guideline implemented using machine commands. The APIService provides an API interface by exposing the computable guideline without requiring a separate gateway tool.   
 
EX 6: Metadata for USPSTF Statin Use Guideline Knowledge Object (KO)
```json
{
    "@context": "https://kgrid.org/koio/2.1/context",
    "@id": "cardiovascular-prevention-statin-use",
    "KOIOVersion": "2.1",
    "@type": "KnowledgeObject",
    "dc:identifier": "ark:StatinUse",
    "dc:version": "v1.9",
    "dc:date": "2024-12-12",
    "dc:title": "Statin Use for the Primary Prevention of Cardiovascular Disease in Adults: Preventive Medication",
    "dc:description": "The USPSTF recommends that:\nFor adults aged 40 to 75 years who have 1 or more cardiovascular risk factors (ie, dyslipidemia, diabetes, hypertension, or smoking) and an estimated 10-year cardiovascular disease (CVD) risk of 10% or greater:\nInitiate a statin.\nGrade: B\n\nFor adults aged 40 to 75 years who have 1 or more cardiovascular risk factors (ie, dyslipidemia, diabetes, hypertension, or smoking) and an estimated 10-year CVD risk of 7.5% to less than 10%:\nSelectively offer a statin.\nGrade: C\n\nFor adults 76 years or older:\nThe evidence is insufficient to recommend for or against starting a statin.\nGrade: I",
    "schema:creator": {
        "@id": "https://kgrid.org",
        "@type": "schema:Organization",
        "schema:givenName": "Knowledge Systems Lab",
        "schema:affiliation": "Knowledge Systems Lab, University of Michigan Medical School",
        "schema:email": "kgrid-developers@umich.edu"
    },
    "dc:publisher": "Knowledge Systems Lab",
    "dc:license": {
        "@id": "license.md"
    },
    "schema:keywords": [
        "Statin use",
        "Cardiovascular Disease",
        "USPSTF",
        "Preventive Medication"
    ],
    "hasKnowledge": [
        {
            "@id": "statin_use_for_the_primary_prevention_of_cardiovascular_disease",
            "@type": "Knowledge",
            "implementedBy": {
                "@id": "cardiovascular_prevention_statin_use/cardiovascular_prevention_statin_use.py",
                "@type": [
                    "Implementation",
                    "Function",
                    "Python"
                ]
            },
            "dc:source": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/statin-use-in-adults-preventive-medication#fullrecommendationstart",
            "dc:format": "text/html",
            "dc:date": "2022-08-23",
            "schema:creator": {
                "@type": "schema:Organization",
                "schema:name": "U.S. Preventive Services Task Force"
            },
            "hasTest": [
                {
                    "@id": "test_knowledge",
                    "dc:title": "Knowledge test",
                    "@type": "Test",
                    "dc:description": "These tests are written to test the accuracy of the knowledge implementation.",
                    "implementedBy": {
                        "@id": "tests/test_knowledge.py",
                        "@type": [
                            "Implementation",
                            "Python"
                        ]
                    }
                },
                {
                    "@id": "test_resources",
                    "@type": "Test",
                    "dc:title": "Implementation tests",
                    "dc:description": "These tests are written to test the use of superclass KO to implement this knowledge object.",
                    "implementedBy": {
                        "@id": "tests/test_resources.py",
                        "@type": [
                            "Implementation",
                            "Python"
                        ]
                    }
                }
            ],
            "hasDocumentation": [
                {
                    "@id": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/statin-use-in-adults-preventive-medication#fullrecommendationstart",
                    "@type": "InformationArtifact",
                    "dc:title": "Statin Use for the Primary Prevention of Cardiovascular Disease in Adults: Preventive Medication",
                    "dc:description": "This is the USPSTF documentation webpage for cardiovascular disease prevention statin use recommendation."
                }
            ]
        }
    ],
    "hasService": [
        {
            "@id": "ActivatorService",
            "@type": [
                "Service",
                "API"
            ],
            "dependsOn": "statin_use_for_the_primary_prevention_of_cardiovascular_disease",
            "implementedBy": {
                "@id": "cardiovascular_prevention_statin_use/",
                "@type": [
                    "https://kgrid.org/specs/activationSpec.html#object",
                    "Implementation",
                    "Python"
                ]
            }
        },
        {
            "@id": "CLIService",
            "@type": [
                "Service",
                "CLI"
            ],
            "dependsOn": "statin_use_for_the_primary_prevention_of_cardiovascular_disease",
            "implementedBy": {
                "@id": "cardiovascular_prevention_statin_use/cardiovascular_prevention_statin_use.py",
                "@type": [
                    "Implementation",
                    "Python"
                ]
            }
        },
        {
            "@id": "APIService",
            "@type": [
                "Service",
                "API"
            ],
            "dependsOn": "statin_use_for_the_primary_prevention_of_cardiovascular_disease",
            "implementedBy": {
                "@id": "cardiovascular_prevention_statin_use/cardiovascular_prevention_statin_use.py",
                "@type": [
                    "Implementation",
                    "Python"
                ]
            }
        }
    ],
    "hasDocumentation": [
        {
            "@id": "https://colab.research.google.com/drive/1nlYQ3U1a4uJUmyMYBFxXArEGxDy4DGpp?usp=sharing",
            "@type": "InformationArtifact",
            "dc:title": "Using USPSTF Knowledgebase Package: A Step-by-Step Tutorial",
            "dc:description": "This Google Colab tutorial demonstrates three different ways to use the cardiovascular-prevention-statin-use knowledge object:<ul><li>using the built-in command-line interface (CLI) service</li><li>using the python activator</li><li>using the knowledge object's knowledge representation directly in the code</li></ul>"
        },
        {
            "@id": "README.md",
            "@type": "InformationArtifact",
            "dc:title": "README.md",
            "dc:description": "read me file."
        }
    ]
}
```

AN EXAMPLE OF A KNOWLEDGE OBJECT WITH A HEALTH RISK SCORE CALCULATOR
Here is a link to a Knowledge Object containing an executable representation of NIH Stroke Scale. 

In the metadata for this Knowledge Object appearing below in Example 7, there are no instances of Service or Test. There is one instance of Knowledge, and it is implemented in a computer executable format by the file called "nihss.py". An interesting feature of these metadata is that the description of the single instance of Knowledge for the NIH Stroke Scale includes information about all the NIH Stroke Scale's distinct items. For these, terms from the Function Ontology (fno), e.g., "expects", and OWL enumerations of permitted values are included.   

EX 7: Metadata for National Institutes of Health Stroke Scale Risk Score Calculator KO
```json
{
    "@context": [
        "https://kgrid.org/koio/2.1/context",
        {
            "fno": "https://w3id.org/function/ontology#",
            "xsd": "https://www.w3.org/2001/XMLSchema#",
            "owl": "http://www.w3.org/2002/07/owl#"
        }
    ],
    "@id": "nihss",
    "KOIOVersion": "2.1",
    "@type": "KnowledgeObject",
    "dc:identifier": "ark:nihss",
    "dc:version": "v1.0",
    "dc:title": "NIH Stroke Scale",
    "dc:description": "Uses the patient's presenting symptoms and signs to quantify the severity of a suspected stroke.",
    "dc:contributors": "Kgrid Team",
    "dc:keywords": [
        "stroke",
        "cerebrovascular accident",
        "CVA",
        "cerebral ischemia",
        "focal neurologic deficit"
    ],
    "hasKnowledge": {
        "@id": "NIHStrokeScale",
        "@type": [
            "Knowledge",
            "fno:Function"
        ],
        "dc:Source": "https://pubmed.ncbi.nlm.nih.gov/7974549/",
        "schema:creator": {
            "@type": "schema:Person",
            "schema:name": "Dr. Patrick D. Lyden"
        },
        "fno:expects": [
            {
                "@id": "consciousness",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "ALERT_KEENLY_RESPONSIVE",
                    "AROUSES_TO_MINOR_STIMULATION",
                    "REQUIRES_REPEATED_STIMULATION_TO_AROUSE",
                    "MOVEMENTS_TO_PAIN",
                    "POSTURES_OR_UNRESPONSIVE"
                ],
                "dc:description": "The patient's response to being asked for their age and the month of the year.",
                "fno:required": "true"
            },
            {
                "@id": "month_and_age_questions",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "BOTH_QUESTIONS_RIGHT",
                    "ONE_QUESTION_RIGHT",
                    "ZERO_QUESTIONS_RIGHT",
                    "DYSARTHRIC_INTUBATED_TRAUMA_OR_LANGUAGE_BARRIER",
                    "APHASIC"
                ],
                "dc:description": "The patient's response to being asked for their age and the month of the year.",
                "fno:required": "true"
            },
            {
                "@id": "blink_eyes_and_squeeze_hands",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "PERFORMS_BOTH_TASKS",
                    "PERFORMS_ONE_TASK",
                    "PERFORMS_ZERO_TASKS"
                ],
                "dc:description": "The patient's response to being asked to blink their eyes and squeeze the examiner's hand. Can be pantomimed if patient does not understand.",
                "fno:required": "true"
            },
            {
                "@id": "horizontal_extraocular_movements",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NORMAL",
                    "PARTIAL_GAZE_PALSY_CAN_BE_OVERCOME",
                    "PARTIAL_GAZE_PALSY_CORRECTS_WITH_OCULOCEPHALIC_REFLEX",
                    "FORCED_GAZE_PALSY_CANNOT_BE_OVERCOME"
                ],
                "dc:description": "The patient's ability to perform horizontal extraocular movements. (i.e. look left and right with both eyes)",
                "fno:required": "true"
            },
            {
                "@id": "visual_fields",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NO_VISUAL_LOSS",
                    "PARTIAL_HEMIANOPIA",
                    "COMPLETE_HEMIANOPIA",
                    "PATIENT_IS_BILATERALLY_BLIND",
                    "BILATERAL_HEMIANOPIA"
                ],
                "dc:description": "The integrity of the patient's visual fields.",
                "fno:required": "true"
            },
            {
                "@id": "facial_palsy",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NORMAL_SYMMETRY",
                    "MINOR_PARALYSIS",
                    "PARTIAL_PARALYSIS",
                    "UNILATERAL_COMPLETE_PARALYSIS",
                    "BILATERAL_COMPLETE_PARALYSIS"
                ],
                "dc:description": "The ability of the patient to engage their facial muscles.",
                "fno:required": "true"
            },
            {
                "@id": "left_arm_motor_drift",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NO_DRIFT_FOR_10_SECONDS",
                    "DRIFTS_BUT_DOES_NOT_HIT_BED",
                    "DRIFTS_HITS_BED",
                    "SOME_EFFORT_AGAINST_GRAVITY",
                    "NO_EFFORT_AGAINST_GRAVITY",
                    "NO_MOVEMENT",
                    "AMPUTATION_JOINT_FUSION"
                ],
                "dc:description": "The patient's ability to overcome gravity with their left arm and hold a position without drifting.",
                "fno:required": "true"
            },
            {
                "@id": "right_arm_motor_drift",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NO_DRIFT_FOR_10_SECONDS",
                    "DRIFTS_BUT_DOES_NOT_HIT_BED",
                    "DRIFTS_HITS_BED",
                    "SOME_EFFORT_AGAINST_GRAVITY",
                    "NO_EFFORT_AGAINST_GRAVITY",
                    "NO_MOVEMENT",
                    "AMPUTATION_JOINT_FUSION"
                ],
                "dc:description": "The patient's ability to overcome gravity with their right arm and hold a position without drifting.",
                "fno:required": "true"
            },
            {
                "@id": "left_leg_motor_drift",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NO_DRIFT_FOR_5_SECONDS",
                    "DRIFTS_BUT_DOES_NOT_HIT_BED",
                    "DRIFTS_HITS_BED",
                    "SOME_EFFORT_AGAINST_GRAVITY",
                    "NO_EFFORT_AGAINST_GRAVITY",
                    "NO_MOVEMENT",
                    "AMPUTATION_JOINT_FUSION"
                ],
                "dc:description": "The patient's ability to overcome gravity with their left leg and hold a position without drifting.",
                "fno:required": "true"
            },
            {
                "@id": "right_leg_motor_drift",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NO_DRIFT_FOR_5_SECONDS",
                    "DRIFTS_BUT_DOES_NOT_HIT_BED",
                    "DRIFTS_HITS_BED",
                    "SOME_EFFORT_AGAINST_GRAVITY",
                    "NO_EFFORT_AGAINST_GRAVITY",
                    "NO_MOVEMENT",
                    "AMPUTATION_JOINT_FUSION"
                ],
                "dc:description": "The patient's ability to overcome gravity with their right leg and hold a position without drifting.",
                "fno:required": "true"
            },
            {
                "@id": "limb_ataxia",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NO_ATAXIA",
                    "ATAXIA_IN_1_LIMB",
                    "ATAXIA_IN_2_LIMBS",
                    "DOES_NOT_UNDERSTAND",
                    "PARALYZED",
                    "AMPUTATION_JOINT_FUSION"
                ],
                "dc:description": "The patient's ability to coordinate their limbs.",
                "fno:required": "true"
            },
            {
                "@id": "sensation",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NORMAL_NO_SENSORY_LOSS",
                    "MILD_MODERATE_LOSS_LESS_SHARP_MORE_DULL",
                    "MILD_MODERATE_LOSS_CAN_SENSE_BEING_TOUCHED",
                    "COMPLETE_LOSS_CANNOT_SENSE_BEING_TOUCHED_AT_ALL",
                    "NO_RESPONSE_AND_QUADRIPLEGIC",
                    "COMA_UNRESPONSIVE"
                ],
                "dc:description": "The patients's ability to sense touch.",
                "fno:required": "true"
            },
            {
                "@id": "language",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NORMAL_NO_APHASIA",                    "MILD_MODERATE_APHASIA_SOME_OBVIOUS_CHAGNES_WITHOUT_SIGNIFICANT_LIMITATION",                    "SEVERE_APHASIA_FRAGMENTARY_EXPRESSION_INFERENCE_NEEDED_CANNOT_IDENTIFY_MATERIALS",                    "MUTE_GLOBAL_APHASIA_NO_USABLE_SPEECH_AUDITORY_COMPREHENSION",
                    "COMA_UNRESPONSIVE"
                ],
                "dc:description": "The patient's ability to understand and construct language or lack thereof (i.e. aphasia).",
                "fno:required": "true"
            },
            {
                "@id": "dysarthria",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NORMAL",
                    "MILD_MODERATE_DYSARTHRIA_SLURRING_BUT_CAN_BE_UNDERSTOOD",                    "SEVERE_DYSARTHRIA_UNINTELLIGIBLE_SLURRING_OR_OUT_OF_PROPORTION_TO_DYSPHAGIA",
                    "MUTE_ANARTHRIC",
                    "INTUBATED_UNABLE_TO_TEST"
                ],
                "dc:description": "The patient's ability to produce the sounds of language or lack thereof (i.e. dysarthria).",
                "fno:required": "true"
            },
            {
                "@id": "inattention",
                "@type": [
                    "fno:Parameter",
                    "xsd:string"
                ],
                "owl:oneOf": [
                    "NO_ABNORMALITY",
                    "VISUAL_TACTILE_AUDITORY_SPATIAL_PERSONAL_INATTENTION",
                    "EXTINCTION_TO_BILATERAL_SIMULTANEOUS_STIMULATION",
                    "PROFOUND_HEMI_INATTENTION",
                    "EXTINCTION_TO_GREATER_THAN_1_MODALITY"
                ],
                "dc:description": "The patient's ability to maintain attention or lack thereof.",
                "fno:required": "true"
            }
        ],
        "implementedBy": {
            "@id": "https://raw.githubusercontent.com/kgrid-lab/LLM_with_RAG_chatbot/main/KO/clinical_calculators/code/nihss.py",
            "@type": [
                "Implementation",
                "Function",
                "Python"
            ]
        }
    }
}
```

AN EXAMPLE OF A KNOWLEDGE OBJECT WITH A COMPUTABLE PHENOTYPE
Here is a link to a Knowledge Object containing a computable phenotype for Nephrotic Syndrome.

The metadata for this Knowledge Object are shown below Example 8. This Knowledge Object includes one instance of 'Knowledge', two instances of 'Service', and no instances of 'Test'. In this case, the source of its one instance of knowledge was first published as a SQL query, a common format for expressing computable phenotypes. Then, the logic of this query was re-implemented in Python in a computer executable file called "classification_algorithm.py".  

EX 8: Metadata for Nephrotic Syndrome Computable Phenotype KO
```json
{
    "@context": "https://kgrid.org/koio/2.1/context",
    "@id": "NSCP",
    "KOIOVersion": "2.1",
    "@type": "KnowledgeObject",
    "dc:identifier": "ark:NSCP",
    "dc:version": "v1.0",
    "dc:date": "2024-09",
    "dc:title": "Nephrotic Syndrome Computable Phenotype",
    "dc:description": "An algorithm to screen structured patient data and return inclusion encounters for nephrotic syndrome",
    "schema:contributor": {
        "@id": "https://orcid.org/0000-0001-7377-163X",
        "@type": "Person",
        "schema:familyName": "Conte",
        "schema:givenName": "Marisa",
        "schema:affiliation": "Knowledge Systems Lab, University of Michigan Medical School",
        "schema:email": "meese@umich.edu"
    },
    "schema:creator": {
        "@id": "https://orcid.org/0009-0008-4454-5826",
        "@type": "Person",
        "schema:familyName": "Seifi",
        "schema:givenName": "Farid",
        "schema:affiliation": "Knowledge Systems Lab, University of Michigan Medical School",
        "schema:email": "faridsei@med.umich.edu"
    },
    "dc:publisher": "Knowledge Systems Lab",
    "dc:license": {
        "@id": "license.md"
    },
    "dc:bibliographicCitation": "Knowledge Systems Lab. (2024). Nephrotic Syndrome Computable Phenotype Knowledge Object v1.0. Available: https://github.com/kgrid-lab/nephroticsyndrome-computablephenotype.",
    "hasKnowledge": [
        {
            "@id": "NephroticSyndromeCP",
            "@type": "Knowledge",
            "implementedBy": {
                "@id": "classification_algorithm.py",
                "@type": [
                    "Implementation",
                    "Function",
                    "Python"
                ]
            },
            "dc:source": "https://github.com/AoliverioUM/nephroticsyndrome-computablephenotype/blob/main/Nephrotic_Syndrome_1_Patients_2018_0411.sql",
            "dc:format": "application/sql",
            "dc:date": "2018-04-11",
            "schema:creator": {
                "@type": "Person",
                "schema:familyName": "Dorn",
                "schema:givenName": "Chad",
                "schema:affiliation": "Vanderbilt University Medical Center",
                "schema:email": "chad.a.dorn@vumc.org"
            },
            "dc:description": "An SQL classification algorithm that creates a cohort of patients with primary nephrotic syndrome from structured data modeled on the PCORI Common Data Model",
            "dc:subject": "https://www.ncbi.nlm.nih.gov/mesh/68009404",
            "dc:isReferencedBy": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8986057",
            "schema:funder": "Patient Centered Outcomes Research Institute"
        }
    ],
    "hasService": [
        {
            "@id": "CLIService",
            "@type": [
                "Service",
                "CLI"
            ],
            "dependsOn": "NephroticSyndromeCP",
            "implementedBy": {
                "@id": "cli.py",
                "@type": [
                    "Implementation",
                    "Batch",
                    "Python"
                ]
            }
        },
        {
            "@id": "APIService",
            "@type": [
                "Service",
                "API"
            ],
            "dependsOn": "NephroticSyndromeCP",
            "implementedBy": {
                "@id": "api.py",
                "@type": [
                    "Implementation",
                    "API",
                    "Python"
                ]
            }
        }
    ]
}
```

5. Adding KOIO-based Metadata to the Metadata for an Existing Artifact 

KOIO is intended to allow creators and owners of existing CBK artifacts to extend the metadata they already have by adding KOIO terms. In this sense, KOIO can be shown to interoperate with other metadata generating and consuming processes. As one example of this, we have chosen a computable phenotype created by others and made available through PheKB to show how KOIO metadata can extend existing metadata. 

EX 9: Using KOIO to Extend Existing Metadata for a Computable Phenotype for Angiotensin Converting Enzyme Inhibitor (ACE-I) induced cough. 

In the following example, a new Knowledge Object (KO) containing previously existing CBK artifact content has been described using KOIO terms. In the example, the metadata added specifically by applying core KOIO terms is shown in bold type. While the new KO is described as a product of the Knowledge Systems Lab, the Knowledge element in this example is a product from the creators of the computable phenotype here. As intended, essentially all the metadata from the phenotype's web page appears in the example. KOIO allows us to organize the existing metadata in a new and potentially more useful way by highlighting the Knowledge element and its corresponding documentation. 

```json
{
  "@context": "https://kgrid.org/koio/2.1/context",
  "@id": "https://phekb.org/phenotype/ace-inhibitor-ace-i-induced-cough",
  "KOIOVersion": "2.1",
  "@type": "KnowledgeObject",
  "dc:identifier": "Phenotype 90",
  "dc:version": "1.0.0",
  "dc:date": "2025-05-08",
  "dc:title": "ACE Inhibitor (ACE-I) induced cough",
  "dc:description": "ACE-I induced cough is a common side effect of use of ACE inhibitors, one of the most common class of antihypertensives.  The frequency of ACEI-induced cough varies based on ancestry.  A GWAS of ACEI cough using this algorithm in the eMERGE Network identified KCNIP4 as associated with this phenotype, which was validated in two replication cohorts. Cases are those with ACEI cough.  Controls are those exposed to ACEI without adverse events noted and not switched to angiotensin receptor blockers (ARBs).",
  "dc:contributor": "Vanderbilt University",
  "schema:creator": {
    "@id": "https://kgrid.org",
    "@type": "team",
    "schema:name": "Knowledge Systems Lab",
    "schema:affiliation": "Knowledge Systems Lab, University of Michigan Medical School",
    "schema:email": "kgrid-developers@umich.edu"
  },
  "dc:publisher": "Knowledge Systems Lab",
  "koio:hasKnowledge": {
    "@id": "ACE Inhibitor (ACE-I) induced cough",
    "@type": [
      "Knowledge",
      "Drug Response - adverse effect or efficacy"
    ],
    "implementedBy": {
      "@id": "https://phekb.org/sites/phenotype/files/Ace%20inhibitor%20algorithm-2012-11-20.doc",
      "@type": "Logic description"
    },
    "status":"final",
    "Phenotype Attributes": ["CPT Codes","ICD 9 Codes","Medications","Natural Language Processing"],
    "Network Associations":"eMerge",
    "View Phenotyping Groups":"eMerge Phenotype WG",
    "Owner Phenotyping Groups":"eMerge Vanderbilt Group",
    "dc:source": "https://phekb.org/phenotype/ace-inhibitor-ace-i-induced-cough",
    "dc:format": "doc",
    "dc:date": "2012-11-20",
    "schema:creator": [
      {
        "@type": "Person",
        "schema:familyName": "Mosley",
        "schema:givenName": "Jonathan",
        "schema:affiliation": "Vanderbilt University Medical Center"
      },
      {
        "@type": "Person",
        "schema:familyName": "Denny",
        "schema:givenName": "Josh",
        "schema:affiliation": "Vanderbilt University Medical Center"
      }
    ],
    "dc:description": "Ace inhibitor/cough phenotype algorithm in BioVU",
    "dc:subject": "https://www-ncbi-nlm-nih-gov/mesh/68009404",
    "dc:isReferencedBy": "https://pubmed.ncbi.nlm.nih.gov/26169577/",
    "dc:bibliographicCitation": "Mosley JD, Shaffer CM, Van Driest SL, Weeke PE, Wells QS, Karnes JH, Velez Edwards DR, Wei WQ, Teixeira PL, Bastarache L, Crawford DC, Li R, Manolio TA, Bottinger EP, McCarty CA, Linneman JG, Brilliant MH, Pacheco JA, Thompson W, Chisholm RL, Jarvik GP, Crosslin DR, Carrell DS, Baldwin E, Ralston J, Larson EB, Grafton J, Scrol A, Jouni H, Kullo IJ, Tromp G, Borthwick KM, Kuivaniemi H, Carey DJ, Ritchie MD, Bradford Y, Verma SS, Chute CG, Veluchamy A, Siddiqui MK, Palmer CN, Doney A, MahmoudPour SH, Maitland-van der Zee AH, Morris AD, Denny JC, Roden DM. A genome-wide association study identifies variants in KCNIP4 associated with ACE inhibitor-induced cough. Pharmacogenomics J. 2016 Jun;16(3):231-7. doi: 10.1038/tpj.2015.51. Epub 2015 Jul 14. PMID: 26169577; PMCID: PMC4713364.",
    "hasDocumentation": [
      {
        "@id": "https://phekb.org/phenotype/ace-inhibitor-ace-i-induced-cough",
        "@type": "InformationArtifact",
        "dc:title": "ACE Inhibitor (ACE-I) induced cough"
      },
      {
        "@id": "https://phekb.org/sites/phenotype/files/ACEiCough_Data_Dictionary_VU_final.xls",
        "@type": "InformationArtifact",
        "dc:title": "Data Dictionary for ACEi Cough"
      },
      {
        "@id": "https://phekb.org/sites/phenotype/files/ACEi_cough_validation_guidelines_v3.doc",
        "@type": "InformationArtifact",
        "dc:title": "ACEi_cough_validation_guidelines_v3.doc"
      },
      {
        "@id": "https://phekb.org/sites/phenotype/files/validation%20spreadsheet.xls",
        "@type": "InformationArtifact",
        "dc:title": "validation spreadsheet.xls"
      }
    ]
  }
}
```

6. Tools and Tests

Tools
Github is used to create a repository for KOIO and manage the ontology's life cycle. Github Issues is used to track changes to the KOIO ontology and Github Pages is used to deploy the ontology's files and documentation.

Protege version 5.6.4 has been used to create and validate the core OWL file.

Owl2jsonld version 0.2.1 used to generate JSON_LD Context File From KOIO OWL File.

In addition to the tools for managing KOIO, for people who wish to develop their own Knowledge Objects following the KOIO specification, the KGrid SDK CLI can be used to:
Initiate a Knowledge Object
Create Knowledge Object Information Pages
Perform Metadata-driven Packaging of Knowledge Objects
	
Testing
Ontology individuals and pytests are used to validate changes to the KOIO ontology. Two examples, bmi and tobacco KO, are created as individuals in the KOIO OWL file and loaded into an RDF graph along with the ontology during testing. Using an available python file with KOIO tests in it, the pytest framework is used to verify the accuracy of relationships within the ontology using unit tests.

When updating the KOIO ontology, changes are only considered complete and ready for merging into the main branch once all related tests and examples are updated, and both existing and new tests are passed successfully.

A. References

Previous KSL-KGRID specifications reviewed while making this document are:
https://kgrid.org/specs/packaging.html 
https://kgrid.org/specs/activationSpec.html#_1-introduction 
https://kgrid.org/specs/kgrid-knowledge-objects.html 

Similar documents used as references when creating this document are:
https://www.w3.org/TR/prov-o/
https://fno.io/spec/
https://www.researchobject.org/ro-crate/specification/1.1/index.html

Ontologies used as upper level terms and/or to define terms included in KOIO are:
Basic Formal Ontology (BFO)
Information Artifact Ontology (IAO)
Software Ontology (SWO)



