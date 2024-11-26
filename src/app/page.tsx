"use client"

import ErrorSpan from "@/components/feedbacks/Errors";
import Loading from "@/components/feedbacks/Loading";
import Footer from "@/components/layout/Footer/footer";
import Header from "@/components/layout/Header/Header";
import { queryClient } from "@/services/queryClient";
import { QueryClientProvider } from '@tanstack/react-query';
import "./scss/page.scss";

export default function Home() {
return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi minus et labore placeat veniam voluptatum expedita sequi fuga optio, nostrum iste quo dolorem! Magni provident iusto saepe temporibus odio maxime.

        <div>
          <ErrorSpan message={" Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/>
          <Loading height="20" width="20" fontSize="1"/>
        </div>
      </main>
      <Footer />
    </QueryClientProvider>
)
}
