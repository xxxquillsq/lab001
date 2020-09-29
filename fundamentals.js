const aCar = {
    owner : "Joe Bloggs",
    previous_owners: [
        { name : ' Pat Smith ', address : '1 Main Street'},
        { name : 'Sheila Dwyer ', address : '2 High Street'},
      ],
    type : {make:'Toyota ',
            model:'Corolla',
            CC:'1.8'},
    registration :{year:'201',
                   countyCode:'WD',
                   number:'1058',
                   },
    mileage : '10000',
    color:{exteriorColor:'red',
           interiorFabric:{ texture :'leather',
                            shade :'cream',
           },
    }
};

console.log('First owner : ' + aCar.previous_owners[0].name+''+aCar.previous_owners[0].address)
console.log('Second owner : ' + aCar.previous_owners[1].name+''+aCar.previous_owners[1].address)