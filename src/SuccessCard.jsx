export default function SuccessCard({ setOpen, setEmail, email }) {
  console.log(email);
  return (
    <div className="fixed inset-0 bg-[#2E2F53] bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col items-start gap-6">
        <img
          src="./assets/icon-success.svg"
          alt="success"
          className="w-12 h-12"
        />

        <h1 className="text-[#232742] text-4xl font-bold leading-tight">
          Thanks for subscribing!
        </h1>

        <p className="text-[#232742] text-base">
          A confirmation email has been sent to
          <span className="font-bold">{email} </span> Please open it and click
          the button inside to confirm your subscription.
        </p>

        <button
          className="w-full bg-[#232742] text-white py-3 rounded-lg font-semibold"
          onClick={() => {
            setOpen(false);
            setEmail(""); // clear AFTER closing
          }}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}
