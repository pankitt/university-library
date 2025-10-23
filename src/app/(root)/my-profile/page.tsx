import { Button } from '@/components/ui/button';
import { signOut } from '@/auth';
import BookList from '@/components/BookList';
import { sampleBooks } from '@/constants';
// import { sendTestEmail } from '@/lib/actions/sendTestEmail';
import { SendTestEmailButton } from '@/components/SendTestEmailButton';

const Page = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <form
          action={async () => {
            'use server';

            await signOut();
          }}
          className="mb-10"
        >
          <Button>Logout</Button>
        </form>

        {/*<form
          action={async () => {
            'use server';
            await sendTestEmail();
          }}
          className="mb-10"
        >
          <Button variant="default">Test Letter</Button>
        </form>*/}
        <SendTestEmailButton />
      </div>

      <BookList title="Borrowed Books" books={sampleBooks} />
    </>
  );
};
export default Page;
