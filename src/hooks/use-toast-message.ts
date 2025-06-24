import { FormState } from '@/lib/form-state';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

export function useToastMessage(formState: FormState) {
  const prevTimestamp = useRef(formState.timestamp);
  const router = useRouter()

  useEffect(() => {
    if (!(
      formState.toast &&
      formState.timestamp !== prevTimestamp.current
    )) return;

    if (formState.status === 'ERROR')
      toast.error(formState.toast.title, {
        description: formState.toast.description
      });
    else
      toast(formState.toast.title, {
        description: formState.toast.description
      });

    prevTimestamp.current = formState.timestamp;

    if (formState.redirect)
      router.push(formState.redirect)
  }, [formState, router]);
};