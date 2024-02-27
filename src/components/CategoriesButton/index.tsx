import { Link } from "react-router-dom";
import links from "../../routes";

const CategoriesButton = () => {
  return (
    <div>
      {links.map(({ id, name, link }) => (
        <Link to={link} key={id}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesButton;
