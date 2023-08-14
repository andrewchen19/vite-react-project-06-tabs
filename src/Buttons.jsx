const Buttons = ({ data, currentIndex, buttonHandler }) => {
  return (
    <div className="btn-container">
      {data.map((item, index) => {
        // 檢查是否為 active 的 button
        const isActive = index === currentIndex;

        return (
          <button
            key={item.id}
            className={isActive ? "job-btn active-btn" : "job-btn"}
            onClick={() => buttonHandler(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
