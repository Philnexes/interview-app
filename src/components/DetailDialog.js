const DetailDialog = ({ movieDetail }) => {
  return (
    <div>
      <h2>
        {movieDetail?.title || movieDetail?.name || movieDetail?.originalName}
      </h2>
      <p>{movieDetail?.overview}</p>
    </div>
  );
};

export default DetailDialog;
