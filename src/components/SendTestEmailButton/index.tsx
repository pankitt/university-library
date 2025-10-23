'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { sendTestEmail } from '@/lib/actions/sendTestEmail';

export function SendTestEmailButton() {
  const handleClick = async () => {
    try {
      await sendTestEmail();
      toast.success('Email sent successfully ✅');
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Server unreachable ❌';
      toast.error(message);
    }
  };

  return (
    <Button onClick={handleClick} variant="default">
      Test Letter
    </Button>
  );
}
