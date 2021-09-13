import JokerIcon from './JokerIcon';

export const AddIcon: React.FC<IconProps> = ({
  color = '#000',
  fontSize = 24,
}) => {
  const d =
    'M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z';
  return <JokerIcon d={d} color={color} fontSize={fontSize} />;
};

export const ArrowDownIcon: React.FC<IconProps> = ({
  color = '#000',
  fontSize = 24,
}) => {
  const d =
    'M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z';
  return <JokerIcon d={d} color={color} fontSize={fontSize} />;
};

export const ArrowRightIcon: React.FC<IconProps> = ({
  color = '#000',
  fontSize = 24,
}) => {
  const d =
    'M9.29006 15.88L13.1701 12L9.29006 8.11998C8.90006 7.72998 8.90006 7.09998 9.29006 6.70998C9.68006 6.31998 10.3101 6.31998 10.7001 6.70998L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z';
  return <JokerIcon d={d} color={color} fontSize={fontSize} />;
};

export const ArrowUpIcon: React.FC<IconProps> = ({
  color = '#000',
  fontSize = 24,
}) => {
  const d =
    'M8.11997 14.71L12 10.83L15.88 14.71C16.27 15.1 16.9 15.1 17.29 14.71C17.68 14.32 17.68 13.69 17.29 13.3L12.7 8.70998C12.31 8.31998 11.68 8.31998 11.29 8.70998L6.69997 13.3C6.30997 13.69 6.30997 14.32 6.69997 14.71C7.08997 15.09 7.72997 15.1 8.11997 14.71Z';
  return <JokerIcon d={d} color={color} fontSize={fontSize} />;
};
