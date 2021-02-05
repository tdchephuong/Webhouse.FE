import { SystemState } from "./types";

export const getCountValue = (state: SystemState) =>
  state.count && state.count.value;
