function Img(props) {
  let ur = "";
  let h = 100;
  let title = "";
  // let videoLink ="https://www.youtube.com/watch?v=";
  let videoLink = "";
  if (props.u) {
    ur = props.u.thumbnails[0].url;
    h = props.u.thumbnails[0].height;
    title = props.u.title;
    videoLink = props.u.videoId;
  }
  var url = `https://www.youtube.com/watch?v=${videoLink}`;
  return (
    <>
      <img src={ur} alt="" height={h} />
      <h3>{title}</h3>
      <a href={url}>Link</a>
    </>
  );
}

export default Img;
