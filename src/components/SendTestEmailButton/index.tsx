// src/components/SendTestEmailButton.tsx
'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { sendTestEmail } from '@/lib/actions/sendTestEmail';

export function SendTestEmailButton() {
  const handleClick = async () => {
    const result = await sendTestEmail();

    if (result.ok) {
      toast.success('✅ Email sent successfully');
    } else {
      toast.error(`❌ Failed: ${result.error}`);
    }
  };

  return (
    <Button onClick={handleClick} variant="default">
      Send Test Email
    </Button>
  );
}
