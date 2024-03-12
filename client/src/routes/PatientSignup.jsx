import { Helmet } from "react-helmet";

function PatientSignup() {
  return (
    <>
      <Helmet>
        <title>Signup | User</title>
      </Helmet>
      <div className=" dark:bg-slate-800 w-full px-6 lg:px-12 py-6 lg:py-12 flex flex-col text-lg dark:text-white items-center h-screen">
        <div className="dark:bg-slate-400">
            Signup
        </div>
      </div>
    </>
  );
}

export default PatientSignup;
