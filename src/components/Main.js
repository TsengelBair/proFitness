import Cabinets from "./Cabinet";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__inner">
          <h1 className="main__inner-title">Выберите место</h1>
          <h2 className="main__inner-subtitle">
            Вы можете выбрать любое место, но для первого посетителя оптимальным
            будет первое или последнее
          </h2>
          <Cabinets />
        </div>
      </div>
    </main>
  );
};

export default Main;
