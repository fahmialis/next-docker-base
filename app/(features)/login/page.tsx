'use client';
import { loadingAtom } from '@/app/store/loadingAtom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
export default function LoginPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{
    firstName: string;
    lastName: number;
  }>({
    defaultValues: {
      firstName: 'ini first name',
      lastName: 1,
    },
    resolver: zodResolver(
      z.object({
        firstName: z.string(),
        lastName: z.number(),
      })
    ),
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
          <>
            <select {...field}>
              {[1, 2, 3, 4, 5].map((item) => (
                <option key={item} value={item.toString()}>
                  {item}
                </option>
              ))}
            </select>
            <p style={{ color: 'red' }}>{errors.lastName?.message}</p>
          </>
        )}
      />
      <input type="submit" />
    </form>
  );
}
