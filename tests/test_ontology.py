import pytest
from rdflib import Graph, Namespace, RDF, URIRef
from SPARQLWrapper import SPARQLWrapper, JSON
from rdflib.plugins.sparql import prepareQuery

# Define namespaces
KOIO = Namespace("https://kgrid.org/koio#")
SWO = Namespace("http://www.ebi.ac.uk/swo/")
OBO = Namespace("http://purl.obolibrary.org/obo/")

# Fixture to initialize RDF graph and SPARQL wrapper
@pytest.fixture(scope="module")
def graph():
    g = Graph()
    g.parse("koio.owl", format="xml")
    return g

def test_what_KOs_are_implemented_by_KOIO(graph):
    KO_list = set(graph.subjects( RDF.type,KOIO.KnowledgeObject))
    assert { KOIO.tobaccoKO, KOIO.bmiKO} == KO_list
    

def test_what_KOs_have_at_least_one_service(graph):
    KO_list = set(graph.subjects( KOIO.hasService, None))
    assert {KOIO.tobaccoKO, KOIO.bmiKO} == KO_list    
    
def test_what_KOs_have_at_least_a_service_of_type_CLI(graph):
    KO_list = set(graph.subjects( KOIO.hasService / RDF.type, SWO["interface/SWO_9000053"]))
    assert {KOIO.tobaccoKO, KOIO.bmiKO} == KO_list  

def test_what_KOs_have_at_least_a_service_of_type_API(graph):
    KO_list = set(graph.subjects( KOIO.hasService / RDF.type, SWO["interface/SWO_9000054"]))
    assert {KOIO.bmiKO} == KO_list  

def test_what_services_are_implemented_for_a_specific_KO(graph):
    service_list = set(graph.objects( KOIO.tobaccoKO , KOIO.hasService))  
    assert {KOIO.tobaccoCLIService} == service_list  
    
def test_which_KO_is_implemented_by_a_specific_piece_of_software(graph):
    KO = next(graph.subjects( KOIO.hasService / SWO.SWO_0000085 , URIRef("https://kgrid.org/koio#tobacco_cli.ts")),None)  
    assert KOIO.tobaccoKO == KO
    
def test_which_KO_bmiTest_belong_to(graph):
    KO = next(graph.subjects( KOIO.hasTest , URIRef("https://kgrid.org/koio#bmiTestKO.ts")),None)  
    assert KOIO.bmiKO == KO
    
def test_if_bmiKO_hasTest(graph):
    tests = next(graph.objects( KOIO.bmiKO , KOIO.hasTest),None)  
    assert tests
    
def test_which_KO_bmiDocumentation_belong_to(graph):
    KO = next(graph.subjects( KOIO.hasDocumentation , URIRef("https://kgrid.org/koio#bmiKODocumentation.md")),None)  
    assert KOIO.bmiKO == KO
    
def test_if_bmiKO_hasDocumentation(graph):
    documents = next(graph.objects( KOIO.bmiKO , KOIO.hasDocumentation),None)  
    assert documents
    
def test_that_toboccoKO_has_no_Documentation(graph):
    documents = next(graph.objects( KOIO.tobaccoKO , KOIO.hasDocumentation),None)  
    assert not documents