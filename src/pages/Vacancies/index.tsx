import AppCard from "../../components/AppCard";
import Header from "../../components/Header/Header";
import "./Styles.css";

export default function Vacancies() {
  return (
    <>
      <Header />

      <main id="vacancies">
        <h1>Eventos</h1>
        <div className="event-cards">
          <AppCard
            title="Desenvolvedor Mobile JR"
            content={`<strong>Empresa:</strong> TI Connect<br><strong>Salário:</strong> R$ 3.200,00<br><strong>Horário:</strong> 08:00 às 17:00`}
          />
          <AppCard
            title="Estágio Desenvolvedor Web"
            content={`<strong>Empresa:</strong> TI Inove<br><strong>Salário:</strong> R$ 3.200,00<br><strong>Horário:</strong> 08:00 às 14:00`}
          />
          <AppCard
            title="Desenvolvedor Back-end"
            content={`<strong>Empresa:</strong> Bora Logo<br><strong>Salário:</strong> R$ 2.200,00<br><strong>Horário:</strong> 09:00 às 18:00`}
          />
          <AppCard
            title="Programa de Estágios - TechMais"
            content={`<strong>Empresa:</strong> Tech Mais<br><strong>Salário:</strong> R$ 1.200,00<br><strong>Horário:</strong> 09:00 às 16:00`}
          />
          <AppCard
            title="Desenvolvedor Mobile JR"
            content={`<strong>Empresa:</strong> Bora Logo<br><strong>Salário:</strong> R$ 2.200,00<br><strong>Horário:</strong> 09:00 às 18:00`}
          />
        </div>
      </main>
    </>
  );
}
