class car {
    constructor(name,modal,capacity,number){
        this.name=name;
        this.modal=modal;
        this.capacity=capacity;
        this.number=number;
    }
    showDetail()
    {
        console.log
        (`
        car name: ${this.name}
        car modal: ${this.modal}
        fuel capacity: ${this.capacity}
        number plate : ${this.number}`);
    }
}
let c1=new car('civic',2022,10,1234)
c1.showDetail();

class tesla extends car{
    constructor(name,modal,capacity,number,fuel){
        super(name,modal,capacity,number)
        this.fuel=fuel;
    }

    showDetail(){ 
        console.log(`
        car name: ${this.name}
        car modal: ${this.modal}
        fuel capacity: ${this.capacity}
        number plate : ${this.number};
        Fuel : ${this.fuel}`
        )
    }
}
let c2 =new tesla (`tesla`,2022,122,1212,'electrical')
    c2.showDetail();