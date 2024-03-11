import React, { useContext } from "react";
import JobsContext from "../context/Jobs";

export const useJobContext = () => {
    return useContext(JobsContext);
}