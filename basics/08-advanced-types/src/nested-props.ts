
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
  };
  
  console.log(fetchedUserData.job && fetchedUserData.job.title); // js way
  console.log(fetchedUserData?.job?.title); // ts way