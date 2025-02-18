---
layout: default
title: KOIO
permalink: /index.html
---

# KOIO - The Knowledge Object Implementation Ontology
KOIO is a domain ontology that tells us what a Knowledge Object is as an artifact. It describes Knowledge Objects and their parts as they are implemented. For this reason, KOIO generally serves as an evolving formal and explicit model of Knowledge Objects. It can be used to describe the parts of many computable biomedical knowledge (CBK) artifacts found in the wild. In addition, KOIO functions as a formal specification for linked metadata relevant for describing, annotating, packaging, and handling CBK artifacts.

The Knowledge Systems Lab (KSL) at the University of Michigan began work on KOIO in 2016 and continues to evolve KOIO over time. KSL’s general approach is to keep KOIO concise, connected, and common.

To keep it concise, only a very small number of new terms describing key parts known to be valuable to CBK stakeholders are included in KOIO. These KOIO-defined terms include “Knowledge”, “Service”, and “Test”. As a model of Knowledge Objects, KOIO supports multiplicity of these parts meaning that a Knowledge Object may have one or more elements of knowledge plus multiple corresponding services and tests. KOIO enables the lifecycles and provenance of the key individual parts of Knowledge Objects to be tracked and documented independently.

The key parts of Knowledge Objects defined in KOIO are logically connected to terms from the upper-level Basic Formal Ontology (BFO). In addition, KOIO adopts terms from the Information Artifact Ontology (IAO) and the Software Ontology (SWO) wherever possible.

Finally, KOIO tries to leave implementation details out so that it can serve as a common ontology for describing nearly all CBK artifacts, regardless of the platforms or applications that support and incorporate them.

![image](https://github.com/user-attachments/assets/cd93852c-ad4c-4916-9df0-d1846e51b2b7)

KOIO ontology is currently used in the [Knowledge Grid (KGrid) poject](https://github.com/kgrid/specs/blob/master/docs/evolving-conceptual-model.md) for [creating knowledge objects](https://github.com/kgrid/specs/blob/master/docs/kgrid-knowledge-objects.md).

## About this repository
The [KOIO repository](https://github.com/kgrid/koio) is used for evolving, sharing, and managing KOIO. KOIO formally defines the structure of Knowledge Objects using linked data representations made available in canonical OWL files. 

KOIO comes in several versions indicated by folders labeled with version numbers. In addition several legacy contexts and examples of knwoledge objects conforming to various versions of KOIO are included. The other folders and files generaly pertain to the current working version of KOIO which has yet to be released.

## Downloads
- Download latest version of KOIO at [https://kgrid.org/koio/koio.owl](https://kgrid.org/koio/koio.owl)
- Download context file for [KGRID knowledge object development](https://github.com/kgrid/specs/blob/master/docs/kgrid-knowledge-objects.md) at [https://kgrid.org/koio/koio.json](https://kgrid.org/koio/koio.json)
- Access older releases at [https://github.com/kgrid/koio/releases](https://github.com/kgrid/koio/releases)

## Documentation for latest release
The KOIO ontology documentation could be found at [https://kgrid.org/koio/docs/](https://kgrid.org/koio/docs/)

For more detail about the current release please see the slides at [https://drive.google.com/file/d/19DmeYajmh0Wxll7hOjfbEfO_mnDvkSL8/view?usp=drive_link](https://drive.google.com/file/d/19DmeYajmh0Wxll7hOjfbEfO_mnDvkSL8/view?usp=drive_link).
## Knowledge Systems Laboratory (KSL)
KSL is an R&D lab in the Department of Learning Health Sciences at the University of Michigan Medical School. KSL created KOIO in 2016-17. It was first conceived as part of the Knowledge Grid (KGrid) project for devising better socio-technical knowledge infrastructure components for learning health systems. By 2023-24, KOIO came to be seen as an important KSL deliverable in its own right.

## Development roles and rules
Here are the roles of people who will contribute in the development of this ontology and the rules that they should follow:

### Roles (workflow)
- Contributors: Propose a change (create issue in the backlog)
- Committee: Review, approve or disapprove the proposed changes 
- Developers: Create a branch for each approved change, complete the change and merge back to the main. If changes to the main are significant, create a new release

### Rules
- **Release Procedures**
    - Latest version of the ontology is always available under the most recent release
    - The files in the main branch **are not necessarily** the same as the latest version. Main branch may include new completed updates that are not significant to create a new release yet.
    - The repo will not automatically be released on our website with every change to the main.
    - A new release with a new version number will be created whenever the main branch is ready with significant changes. Use **Simplified Two-Part Versioning**, which has two parts: Major.Minor
    - Different versions of the ontology will be available under releases and tags (1.0, 1.1, 1.2, 2.0, …)
    - Once a new release is created, main (the new version) will manually be deployed on https://kgrid.org/koio/ using GitHub Actions workflow.
    - When creating a new release, add a version folder to the main branch like 1.1 and include the context file. The context file will have an @id with the version number (for example: "@id": "https://kgrid.org/koio/1.0/context" )
    - Each time KSL releases a version of KOIO its record in the NCBO Bioportal needs to be updated.

- **Documentation Procedures**
    - Readme.md includes
        - description of the ontology
        - download links (link to latest version of the OWL file, Context file and older versions of the ontology)
        - documentation link 
        - description of KSL
        - instructions for Proposal and Change (Governance) Procedures

    - Technical ontology documentation: 
        - created using Protégé’s OWLDoc generator for the active ontology (delete doc folder and recreate it using OWLDoc)
        - must be updated every time the ontology changes 

- **Proposal and Change (Governance) Procedures**
    - Change proposals should be recorded under issues in the KOIO Ontology Management project with all the details needed to discuss, plan and execute the change. 
    - Issue templates will be used to help contributors know all the details needed for their proposed changes (i.e. add term, add synonym, revise subclass relationship, new annotation, Obsolete a term, …) when adding a new issue
    - A branch will be created for the work needed to be done to complete each approved change 
    - Changes are only considered complete and ready for merge to the main when the OWL file, documentation, tests, context files, graph and examples are updated
        - Example in a released KOIO owl file will conform to the version of that file and only to the version of that file.
    - All existing and new tests should pass before commiting any changes to a branch.
    - Once the changes are finalized they will be merged to the main branch   
    
- **Ontology Evaluation Procedures**    
    - Add individuals\instances to the ontology
    - Perform Syntax Validation using tools like Protégé
    - Develop competency questions
    - Implement unit tests using SPARQL Queries
    - Integrate testing to GitHub using GitHub Actions for automatic Continuous Integration

## Appendix A—Generate JSON_LD Context File From KOIO OWL File Using owl2jsonld Tool
[owl2jsonld](https://github.com/stain/owl2jsonld) is a tool that generate a JSON-LD @context for concepts (classes and properties) found in the specified OWL or RDFS ontology. 
1. Install Java
```batch
# JAVA installation on Linux
sudo apt update
sudo apt install default-jre
```

2. Download the Tool: You can download the owl2jsonld tool from its [GitHub repository](https://github.com/stain/owl2jsonld). The official releases include an uberjar (standalone JAR) that bundles all dependencies and can be used as a command-line tool.

3. Run the JAR File and create the context.json form the owl file:
```batch
java -jar owl2jsonld-0.2.1-standalone.jar file:///path/to/owl/file/koio.owl -o context.json
```

Note: path to owl file must be an IRI starting with `file://`. 


