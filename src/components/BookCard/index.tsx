import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import BookCover from '@/components/BookCover';
import { Button } from '@/components/ui/button';
// interface Props {
//   id: number;
//   title: string;
//   genre: string;
//   color: string;
//   cover: string;
//   isLoanedBook?: boolean;
// }

// block w-83 h-130

const BookCard = ({ id, title, genre, color, cover, isLoanedBook = false }: IBook) => {
  return (
    <li className={cn(isLoanedBook && 'xs:w-52 w-full')}>
      <Link
        href={`/book/${id}`}
        className={cn(isLoanedBook && 'w-full flex flex-col items-center')}
      >
        <BookCover coverColor={color} coverImage={cover} />
        <div className={cn('mt-4', !isLoanedBook && 'xs:max-w-40 max-w-28')}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>

        {isLoanedBook && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <Image
                src="/icons/calendar.svg"
                alt="calendar"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-neutral-100 ml-2">11 days left to return</p>
            </div>
            <Button className="book-btn mt-2">Download receipt</Button>
          </div>
        )}
      </Link>
    </li>
  );
};
export default BookCard;
