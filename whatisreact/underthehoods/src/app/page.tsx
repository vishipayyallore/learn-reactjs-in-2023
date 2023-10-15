import PageTitle from "@/components/PageTitle";

const Home = () => {

  const pageTitle = 'React JS - Under the Hoods';

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <PageTitle title={pageTitle}></PageTitle>

        <ul className="flex flex-col items-center text-blue-800 justify-center space-y-4">
        </ul>
      </main>
    </div>
  )
};

export default Home;