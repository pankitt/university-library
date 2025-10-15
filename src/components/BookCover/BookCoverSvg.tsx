import { FC } from 'react';

type Props = {
  coverColor: string;
};

const BookCoverSvg: FC<Props> = ({ coverColor }) => {
  return (
    <svg width={330} height={500} viewBox="0 0 330 500" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="330" height="500" rx={14} fill={coverColor} />
    </svg>
  );
};

export default BookCoverSvg;
