const app = require('../src/app');
const session = require('supertest');
const agent = session(app)
//este objeto se puede reutilizar en diferentes it 
const character = {
    id: 923,
    name: "Nacho",
    species: "Human",
    gender: "Male",
    status: "Alive",
    origin: {
        name: "Earth (C.137"
    },
    image: "image.jpg"
}

describe("Test de RUTAS",()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it("Responde con status: 200", async ()=>{
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
            const response = await agent.get('/rickandmorty/character/1')
            //generamos un array con las propiedades que necesitamos que verifique el test 
            // const props = ["id", "name", "species", "gender", "status", "origin", "image"];
            // props.forEach(prop =>{// con forEach recorremos el array props y con toHaveProperty verificamos que tenga las propiedades 
            //     expect(response.body).toHaveProperty(prop)
            for(const prop in character){
                expect(response.body).toHaveProperty(prop);
            }
            })
        
        it("Si hay un error responde con status: 500", async ()=>{
            const response = await agent.get('/rickandmorty/character/1000k')
            expect(response.statusCode).toBe(500)
            })
    })
    describe("GET /rickandmorty/login", ()=>{
        it("Responde con un objeto con la propiedad access en true si la informacion del usuario es valida", async ()=>{
            const response = await agent.get("/rickandmorty/login?email=ejemplo@gmail.com&password=1password")//no se debe mandar el mail y contraseña por query en este caso lo hacemos al no tener base de datos
            const access = { access: true};
            expect(response.body).toEqual(access);
        })
        it("Responde con un objeto con la propiedad access en false si la informacion del usuario no es valida", async ()=>{
            const response = await agent.get("/rickandmorty/login?email=ejemplo@gmail.com&password=1passworddd")
            const access = { access: false};
            expect(response.body).toEqual(access);
            })
    })
    describe("POST /rickandmorty/fav", () =>{
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post("/rickandmorty/fav").
            send(character);
            expect(response.body).toContainEqual(character)// toContainEqual sirve para buscar un objeto en un array y este sirve para objetos y array 
        })
        it("Debe agregar personajes a favoritos sin eliminar los que ya existian", async () =>{
            //modifico dos propiedades del objeto character
            character.id = 1923;
            character.name = "Lucy"
            const response = await request.post("/rickandmorty/fav").
            send(character);
            expect(response.body.length).toBe(2);
        })
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        it("Si el ID solicitado no existe, debe retornar un arreglo con todos los favoritos", async() =>{
             const response = await request.delete("/rickandmorty/fav/2")
             expect(response.body.length).toBe(2);
        })
    })    
    })        
    })
 