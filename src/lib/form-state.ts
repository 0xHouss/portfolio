import { ZodError } from "zod";

export type FormState = {
  status: 'UNSET' | 'SUCCESS' | 'ERROR';
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
  formData: FormData
  redirect: string;
  reset: boolean;
  timestamp: number;
  toast?: {
    title: string;
    description?: string;
  };
};

export const EMPTY_FORM_STATE: FormState = {
  status: 'UNSET',
  message: '',
  fieldErrors: {},
  formData: new FormData(),
  redirect: '',
  reset: false,
  timestamp: Date.now(),
};

export function fromErrorToFormState(error: unknown, formData: FormData): FormState {
  if (error instanceof ZodError) {
    return toFormState('ERROR', formData, {
      fieldErrors: error.flatten().fieldErrors,
    })
  } else if (error instanceof Error) {
    return toFormState('ERROR', formData, {
      toast: {
        title: 'An error occured !',
        description: error.message
      }
    });
  } else {
    return toFormState('ERROR', formData, {
      toast: {
        title: 'An error occured !'
      }
    });
  }
};

export const toFormState = (
  status: FormState['status'],
  formData: FormData,
  {
    message = '',
    redirect = '',
    reset = false,
    toast,
    fieldErrors = {},
  }: {
    message?: string,
    redirect?: string,
    reset?: boolean,
    toast?: {
      title: string;
      description?: string;
    },
    fieldErrors?: FormState['fieldErrors']
  }): FormState => ({
    status,
    message,
    redirect,
    reset,
    toast,
    fieldErrors,
    formData,
    timestamp: Date.now(),
  })

export const getPrevValue = (state: FormState, key: string) => state.formData.get(key) && !state.reset ? state.formData.get(key)!.toString() : ''