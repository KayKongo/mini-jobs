const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return <div>{duty}</div>;
      })}
    </div>
  );
};
export default Duties;
