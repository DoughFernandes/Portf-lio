"use client"

import Footer from "@/components/layout/Footer/footer";
import Header from "@/components/layout/Header/Header";
import Lobby from "@/components/layout/Lobby/lobby";
import Navegation from "@/components/layout/Nav/navegation";
import { queryClient } from "@/services/queryClient";
import { QueryClientProvider } from '@tanstack/react-query';
import "./scss/page.scss";

export default function Home() {
return (
    <QueryClientProvider client={queryClient}>
      <Header />
        <main>
          <Lobby />
          <Navegation />
        </main>
      <Footer />
    </QueryClientProvider>
)
}
