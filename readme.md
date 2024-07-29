---
layout: default
title: KOIO
permalink: /index.html
---

# KOIO - The Knowledge Object Implementation Ontology
This repository is for evolving, sharing, and managing KOIO. KOIO formally defines the structure of Knowledge Objects using linked data representations made available in canonical OWL files. 

A Knowledge Object is a formally-stuctured information content resource that, when concretized, becomes a compound digital object. By intention, KOIO specifies a lightweight or minimalist user-oriented, computation-focused digital object container specifically for packaging and organizing machine-processable knowledge assets that include "code that runs."



KOIO ontology is currently used in the [Knowledge Grid (KGrid) poject](https://github.com/kgrid/specs/blob/master/docs/evolving-conceptual-model.md) for [creating knowledge objects](https://github.com/kgrid/specs/blob/master/docs/kgrid-knowledge-objects.md).

## Downloads
- Download latest version of KOIO at [https://kgrid.org/koio/koio.owl](https://kgrid.org/koio/koio.owl)
- Download context file for [KGRID knowledge object development](https://github.com/kgrid/specs/blob/master/docs/kgrid-knowledge-objects.md) at [https://kgrid.org/koio/koio.json](https://kgrid.org/koio/koio.json)
- Access older releases at [https://github.com/kgrid/koio/releases](https://github.com/kgrid/koio/releases)

## Documentation
The KOIO ontology documentation could be found at [https://kgrid.org/koio/docs/](https://kgrid.org/koio/docs/)

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

- **Documentation Procedures**
    - Readme.md includes
        - description of the ontology
        - download links (link to latest version of the OWL file, Context file and older versions of the ontology)
        - documentation link 
        - description of KSL
        - instructions for Proposal and Change (Governance) Procedures

    - Technical ontology documentation: 
        - created using Protégé’s OWLDoc generator for the active ontology
        - must be updated every time the ontology changes 

- **Proposal and Change (Governance) Procedures**
    - Change proposals should be recorded under issues in the KOIO Ontology Management project with all the details needed to discuss, plan and execute the change. 
    - Issue templates will be used to help contributors know all the details needed for their proposed changes (i.e. add term, add synonym, revise subclass relationship, new annotation, Obsolete a term, …) when adding a new issue
    - A branch will be created for the work needed to be done to complete each approved change 
    - Changes are only considered complete and ready for merge to the main when the OWL file, documentation, context files and examples are updated
    - Once the changes are finalized they will be merged to the main branch 

- **Ontology Evaluation Procedures**    
    - Add individuals\instances to the ontology
    - Perform Syntax Validation using tools like Protégé
    - Develop competency questions
    - Implement unit tests using SPARQL Queries
    - Integrate testing to GitHub using GitHub Actions for automatic Continuous Integration


## Tools
- Ontology [validation service](http://iot.ee.surrey.ac.uk/SSNValidation/)
- [JSON LD Playground](https://json-ld.org/playground/)
- [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)
- [JSON-LD](http://www.w3.org/TR/json-ld/)

