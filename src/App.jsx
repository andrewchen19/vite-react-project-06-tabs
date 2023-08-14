import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "./Loading";
import Buttons from "./Buttons";
import JobInfo from "./JobInfo";

// external API
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    // 重新拿取資料時，將 loading 狀態變回 true
    setIsLoading(true);
    try {
      let response = await axios.get(url);
      // console.log(response);
      setData(response.data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // conditional rendering
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }

  // event Handling
  const buttonHandler = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main className="jobs-center">
      <Buttons
        data={data}
        buttonHandler={buttonHandler}
        currentIndex={currentIndex}
      />
      <JobInfo data={data} currentIndex={currentIndex} />
    </main>
  );
};
export default App;
