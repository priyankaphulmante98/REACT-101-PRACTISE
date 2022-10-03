// Write Code here
// do a default export
export default function Image({title, src, alt, width, height }) {

  return (
    <div>
      <h2>{title}</h2>
      <img src={src} width={width} height={height} alt={alt} />
     </div>
  );
}

