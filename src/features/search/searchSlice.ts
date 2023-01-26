import { createSlice } from "@reduxjs/toolkit";
import { DataByIpDTO } from "../../shared/dtos/dataByIpDTO";
import { AppThunk } from "../../app/store";
import { getDataByIp, getIpClient } from "../../services/services";

interface Initial {
  data: DataByIpDTO | undefined;
}

const initialState: Initial = {
  data: undefined,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setData: (state, actions) => {
      state.data = actions.payload;
    },
  },
});

export const { setData } = searchSlice.actions;

export const getIp = (): AppThunk => {
  return async (dispatch) => {
    const ip = await getIpClient();
    dispatch(getInfoDataByIp(ip));
  };
};

export const getInfoDataByIp = (ip: string): AppThunk => {
  return async (dispatch) => {
    const data = await getDataByIp(ip);
    dispatch(setData(data));
  };
};

export default searchSlice.reducer;
