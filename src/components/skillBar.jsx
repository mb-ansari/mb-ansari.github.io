import { useEffect, useRef, useState } from "react";

export default function SkillBar({ skill, percent, tooltip }) {
  const [width, setWidth] = useState("0%");
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWidth(percent);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [percent]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="d-flex justify-content-between align-items-center">
        <h4>{skill}</h4>
        <span className="skill-percentage">{percent}</span>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width, transition: "width 1.5s ease-in-out" }}
        ></div>
      </div>
      {tooltip && <div className="skill-tooltip">{tooltip}</div>}
    </div>
  );
}
