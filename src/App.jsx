import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    const url = "https://www.course-api.com/react-tabs-project";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      {isLoading ? (
        <section className="jobs-center">
          <div className="loading"></div>
        </section>
      ) : (
        <section className="jobs-center">
          <JobInfo jobs={jobs} />
        </section>
      )}
    </div>
  );
};
export default App;
