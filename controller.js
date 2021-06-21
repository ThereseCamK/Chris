function removeItem(index){
    model.Trær.splice(index, 1)
    show();
}

function addNewItem(){
    const newObject ={
        sort: model.inputs.sort,
        type: model.inputs.blad
    }
    if(model.inputs.sort == '' || model.inputs.blad == ''){
        model.feilmelding = 'fyll inn begge feltene';
    }
    else {

        model.Trær.push(newObject);
        model.feilmelding = 'Du har lalgt til en ny '
    }
    model.inputs.sort = '';
    model.inputs.blad = '';
    show();
}