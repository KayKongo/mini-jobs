import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

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
    <div className="jobs-center">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <section style={{ display: "flex", flexDirection: "row" }}>
          <BtnContainer jobs={jobs} />
          <JobInfo jobs={jobs} />
        </section>
      )}
    </div>
  );
};
export default App;
