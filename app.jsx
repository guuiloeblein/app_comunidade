import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function ComunidadeApp() {
  const [incidentes, setIncidentes] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [eventos, setEventos] = useState([]);

  const [novoIncidente, setNovoIncidente] = useState("");
  const [novoServico, setNovoServico] = useState("");
  const [novoEvento, setNovoEvento] = useState("");

  const adicionarIncidente = () => {
    if (novoIncidente) {
      setIncidentes([...incidentes, novoIncidente]);
      setNovoIncidente("");
    }
  };

  const agendarServico = () => {
    if (novoServico) {
      setServicos([...servicos, novoServico]);
      setNovoServico("");
    }
  };

  const registrarEvento = () => {
    if (novoEvento) {
      setEventos([...eventos, novoEvento]);
      setNovoEvento("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="p-4 sm:p-6 max-w-full sm:max-w-2xl mx-auto bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-xl"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-700 drop-shadow-sm">Portal da Comunidade</h1>
      <Tabs defaultValue="incidentes">
        <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6 bg-blue-100 rounded-xl p-2 shadow-md">
          <TabsTrigger value="incidentes" className="text-blue-700">Incidentes</TabsTrigger>
          <TabsTrigger value="servicos" className="text-blue-700">Serviços</TabsTrigger>
          <TabsTrigger value="eventos" className="text-blue-700">Eventos</TabsTrigger>
        </TabsList>

        <TabsContent value="incidentes">
          <Card className="bg-blue-50 shadow-md">
            <CardContent className="space-y-4 p-4 sm:p-6">
              <Input
                placeholder="Descreva o incidente"
                value={novoIncidente}
                onChange={(e) => setNovoIncidente(e.target.value)}
                className="border-blue-300"
              />
              <Button onClick={adicionarIncidente} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white transition-all">Registrar</Button>
              <ScrollArea className="h-40">
                <ul className="list-disc pl-5 text-blue-900">
                  {incidentes.map((item, i) => (
                    <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>{item}</motion.li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="servicos">
          <Card className="bg-green-50 shadow-md">
            <CardContent className="space-y-4 p-4 sm:p-6">
              <Input
                placeholder="Solicite um serviço público"
                value={novoServico}
                onChange={(e) => setNovoServico(e.target.value)}
                className="border-green-300"
              />
              <Button onClick={agendarServico} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white transition-all">Agendar</Button>
              <ScrollArea className="h-40">
                <ul className="list-disc pl-5 text-green-900">
                  {servicos.map((item, i) => (
                    <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>{item}</motion.li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eventos">
          <Card className="bg-yellow-50 shadow-md">
            <CardContent className="space-y-4 p-4 sm:p-6">
              <Input
                placeholder="Sugira ou divulgue um evento cultural"
                value={novoEvento}
                onChange={(e) => setNovoEvento(e.target.value)}
                className="border-yellow-300"
              />
              <Button onClick={registrarEvento} className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white transition-all">Enviar</Button>
              <ScrollArea className="h-40">
                <ul className="list-disc pl-5 text-yellow-900">
                  {eventos.map((item, i) => (
                    <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>{item}</motion.li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
