import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getKanyeQuote = createAsyncThunk("kanye/kanyeQuote", async () => {
  const res = await axios.get("https://api.kanye.rest/")
  return res.data
})
