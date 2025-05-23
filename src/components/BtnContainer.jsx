const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  const selectJob = (value) => {
    setCurrentItem(value);
  };

  return (
    <div className="btn-container">
      {jobs.map((job) => {
        return (
          <button
            key={job.id}
            className="job-btn"
            onClick={() => selectJob(job.order)}
          >
            {job.title}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
