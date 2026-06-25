export default function AboutTimeline({ milestones }) {
  return (
    <div className="about-timeline-wrap" aria-label="Xinrongplas development milestones">
      {milestones.map((item) => (
        <article className="about-timeline-card" key={`${item.year}-${item.title}`}>
          <img
            src={item.image}
            alt={`${item.year} ${item.title} - Xinrongplas development milestone`}
            title={`${item.year} ${item.title}`}
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
          />
          <div className="about-timeline-marker">
            <span />
            <strong>{item.year}</strong>
          </div>
          <div className="about-timeline-body">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
