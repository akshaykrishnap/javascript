class A {
    method(){
        console.log(`inside mathod A`);
    }
    method(n){
        this.n1=n
        console.log(`number is ${this.n1}`);
    }
    method(m,v){
        this.n2=m
        this.n3=v
        console.log(`number is ${this.n2},${this.n3}`);
    }
}
const obj=new A
obj.method(5) /// always last function