import React, { useContext } from 'react';
import { useQuery, useQueries } from "react-query";
import JobsContext from '../context/Jobs';
import EachJob from './EachJob';
import useJobData  from '../hooks/useJobData';

function JobList() {
    const { fetchJobIds, fetchJobs, lastUser, setLastUser } = useContext(JobsContext);
    console.log("USEHOOD:: ",useJobData())

    const {isLoading} = useJobData().isLoading;
    const users = useJobData().data;

    const handleLoadmore = (e) => {
        setLastUser(pre=> pre + 6)
    }

    const renderJobs = users?.map(job => <div key={job.id}>{job.data?.title}</div>)

    return <div>
        {isLoading? 'Loading....' : renderJobs } 
        <button onClick={handleLoadmore}>Load 6 more</button>
        </div>
};

export default JobList;