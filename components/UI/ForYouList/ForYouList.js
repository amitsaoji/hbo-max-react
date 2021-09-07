const ForYouList = props => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className="foryou-list">
      <h3 className="foryou-list__title">For You</h3>
      <div className="foryou-list__thumbnails">
        {loopComp(
          <div className="foryou-list__thumbnail">
            <img src="https://cdn.pixabay.com/photo/2014/12/15/17/16/boardwalk-569314_1280.jpg" />
            <div className="foryou-list__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default ForYouList;
