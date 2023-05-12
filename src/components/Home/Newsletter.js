export default function Newsletter() {
  return (
    <div className="bg-brightNavyBlue">
      <div className="max-w-[987px] text-white py-16 rounded-xl w-[90%] mx-auto text-center grid gap-3">
        <h3 className="text-4xl font-black capitalize">
          subscribe to our newsletter
        </h3>
        <p className="max-w-[653px] mx-auto">
          Stay Informed and Protected from Cyber Threats - Subscribe to Our
          Cybersecurity Newsletter Now
        </p>
        <div className="flex w-fit flex-col gap-5 s:gap-0 s:flex-row mx-auto items-center rounded-md s:bg-white p-1">
          <input
            type="text"
            placeholder="Enter your email address..."
            className="text-black placeholder:text-[#000000b2] bg-white s:bg-transparent py-3 px-3 s:rounded-tl-md s:rounded-bl-md rounded-md"
          />
          <button className="bg-brightNavyBlue border-white border px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
