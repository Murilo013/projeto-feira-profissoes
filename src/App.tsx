import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Fase1 from "./pages/fase1"; // 👈 importa aqui
import Fase1Intro from "./pages/fase1/introducao";

import Fase2 from "./pages/fase2";
import Fase2Intro from "./pages/fase2/introducao";

import Fase3 from "./pages/fase3"; // 👈 importa aqui
import Fase3Intro from "./pages/fase3/introducao"

import Fase4 from "./pages/fase4"
import Fase4Intro from "./pages/fase4/introducao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/fase1" element={<Fase1 />} />
          <Route path="/fase1/introducao" element={<Fase1Intro />} />

          <Route path="/fase3/introducao" element={<Fase3Intro />} />
          <Route path="/fase3" element={<Fase3 />} />

          <Route path="/fase2/introducao" element={<Fase2Intro />} />
          <Route path="/fase2" element={<Fase2 />} />

          <Route path="/fase4/introducao" element={<Fase4Intro />} />
          <Route path="/fase4" element={<Fase4 />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
