export const jobsData = async()=>{
    const jobsData = await fetch('jobsData.json')
    const jobs = await jobsData.json()
    return jobs
}