import FormSection from "@/components/FormSection";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Head from "next/head";
import { cookies } from "next/headers";
import Script from "next/script";

export default function Home() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <>
      <Script
        src={"//cdn.cookie-script.com/s/6acf3e14ec60b0517b534b83ae5e6c39.js"}
      ></Script>

      <Hero />
      <FormSection />
      <Featured />
    </>
  );
}
