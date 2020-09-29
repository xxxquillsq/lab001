const aCar = {
    owner : "Joe Bloggs",
    previous_owners: [
        { name : ' Pat Smith ', address : '1 Main Street'},
        { name : 'Sheila Dwyer ', address : '2 High Street'},
      ],
    type : {make:'Toyota ',
            model:'Corolla',
            CC:'1.8'},
    features : ['Parking assist', 
                'Alarm', 
                'Tow-bar'],
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


for (let i = 0 ; i < aCar.features.length ; i += 1) {  //features length3  012
    console.log(aCar.features[i]) ;
} 
for (let i =0; i<aCar.previous_owners.length; i+=1 )
{
    console.log('previous owner'+(i+1)+':'+aCar.previous_owners[i].name+' '+aCar.previous_owners[i].address)
}
