/* #Flux permite tener acceso a pila de datos(store)/funciones(actions) de cualquier archivo */
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      planets: [] /*variable global para guardar datos, poder acceder desde Home y hacer map*/,
      characters: [],
	  character: [],
	  planet: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /*se ejecuta al cargar la página*/
        fetch("https://www.swapi.tech/api/people")
          .then((resp) => resp.json())
          .then((resp) => setStore({ characters: resp.results })) /*resp para que se entienda el código, depende de la estructura cómo guarda la info*/
          .catch((err) => console.error(err));

        fetch("https://www.swapi.tech/api/planets")
          .then((resp) => resp.json())
          .then((resp) => setStore({ planets: resp.results }))
          .catch((err) => console.error(err));
      },
	  get_character: (uid) => {
		fetch(`https://www.swapi.tech/api/people/${uid}`)
		.then((resp) => resp.json())
		.then((resp) => setStore({ character: resp.result.properties })) /*resp para que se entienda el código, depende de la estructura cómo guarda la info*/
		.catch((err) => console.error(err));	
	  },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
