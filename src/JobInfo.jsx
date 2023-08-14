import Duties from "./Duties";

const JobInfo = ({ data, currentIndex }) => {
  // 渲染 index 為 x 的 object
  const { company, dates, title, duties } = data[currentIndex];

  return (
    <article>
      <h3>{title}</h3>
      <h5 className="job-company">{company}</h5>

      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
