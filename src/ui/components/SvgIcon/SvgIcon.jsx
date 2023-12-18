import icons from "../../../utilities/icons";

const SvgIcon = ({ icon }) => {
  const IconComponent = icons[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
};

export default SvgIcon;
