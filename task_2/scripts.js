const expJson2Xml = JSON.stringify({
  "elements": [{
      "element": {
        "field1": "1",
        "field2": "2",
        "field3": "3",
        "id": "1"
      }
    },
    {
      "element": {
        "field1": "4",
        "field2": "5",
        "field3": "6",
        "id": "2"
      }
    }
  ]
});
const xmlString = '<ns1:input xmlns:ns1="ns1:test" xmlns:ns2="ns2:test"><ns1:element id="1"><ns2:field1>1</ns2:field1><ns2:field2>2</ns2:field2><ns2:field3>3</ns2:field3></ns1:element><ns1:element id="2"><ns2:field1>4</ns2:field1><ns2:field2>5</ns2:field2><ns2:field3>6</ns2:field3></ns1:element></ns1:input>';
let parser = new DOMParser();
const expXml2Json = parser.parseFromString(xmlString, "text/xml");

//Универсальные функции перевода json в xml не работают, потому что:
//1. Из json примера нельзя понять, что вложенный элемент, а что атрибут
//2. В json примере нет нигде пространства имен
//3. Названия тегов отличаются
//Поэтому логично, что js преобразование должно подходить только для
//существующего примера.
//На вход подается json строка
function optionalJson2Xml(json){
  //Для простоты переводим JSON строку в обьект
  let obj = JSON.parse(json);
  //результат
  let res = '';
  for (el in obj.elements){
    for(field in obj.elements[el]){
      res += `<ns1:element id="` + obj.elements[el].element.id + `">
        <ns2:field1>` + obj.elements[el].element.field1 + `</ns2:field1>
        <ns2:field2>` + obj.elements[el].element.field2 + `</ns2:field2>
        <ns2:field3>` + obj.elements[el].element.field3 + `</ns2:field3>
      </ns1:element>
      `;
    }
  }
  //Парсим в XML
  res = string2Xml('<ns1:input xmlns:ns1="ns1:test" xmlns:ns2="ns2:test">' + res + '</ns1:input>');

  return res;
}

//Функция для перевода строки в XML документ
function string2Xml(str){
  //IE
 if (window.ActiveXObject) {
   var oXML = new ActiveXObject("Microsoft.XMLDOM"); oXML.loadXML(str);
   return oXML;
 }
 //Chrome, Safari, Firefox, Opera, и тд.
 else {
   return (new DOMParser()).parseFromString(str, "text/xml");
 }
}

//Функция перевода из XML в JSON (только для заданного xml)
//На вход подается документ XML
//Возвращаем json строку
function optionalXml2Json(xml){
  //Создаем основу (имени в xml нет, так что создаем самостоятельно)
  let json = {
    elements: []
  };
  //Обрабатываем все дочерние элементы из входящего xml
  for(let i = 0; i < xml.querySelector("input").children.length; i++){
    parseNode(xml.querySelector("input").children[i], json);
  }

  return JSON.stringify(json);
}

function parseNode(node, result){
  //Добавляем в результат элемент оболочку (element)
  result.elements[result.elements.length] = {
    [node.nodeName.substring(4, node.nodeName.length)]: {}
  };

  //Парсим все xml строчки дочерних элементов и заносим в результат
  //в соответствии с их именем и значением
  for(let i = 0; i < node.children.length; i++){
    result.elements[result.elements.length-1][node.nodeName.substring(4, node.nodeName.length)][node.children[i].nodeName.substring(4,node.children[i].nodeName.lenght)] = node.children[i].firstChild.nodeValue;
  }
  //Добавляем в element id
  result.elements[result.elements.length-1][node.nodeName.substring(4, node.nodeName.length)]['id'] = node.attributes['id'].value;
}
