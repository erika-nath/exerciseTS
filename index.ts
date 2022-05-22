interface Vehicle{
    name:string;
    year:number;
    broken:boolean;
}

const oldFord={
    name:'F250',
    year:1994,
    broken:true
};

const printAuto=(vehicle:Vehicle):void =>{
    console.log(`Name:${vehicle.name}`);
    console.log(`Year:${vehicle.year}`);
    console.log(`Broken:${vehicle.broken}`);
};

printAuto(oldFord);
