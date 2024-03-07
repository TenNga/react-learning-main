import React, { useContext } from 'react';
import { useQuery, useQueries } from "react-query";
import JobsContext from '../context/Jobs';
import EachJob from './EachJob';

function JobList() {
    const { jobIds,usersjobIds, setJobIds, fetchJobIds, fetchJobs, lastUser, setLastUser } = useContext(JobsContext);

    const {data: ids,isLoading} = useQuery(
        'jobId',
        fetchJobIds,
        { onSuccess: ()=> {
            setJobIds(ids);
        } }
    )

    const userQueries = () => {
        let arrayQuery = [];

        for(let index = lastUser; index < lastUser+6; index ++) {
            // console.log("jobid:: ",jobIds[index]);
            arrayQuery.push(
                    {
                        queryKey: `job-${index}`,
                        queryFn: ()=>jobIds?.length > 0 && fetchJobs(jobIds[index]),
                        onSuccess: ()=> {
                            setLastUser(index);
                        }
                    }
                )
        }
        return arrayQuery;
    }

    console.log("Use Queries:: ", userQueries());

    const users = useQueries(userQueries())
    console.log('Users:: ',users);

    const renderJobs = users?.map(job => <div key={job.data?.id}>{job.data?.title}</div>)

    return <div>{isLoading? 'Loading....' : renderJobs }</div>
};

export default JobList;