from zeep import Client

# Testando integração com SOAP

client = Client('http://soapclient.com/xml/soapresponder.wsdl')
result = client.service.Method1(bstrParam1='Oi', bstrParam2='Tchau')
print(result)
