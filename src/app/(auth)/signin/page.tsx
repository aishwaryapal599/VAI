import SigninForm from "@/components/forms/SigninForm";

export default function Page() {
  return (
    <div className="mx-auto  flex h-lvh max-w-lg items-center">
      <div className="m-3 grid w-full grid-flow-row space-y-6 rounded-xl border border-indigo-950/10 bg-white p-6 shadow-xl ">
        <SigninForm />
      </div>
    </div>
  );
}
