const JokerIcon: React.FC<IconProps> = ({ d, color, fontSize }) => {
  return (
    <svg width={fontSize} height={fontSize} viewBox={`0 0 24 24`} fill="none">
      <path d={d} fill={color} />
    </svg>
  );
};

export default JokerIcon;
