# KOIO - The Knowledge Object Implementation Ontology
This repository is for evolving, sharing, and managing KOIO. KOIO formally defines the structure of Knowledge Objects using linked data representations made available in canonical OWL files. 

A Knowledge Object is a formally-stuctured information content resource that, when concretized, becomes a compound digital object. By intention, KOIO specifies a lightweight or minimalist user-oriented, computation-focused digital object container specifically for packaging and organizing machine-processable knowledge assets that include "code that runs." 

## Knowledge Systems Laboratory
KSL is an R&D lab in the Department of Learning Health Sciences at the University of Michigan Medical School. KSL created KOIO in 2016-17. It was first conceived as part of the Knowledge Grid (KGrid) program for devising better socio-technical knowledge infrastructure components for learning health systems. By 2023-24, KOIO came to be seen as an important KSL deliverable in its own right.

## How to Use this Repository
Each version of KOIO is represented in its own versioned directory (data/releases).  We will use index.html to redirect to the 
current version and the default KOIO format (OWL).  Each version will contain its own documentation. 

* **index.html** will redirect to the current version
* **version (#.#)** is intended to capture each version or implentation of Knowledge Object Implementation Ontology (KOIO)
  * **index.html** will redirect to the correct KOIO format (_turtle, RDF, JSON LD, etc_)
  * **docs** contains the documentation for this implemetaion of the KOIO
* **contexts** hosts the context files for KnowledgeObject and Implementations

## Tools
- Ontology [validation service](http://iot.ee.surrey.ac.uk/SSNValidation/)
- [JSON LD Playground](https://json-ld.org/playground/)
- [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)
- [JSON-LD](http://www.w3.org/TR/json-ld/)
