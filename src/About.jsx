import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="aboutus">
        <h1 className="about">About Us!</h1>
        <h2>Our Story</h2>
        <p>
          Susie's Retirement Crafting began because we have always loved
          crafting, but didn't always have the time. Now that I'm retired, I
          have the time and want to share my work with everyone!!
        </p>
        <h2>Our Goals</h2>
        <p>
          Our goals when first starting this little hobby/business was to simply
          show the world and our local NEPA area cool and fun craft and DIY
          ideas to hopefully inspire others!
        </p>
        <h2>What do we do?</h2>
        <p>
          Susie's Retirement Crafting does virtually anything. We try to push
          our limits on every new project!
        </p>
        <h2>Get In Touch</h2>
        <p className="aboutcontact">
          We'd love to hear from you! If you have any questions, want custom
          work done, or suggestions, please don't hesitate to{" "}
          <Link to="/Contact">Contact Us</Link>. I would love to help in any way
          possible!
        </p>
      </div>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
