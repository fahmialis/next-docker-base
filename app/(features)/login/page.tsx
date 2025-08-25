'use client';
import { Controller, useForm } from 'react-hook-form';
import { loadingAtom } from '@/app/store/loadingAtom';
import { useAtom } from 'jotai';
export default function LoginPage() {
  const { handleSubmit, control } = useForm<{
    firstName: string;
    lastName: string;
  }>({
    defaultValues: {
      firstName: 'ini first name',
      lastName: '',
    },
  });
  const [_isLoading, setIsLoading] = useAtom(loadingAtom);

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <form
      onSubmit={handleSubmit(() => onSubmit())}
      className="flex flex-col gap-3 bg-amber-500"
    >
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <div className="flex gap-2.5">
            <label htmlFor="firstName">firstName</label>
            <input {...field} />
          </div>
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <select {...field}>
            {[1, 2, 3, 4, 5].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
      />
      <input type="submit" />
    </form>
  );
}
