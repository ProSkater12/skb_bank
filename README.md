# skb_bank
 Тестовое задание для SKB Bank

1. Создайте таблицу стилей XSLT
1.1. input: входящее сообщение
<ns1:input xmlns:ns1="ns1:test" xmlns:ns2="ns2:test">
<ns1:element id="1">
<ns2:field1>1</ns2:field1>
<ns2:field2>2</ns2:field2>
<ns2:field3>3</ns2:field3>
</ns1:element>
<ns1:element id="2">
<ns2:field1>4</ns2:field1>
<ns2:field2>5</ns2:field2>
<ns2:field3>6</ns2:field3>
</ns1:element>
</ns1:input>
1.2. output: результат из 1.1.
<output>
<element id="1">
<field1 element_id="1">1</field1>
<field2 element_id="1">2</field2>
<field3 element_id="1">3</field3>
</element>
<element id="2">
<field1 element_id="2">4</field1>
<field2 element_id="2">5</field2>
<field3 element_id="2">6</field3>
</ns1:element>
</output>
 Корневой элемент изменен на output,
 Копирование всех тегов без пространств имен,
 Копирование атрибутов,
 В теги field1, field2, field3 добавить атрибут element_id со значением атрибута id вышестоящего
элемента - element
1.3. output: результат из 1.1.
<ns1:output xmlns:ns1="ns1:test" xmlns:ns2="ns2:test" xmlns:ns3="ns3:test">
<ns1:element id="1">
<ns3:concat>1231</ns3:concat>
</ns1:element>
<ns1:element id="2">
<ns3:concat>4561</ns3:concat>
</ns1:element>
</ns1:output>
 Корневой элемент изменен на output,
 Добавлено пространство имен xmlns:ns3="ns3:test"
 Значение тега ns3:concat - конкатенация значений тегов ns2:field1, ns2:field2, ns2:field3, и атрибута
id вышестоящем элементе - ns1:element
2
2. Создайте js преобразование
2.1. input xml: из xml
в json
<ns1:input xmlns:ns1="ns1:test" xmlns:ns2="ns2:test">
<ns1:element id="1">
<ns2:field1>1</ns2:field1>
<ns2:field2>2</ns2:field2>
<ns2:field3>3</ns2:field3>
</ns1:element>
<ns1:element id="2">
<ns2:field1>4</ns2:field1>
<ns2:field2>5</ns2:field2> <ns2:field3>6</ns2:field3>
</ns1:element>
</ns1:input>
2.1. output json:
{"elements": [
 {"element": {
 "field1": "1",
 "field2": "2",
 "field3": "3",
 "id": "1"
 }},
 {"element": {
 "field1": "4",
 "field2": "5",
 "field3": "6",
 "id": "2"
 }}
]}
2.2. input json: из json в xml
{"elements": [
 {"element": {
 "field1": "1",
 "field2": "2",
 "field3": "3",
 "id": "1"
 }},
 {"element": {
 "field1": "4",
 "field2": "5",
 "field3": "6",
 "id": "2"
 }}
]}
3
2.2. output xml:
<ns1:input xmlns:ns1="ns1:test" xmlns:ns2="ns2:test">
<ns1:element id="1">
<ns2:field1>1</ns2:field1>
<ns2:field2>2</ns2:field2>
<ns2:field3>3</ns2:field3>
</ns1:element>
<ns1:element id="2">
<ns2:field1>4</ns2:field1>
<ns2:field2>5</ns2:field2>
<ns2:field3>6</ns2:field3>
</ns1:element>
</ns1:input>
