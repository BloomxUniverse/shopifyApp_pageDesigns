import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    data: {
      resultview: false,
      data: {
        requst_url: "na",
        date: "na",
        timezone: "na",
        name: "na",
        email: "na",
        address: "na",
        mobile: "na",
        gender: "na",
        purpose: "na",
        body_weight: "na",
        birth_date: "na",
        birth_time: "na",
        birth_place: "na",
        rashi: {
          moonLongitude: "199°54'56.721\"",
          moonLongitudeFloat: 199.91575583333335,
          moonPositionNumber: 176,
          rashi: "na",
        },
        rudraksh: [
          {
            id: 6,
            "moonsign-id": "na",
            name: "na",
            des: "na",
            created_at: "2023-11-26T10:19:16.000000Z",
            updated_at: "2023-11-26T10:19:16.000000Z",
          },
        ],
        gems: [
          {
            id: 6,
            "moonsign-id": "na",
            name: "na",
            des: "na",
            created_at: "2023-11-26T09:50:28.000000Z",
            updated_at: "2023-11-26T09:50:28.000000Z",
          },
        ],
        bracelet: [
          {
            id: 11,
            "moonsign-id": "na",
            name: "na",
            des: "na",
            created_at: "2023-11-26T10:36:19.000000Z",
            updated_at: "2023-11-26T10:36:19.000000Z",
          },
          {
            id: 12,
            "moonsign-id": "na",
            name: "na",
            des: "na",
            created_at: "2023-11-26T10:36:19.000000Z",
            updated_at: "2023-11-26T10:36:19.000000Z",
          },
        ],
      },
    },
  },
  reducers: {
    setResultview: (state, action) => {
      state.data = action.payload.data;
      console.log(state.data);
    },
  },
});

export const actions = resultSlice.actions;
export default resultSlice;
