import React, { createContext, useState } from "react";
import axios from "axios";

const JobsContext = createContext();

function Provider({children}) {

    const [jobIds, setJobIds ] = useState([]);
    const [lastUser, setLastUser] = useState(6);

    const fetchJobIds = async() => {
        const jobIdURL = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
        const response = await axios.get(jobIdURL);
        return response.data;
    }

    const fetchJobs = async(id) => {
        const jobMetaURL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
        const response = await axios.get(jobMetaURL)
        console.log("Fetching Single Job:: ",response.data.id)
        return response.data;
    }
    const valueToShare = {jobIds, setJobIds, fetchJobIds, fetchJobs, lastUser, setLastUser };
    return <JobsContext.Provider value={valueToShare}>
                {children}
            </JobsContext.Provider>
}

export {Provider};
export default JobsContext;