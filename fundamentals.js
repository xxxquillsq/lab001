const aCar = {
    owner : "Joe Bloggs",
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

console.log('It is a '+aCar.color.exteriorColor+ ' car, '+aCar.mileage+ 'mileage, with '+aCar.color.interiorFabric.texture+ ' interior.')