export function ErrorMessage({ errors }: { errors: string[] | undefined }) {
  if (!errors?.length) return null;

  return (
    <p className="text-sm text-red-500">
      {errors[0]}
    </p>
  )
}