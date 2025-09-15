'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Home() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!captchaToken) {
      alert('Please complete the captcha first');
      return;
    }

    // send token to your backend for verification
    const res = await fetch('/api/verify-captcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: captchaToken }),
    });

    const data = await res.json();
    if (data.success) {
      alert('Captcha verified!');
    } else {
      alert('Captcha failed!');
    }
  };

  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl">Next.js with reCAPTCHA</h1>

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={(token) => {
          setCaptchaToken(token);
        }}
      />

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </main>
  );
}
