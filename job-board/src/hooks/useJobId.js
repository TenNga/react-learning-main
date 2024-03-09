import React from "react";
import {useJobContext} from './useJobContext'
import { useQuery } from "react-query";

function useJobId () {
    const { fetchJobIds } =  useJobContext();
    return useQuery(
        'jobId',
        fetchJobIds
    )
}

export default useJobId;