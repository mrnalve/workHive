// Add data to local storage
const addToDb = singleJobData => {
    let appliedJobs = []

    // get previous data from local storage
    let storedCart = localStorage.getItem('Applied-jobs')
    if (storedCart) {
        appliedJobs = JSON.parse(storedCart)
        let exist = appliedJobs.find(appliedJob => appliedJob.id == singleJobData.id);
        if (!exist) {
            appliedJobs.push(singleJobData)
        } else {
            return
        }
    } else {
        appliedJobs.push(singleJobData)
    }
    localStorage.setItem('Applied-jobs', JSON.stringify(appliedJobs))
}


export { addToDb }