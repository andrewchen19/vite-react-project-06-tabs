import { AiOutlineDoubleRight } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <>
      {duties.map((duty) => {
        // 生成 unique id
        const id = uuidv4();

        return (
          <div key={id} className="job-desc">
            <span className="job-icon">
              <AiOutlineDoubleRight />
            </span>
            <p>{duty}</p>
          </div>
        );
      })}
    </>
  );
};

export default Duties;
