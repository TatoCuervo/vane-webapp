import { createAction } from "@reduxjs/toolkit";

// NOTE: global action that can be listened by multiple reducers
// (this is why it is not included in a particual slice, but as a standalone action itself)

export const reset = createAction("store/reset");
