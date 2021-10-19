(function (win, doc) {
  'use strict';
  var $companyName = doc.querySelector('[data-js="company-name"]');
  var $companyPhone = doc.querySelector('[data-js="company-phone"]');
//inputs
  var $image = doc.querySelector('[data-js="image"]');
  var $tdBrand = doc.querySelector('[data-js="brand-model"]');
  var $tdYear = doc.querySelector('[data-js="year"]');
  var $tdPlate = doc.querySelector('[data-js="plate"]');
  var $tdColor = doc.querySelector('[data-js="color"]');
//button
  var $btn = doc.querySelector('[data-js="btn"]');

  var ajax = new XMLHttpRequest();
  ajax.open('GET', '/company.json', true);
  ajax.send();
  ajax.addEventListener('readystatechange', getInfos , false);

  function getInfos(){ //PEGO INFORMAÇÕES DO ARQUIVO JSON
    if(isRequestOk()){
      var data = JSON.parse(ajax.responseText);
      $companyName.textContent = data.name;
      $companyPhone.textContent = data.phone;
    }
  }
  function isRequestOk(){
    return ajax.readyState === 4 && ajax.status === 200;
  }

  $btn.onclick = function clickButton(){
    console.log('submit');
    var $tableCar = doc.querySelector('[data-js="table-car"]');
    $tableCar.appendChild(createNewCar());
  };
  
  function createNewCar () {
    
    const $fragment = doc.createDocumentFragment();
    var $tr = doc.createElement('tr');
    var $TdImage = doc.createElement('td');
    var $Image = document.createElement('img')
    var $TdBrand= doc.createElement('td');
    var $TdYear = doc.createElement('td');
    var $TdPlate = doc.createElement('td');
    var $TdColor = doc.createElement('td');
    var $tdRemove = doc.createElement('button');
    $Image.setAttribute('src', $image.value);
    $TdImage.appendChild($Image);
    
    $TdBrand.textContent = $tdBrand.value;
    $TdYear.textContent = $tdYear.value;
    $TdPlate.textContent = $tdPlate.value;
    $TdColor.textContent = $tdColor.value;
    $tdRemove.setAttribute('id','meuId');
    $tdRemove.textContent = 'x';
    $tr.appendChild($TdImage);
    $tr.appendChild($TdBrand);
    $tr.appendChild($TdYear);
    $tr.appendChild($TdPlate);
    $tr.appendChild($TdColor);
    $tr.appendChild($tdRemove);

    saveStorage();//salvando no storage

    clearData(); //coloquei um limpa inputs

    $tdRemove.addEventListener("click", () => {
      removeStorage(); //removendo do storage
      return $tr.parentNode.removeChild($tr);
    });

    return $fragment.appendChild($tr);
  }

  function saveStorage(){
    win.localStorage.setItem('Url', $image.value);
    win.localStorage.setItem('Marca', $tdBrand.value);
    win.localStorage.setItem('Ano', $tdYear.value);
    win.localStorage.setItem('Placa', $tdPlate.value);
    win.localStorage.setItem('Cor', $tdColor.value);
  }

  function removeStorage(){
    win.localStorage.removeItem('Url');
    win.localStorage.removeItem('Marca');
    win.localStorage.removeItem('Ano');
    win.localStorage.removeItem('Placa');
    win.localStorage.removeItem('Cor');
  }

  function clearData(){
    $image.value = '';
    $tdBrand.value = '';
    $tdYear.value = '';
    $tdPlate.value = '';
    $tdColor.value = '';
  }


  


})(window, document);