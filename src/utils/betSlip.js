import { Status } from "../const";

export const isRunnerActive = (data, dataIndex, runnerIndex) => {
  if (
    data?.[dataIndex]?.status === Status.OPEN &&
    data?.[dataIndex]?.runners?.[runnerIndex]?.status === Status.ACTIVE
  ) {
    return true;
  } else {
    return false;
  }
};

export const getBackPrice = (data, dataIndex, runnerIndex) => {
  return data?.[dataIndex]?.runners?.[runnerIndex]?.back?.[0]?.price;
};
