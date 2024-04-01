import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const designSlice = createSlice({
  name: "design",
  initialState: {
    data: {
      design: {
        header: {
          img: null,
          enable: true,
        },
        title: {
          enable: true,
          color: null,
          text: null,
        },
        form: {
          color: null,
        },
        tableimage: {
          img: null,
          enable: true,
        },
        footer: {
          img: null,
          enable: true,
        },
        rudraksh: [
          {
            name: "one-Mukhi Rudraksha",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Two-Mukhi Rudraksha",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Three-Mukhi Rudraksha",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Four-Mukhi Rudraksha",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Six-Mukhi Rudraksha",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Seven-Mukhi Rudraksha",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Nine-Mukhi Rudraksha",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Thirteen-Mukhi Rudraksha",
            img: null,
            description: null,
            link: null,
          },
        ],
        gems: [
          {
            name: "Moonga",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Panna",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Ruby",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Neelam",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Opal",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Pukhraj(Yellow sapphire)",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Amethyst",
            img: null,
            description: null,
            link: null,
          },
        ],
        bracelet: [
          {
            name: "Sun stone",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Amethyst",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "7-chakra",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Natural turquise",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Cat eye",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Golden obsidian",
            img: "test",
            description: null,
            link: null,
          },
          {
            name: "Green aventurian",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Rudraksh crystal",
            img: "test",
            description: null,
            link: null,
          },
          {
            name: "Dalmatian",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Rose quartz",
            img: "test",
            description: null,
            link: null,
          },
          {
            name: "Tiger eye",
            img: "test",
            description: null,
            link: null,
          },
          {
            name: "Sodalite",
            img: null,
            description: null,
            link: null,
          },
          {
            name: "Hematite",
            img: null,
            description: null,
            link: null,
          },
        ],
        resultbox: {
          userinput: true,
          rashidetails: true,
          gems: true,
          bracelet: true,
          rudraksh: true,
          product: true,
        },
      },
    },
  },
  reducers: {
    setInitialState: (state, action) => {
      state.data = action.payload;
      console.log(state.data);
    },
  },
});

export const fetchInitialState = () => async (dispatch) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(apiUrl); // Replace with your API endpoint
    dispatch(designSlice.actions.setInitialState(response.data.data)); // Assuming your API returns the initial state
  } catch (error) {
    console.error("Error fetching initial state:", error);
  }
};

export const actions = designSlice.actions;
export default designSlice;
