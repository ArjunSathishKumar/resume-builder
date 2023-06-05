const initialState = {
  name: "",
  email: "",
  address: "",
  phone: "",
  educations: [
    {
      institution: "",
      year: "",
      degree: "",
    },
  ],
  experiences: [
    {
      company: "",
      year: "",
      designation: "",
    },
  ],
  skills: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_RESUME":
    case "UPDATE_RESUME":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
