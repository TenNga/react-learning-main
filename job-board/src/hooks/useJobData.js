import React, { useContext } from "react";
import { useQueries } from "react-query";
import JobsContext from "../context/Jobs";
import useJobId from "./useJobId";
import {useJobContext} from "./useJobContext";

function useJobData () {
    const { lastUser, fetchJobs } =  useJobContext();
    const {data: ids,isLoading} = useJobId();

    const userQueries = () => {
        let arrayQuery = [];

        for(let index = 0; index < lastUser; index ++) {
            arrayQuery.push(
                    {
                        queryKey: `job-${index}`,
                        queryFn: ()=> ids?.length > 0 && fetchJobs(ids[index]),
                        enabled: !!ids,
                        staleTime: Infinity
                    }
                )
        }
        return arrayQuery;
    }

    return {data: useQueries(userQueries()), isLoading: isLoading}
}
export default useJobData;