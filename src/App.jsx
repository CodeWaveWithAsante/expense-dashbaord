import Navbar from "./componenets/navbar";
import Info from "./componenets/info";
import Stats from "./componenets/stats";
import Chart from "./componenets/chart";
import DoughnutChart from "./componenets/doughnutchart";
import Transactions from "./componenets/transactions";
import Accounts from "./componenets/accounts";
import useStore from "./store";

const App = () => {
  const theme = useStore((state) => state.theme);
  return (
    <main className={theme}>
      <div className='w-full px-6 md:px-20 bg-white dark:bg-slate-900'>
        <Navbar />

        <div className='px-0 md:px-5 2xl:px-20'>
          <Info
            title='Dashboard'
            subTitle='Monitor your financial activities'
          />
          <Stats />

          <div className='w-full flex flex-col-reverse md:flex-row items-center gap-10'>
            <Chart />
            <DoughnutChart />
          </div>

          <div className='flex flex-col-reverse md:flex-row gap-0 md:gap-10 2xl:gap-20'>
            <Transactions />
            <Accounts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
