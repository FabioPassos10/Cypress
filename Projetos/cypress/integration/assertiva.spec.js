/// <references types = "cypress">

it('Verificando igualdade 🟰', () => {
    const a = 5;
    expect(a).to.be.equal(5);
    expect(a, `deve ser igual a ${a}`).to.be.equal(5);
    expect(a).to.be.not.equal('b');
});

it('Verificando verdadeiro e falso ✅❌', () => {
    const a = true;
    const b = false;
    let c;

    expect(a).to.be.true;
    expect(b, `deve ser igual false`).to.be.false;
    expect(a).to.be.not.false;
    expect(c).to.be.undefined;
});
it('Verificando iqualdade de objetos🔎', () => {
    const a = {
        nome: 'Fábio Eloy Passos',
        idade: 20,
    };
    const b = {
        a: 'a',
        b: 2,
    };
    const c = {
        nome: 'Fábio Eloy Passos',
        idade: 20,
    };
    
    expect(a).to.be.equal(a);
    expect(b).to.be.equal(b);
    expect(a).eql(c);
    expect(a).include({nome: 'Fábio Eloy Passos'})
    // expect(a).to.be.deep.equal(b);
    expect(a).to.not.be.empty;
   

});


it('Arrays 🗄️', () => {
    const a = [1,2,3,4,5,6]
    expect(a).to.have.members([1,2,3,4,5,6]);
    expect(a).to.include.members([1]);
    expect(a).to.be.not.empty;
});

it('Tipos 🔠🔢', () => {
    const n = 1;
    const str = 'string';


    expect(n).to.be.a('number');
    expect(str).to.be.a('string');
});

it('String 🔤', () => {
    const str = "String teste";

    expect(str).to.be.equals("String teste");
    expect(str).to.have.length(12);
    expect(str).to.match(/teste$/); //verifica se termina com a palavra 'teste'
    expect(str).to.match(/^String/); //verifica se começa com a palavra 'String'

});

it('Numeros 🔢', () => {

    const a = 1;
    const b = 1.55;


    expect(a).to.be.equal(1);
    expect(b).to.be.equal(1.55);
    expect(a).to.be.above(0); //Verifica se o valor de 'a' é ACIMA de 0;
    expect(a).to.be.below(3); //Verifica se o valor de 'a' é ABAIXO de 3;
    
    
});