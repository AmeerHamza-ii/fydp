const fetchTotalMSE = async ({ queryKey }) => {
  //   const data = queryKey[1];

  const res = await fetch(`http://localhost:5000`);
  if (!res.ok) {
    throw new Error(`An error occurred while fetching the Total MSE.`);
  }
  return res.json();
};

export default fetchTotalMSE;
