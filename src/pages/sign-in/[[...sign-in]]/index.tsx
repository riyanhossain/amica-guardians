import BaseLayout from "@/components/base-layout";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <BaseLayout>
      <section className="bg-charcoal flex flex-col items-center justify-center flex-1">
        <SignIn />
      </section>
    </BaseLayout>
  );
}
