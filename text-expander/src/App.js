import { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";

App.propTypes = { collapsedNumWords: PropTypes.number };

export default function App({
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  className,
}) {
  const [expanded, setExpended] = useState(false);

  return (
    <div>
      <TextExpander
        expandButton={setExpended}
        expandButtonText={expandButtonText}
        collapseButtonText={collapseButtonText}
        buttonColor={buttonColor}
        className={className}
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        expandButton={expanded}
        className={className}
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        expandButtonText={expandButtonText}
        collapseButtonText={collapseButtonText}
        buttonColor={buttonColor}
        className="box"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  expanded,
  expandButtonText,
  collapseButtonText,
  children,
  className,
  color,
}) {
  const buttonStyle = { color: `${color}` };
  return (
    <div className={className}>
      <span>{children}</span>
      <button style={buttonStyle}>
        {expanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
