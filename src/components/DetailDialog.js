const DetailDialog = ({ showDetail, setShowDetail }) => {
  return (
    <div className={`detail-dialog ${showDetail ? "active-detail" : " "}`}>
      <h1>pokus</h1>
    </div>
  );
};

export default DetailDialog;
