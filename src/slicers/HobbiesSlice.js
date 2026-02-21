const hobbieModule = {
  state:{
    hobbies: [
      {
        name: 'sport',
        count: 2400,
      },
      {
        name: 'movie',
        count: 34000,
      },
    ]
  },
  mutations : {
    setHobbies(state, hobbies) {
      state.hobbies = hobbies
    }
  },
  getters: {
    getHobbies: state => state.hobbies,
  },
}

export default hobbieModule;
