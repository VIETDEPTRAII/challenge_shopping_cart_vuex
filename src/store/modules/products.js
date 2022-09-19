const state = {
  allProducts: [
    {
      id: 'p1',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
      title: 'Book Collection',
      description:
        'A collection of must-read books. All-time classics included!',
      price: 99.99,
    },
    {
      id: 'p2',
      image:
        'https://s3.envato.com/files/268795742/Tourist%20camp%20in%20mountains%20with%20tent%20and%20cauldron%20over%20fire%20at%20sunset.jpg',
      title: 'Mountain Tent',
      description: 'A tent for the ambitious outdoor tourist.',
      price: 129.99,
    },
    {
      id: 'p3',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
      title: 'Food Box',
      description:
        'May be partially expired when it arrives but at least it is cheap!',
      price: 6.99,
    },
  ],
};

const getters = {
  activeProducts (state) {
    return state.allProducts;
  }
}
const mutations = {}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
